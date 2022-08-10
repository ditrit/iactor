import fs from "fs";
import TerraformParser from 'src/parser/TerraformParser';
import TerraformFile from 'src/models/TerraformFile';
import TerraformResource from 'src/models/TerraformResource';
import TerraformData from 'src/models/TerraformData';
import TerraformAttribute from 'src/models/TerraformAttribute';
import TerraformModule from 'src/models/TerraformModule';
import TerraformProvider from 'src/models/TerraformProvider';
import TerraformVariable from 'src/models/TerraformVariable';
import TerraformMetadata from 'src/metadata/TerraformMetadata';
import {Component, ComponentAttribute} from 'leto-modelizer-plugin-core';

describe('Test TerraformParser', () => {
  const definitions = new TerraformMetadata(JSON.parse(fs.readFileSync('tests/tf/metadata.json', 'utf8')))
    .getComponentDefinitions();

  describe('Test method: parse', () => {
    it('With databaseExample.tf', () => {
      const parser = new TerraformParser();
      const result = parser.parse(definitions, [fs.readFileSync('tests/tf/databaseExample.tf', 'utf8')]);
      const expectedResult = {
        components: [
          new Component(
            '0',
            'rds_subnet',
            definitions.find((definition) => definition.blockType === 'resource' && definition.type === 'aws_db_subnet_group'),
            null,
            [
              new ComponentAttribute('name', 'rds_subnet_grpp'),
              new ComponentAttribute('subnet_ids', ['${aws_subnet.webservers-a.id}', '${aws_subnet.webservers-b.id}']),
            ],
          ),
          new Component(
            '1',
            'myawsdb',
            definitions.find((definition) => definition.blockType === 'resource' && definition.type === 'aws_db_instance'),
            null,
            [
              new ComponentAttribute('allocated_storage', 20),
              new ComponentAttribute('engine', 'mariadb'),
              new ComponentAttribute('engine_version', '10.1.26'),
              new ComponentAttribute('instance_class', 'db.t2.micro'),
              new ComponentAttribute('name', 'myawsdb'),
              new ComponentAttribute('username', 'user'),
              new ComponentAttribute('password', 'password'),
              new ComponentAttribute('db_subnet_group_name', '${aws_db_subnet_group.rds_subnet.id}'),
              new ComponentAttribute('skip_final_snapshot', false),
              new ComponentAttribute('multi_az', true),
              new ComponentAttribute('final_snapshot_identifier', 'myawsdbfinalsnap'),
              new ComponentAttribute('vpc_security_group_ids', ['${aws_security_group.sg_rds.id}']),
            ],
          ),
          new Component(
            '2',
            'sg_rds',
            definitions.find((definition) => definition.blockType === 'resource' && definition.type === 'aws_security_group'),
            null,
            [
              new ComponentAttribute('name', 'sg_rds'),
              new ComponentAttribute('vpc_id', '${aws_vpc.vpc_main.id}'),
              new ComponentAttribute('ingress', [
                new ComponentAttribute('from_port', '${var.mariadb_port}'),
                new ComponentAttribute('to_port', '${var.mariadb_port}'),
                new ComponentAttribute('protocol', 'tcp'),
                new ComponentAttribute('cidr_blocks', ['172.16.0.0/16']),
              ]),
              new ComponentAttribute('egress', [
                new ComponentAttribute('from_port', 0),
                new ComponentAttribute('to_port', 0),
                new ComponentAttribute('protocol', '-1'),
                new ComponentAttribute('cidr_blocks', ['0.0.0.0/0']),
              ]),
              new ComponentAttribute('lifecycle', [
                new ComponentAttribute('create_before_destroy', true),
              ]),
            ],
          ),
        ],
        links: [],
        errors: [],
      };

      expect(expectedResult).toEqual(result);
    });

    it('With dataExample.tf', () => {
      const result = new TerraformParser().parse(definitions, [fs.readFileSync('tests/tf/dataExample.tf', 'utf8')]);
      const expectedResult = {
        components: [
          new Component(
            '0',
            'web',
            definitions.find((definition) => definition.blockType === 'data'),
            null,
            [
              new ComponentAttribute('filter', [
                new ComponentAttribute('name', 'state'),
                new ComponentAttribute('values', ['available']),
              ]),
              new ComponentAttribute('filter', [
                new ComponentAttribute('name', 'tag:Component'),
                new ComponentAttribute('values', ['web']),
              ]),
              new ComponentAttribute('most_recent', true),
            ]
          )
        ],
        links: [],
        errors: [],
      };
      expect(expectedResult).toEqual(result);
    });

    it('With moduleExample.tf', () => {
      const result = new TerraformParser().parse(definitions, [fs.readFileSync('tests/tf/moduleExample.tf', 'utf8')]);
      const expectedResult = {
        components: [
          new Component(
            '0',
            'server',
            definitions.find((definition) => definition.blockType === 'module'),
            null,
            [new ComponentAttribute('source', '../modules/server')],
          ),
          new Component(
            '1',
            'variables',
            definitions.find((definition) => definition.blockType === 'module'),
            null,
            [
              new ComponentAttribute('source', '../modules/variables'),
              new ComponentAttribute('base_cidr_block', '10.0.0.0/8'),
            ],
          ),
        ],
        links: [],
        errors: [],
      };
      expect(expectedResult).toEqual(result);
    });

    it('With providerExample.tf', () => {
      const result = new TerraformParser().parse(definitions, [fs.readFileSync('tests/tf/providerExample.tf', 'utf8')]);
      const expectedResult = {
        components: [
          new Component(
            '0',
            'aws',
            definitions.find((definition) => definition.blockType === 'provider'),
            null,
            [
              new ComponentAttribute('access_key', 'ABCD1234J54PXLDF4IC4WMVA'),
              new ComponentAttribute('secret_key', '28prpojfngldfgPcgiv79Q/J+8o7ksdfsTjmmE2QQBRa'),
              new ComponentAttribute('region', 'eu-west-3'),
            ],
          ),
        ],
        links: [],
        errors: [],
      };
      expect(expectedResult).toEqual(result);
    });

    it('With resourceDataExample.tf', () => {
      const result = new TerraformParser().parse(definitions, [fs.readFileSync('tests/tf/resourceDataExample.tf', 'utf8')]);
      const expectedResult = {
        components: [
          new Component(
            '0',
            'web',
            definitions.find((definition) => definition.blockType === 'resource' && definition.type === 'aws_instance'),
            null,
            [
              new ComponentAttribute('ami', 'data.aws_ami.web.id'),
              new ComponentAttribute('instance_type', 't1.micro'),
            ],
          ),
        ],
        links: [],
        errors: [],
      };
      expect(expectedResult).toEqual(result);
    });

    it('With variableExample.tf', () => {
      const result = new TerraformParser().parse(definitions, [fs.readFileSync('tests/tf/variableExample.tf', 'utf8')]);
      const expectedResult = {
        components: [
          new Component(
            '0',
            'image_id',
            definitions.find((definition) => definition.blockType === 'variable'),
            null,
            [
              new ComponentAttribute('type', 'string'),
            ],
          ),
        ],
        links: [],
        errors: [],
      };
      expect(expectedResult).toEqual(result);
    });
  });
});
