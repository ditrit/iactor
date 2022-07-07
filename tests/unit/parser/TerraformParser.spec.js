import fs from "fs";
import TerraformParser from 'src/parser/TerraformParser';
import TerraformFile from 'src/models/TerraformFile';
import TerraformResource from 'src/models/TerraformResource';
import TerraformData from 'src/models/TerraformData';
import TerraformAttribute from 'src/models/TerraformAttribute';
import TerraformModule from 'src/models/TerraformModule';
import TerraformProvider from 'src/models/TerraformProvider';

describe('Test TerraformParser', () => {
  describe('Test method: parse', () => {
    it('With databaseExample.tf', () => {
      const terraformFile = TerraformParser.parse(fs.readFileSync('tests/tf/databaseExample.tf', 'utf8'));
      expect(new TerraformFile(null, null, [
        new TerraformResource('aws_db_subnet_group', 'rds_subnet', [
          new TerraformAttribute('string', 'name', 'rds_subnet_grpp'),
          new TerraformAttribute('array', 'subnet_ids', [
            '${aws_subnet.webservers-a.id}',
            '${aws_subnet.webservers-b.id}',
          ]),
        ]),
        new TerraformResource('aws_db_instance', 'myawsdb', [
          new TerraformAttribute('number', 'allocated_storage', 20),
          new TerraformAttribute('string', 'engine', 'mariadb'),
          new TerraformAttribute('string', 'engine_version', '10.1.26'),
          new TerraformAttribute('string', 'instance_class', 'db.t2.micro'),
          new TerraformAttribute('string', 'name', 'myawsdb'),
          new TerraformAttribute('string', 'username', 'user'),
          new TerraformAttribute('string', 'password', 'password'),
          new TerraformAttribute('string', 'db_subnet_group_name', '${aws_db_subnet_group.rds_subnet.id}'),
          new TerraformAttribute('boolean', 'skip_final_snapshot', false),
          new TerraformAttribute('boolean', 'multi_az', true),
          new TerraformAttribute('string', 'final_snapshot_identifier', 'myawsdbfinalsnap'),
          new TerraformAttribute('array', 'vpc_security_group_ids', ['${aws_security_group.sg_rds.id}']),
        ]),
        new TerraformResource('aws_security_group', 'sg_rds', [
          new TerraformAttribute('string', 'name', 'sg_rds'),
          new TerraformAttribute('string', 'vpc_id', '${aws_vpc.vpc_main.id}'),
          new TerraformAttribute('map', 'ingress', [
            new TerraformAttribute('string', 'from_port', '${var.mariadb_port}'),
            new TerraformAttribute('string', 'to_port', '${var.mariadb_port}'),
            new TerraformAttribute('string', 'protocol', 'tcp'),
            new TerraformAttribute('array', 'cidr_blocks', ['172.16.0.0/16']),
          ]),
          new TerraformAttribute('map', 'egress', [
            new TerraformAttribute('number', 'from_port', 0),
            new TerraformAttribute('number', 'to_port', 0),
            new TerraformAttribute('string', 'protocol', '-1'),
            new TerraformAttribute('array', 'cidr_blocks', ['0.0.0.0/0']),
          ]),
          new TerraformAttribute('map', 'lifecycle', [
            new TerraformAttribute('boolean', 'create_before_destroy', true),
          ]),
        ]),
      ])).toEqual(terraformFile);
    });

    it('With dataExample.tf', () => {
      const terraformFile = TerraformParser.parse(fs.readFileSync('tests/tf/dataExample.tf', 'utf8'));
      expect(new TerraformFile(null, null, [new TerraformData('aws_ami', 'web', [
        new TerraformAttribute('map', 'filter', [
          new TerraformAttribute('string', 'name', 'state'),
          new TerraformAttribute('array', 'values', ['available']),
        ]),
        new TerraformAttribute('map', 'filter', [
          new TerraformAttribute('string', 'name', 'tag:Component'),
          new TerraformAttribute('array', 'values', ['web']),
        ]),
        new TerraformAttribute('boolean', 'most_recent', true),
      ])])).toEqual(terraformFile);
    });

    it('With moduleExample.tf', () => {
      const terraformFile = TerraformParser.parse(fs.readFileSync('tests/tf/moduleExample.tf', 'utf8'));
      expect(new TerraformFile(null, null, [
        new TerraformModule('server', [
          new TerraformAttribute('string', 'source', '../modules/server'),
        ]),
        new TerraformModule('variables', [
          new TerraformAttribute('string', 'source', '../modules/variables'),
          new TerraformAttribute('string', 'base_cidr_block', '10.0.0.0/8'),
        ]),
      ])).toEqual(terraformFile);
    });

    it('With providerExample.tf', () => {
      const terraformFile = TerraformParser.parse(fs.readFileSync('tests/tf/providerExample.tf', 'utf8'));
      expect(new TerraformFile(null, null, [
        new TerraformProvider('aws', [
          new TerraformAttribute('string', 'access_key', 'ABCD1234J54PXLDF4IC4WMVA'),
          new TerraformAttribute('string', 'secret_key', '28prpojfngldfgPcgiv79Q/J+8o7ksdfsTjmmE2QQBRa'),
          new TerraformAttribute('string', 'region', 'eu-west-3'),
        ]),
      ])).toEqual(terraformFile);
    });

    it('With resourceDataExample.tf', () => {
      const terraformFile = TerraformParser.parse(fs.readFileSync('tests/tf/resourceDataExample.tf', 'utf8'));
      expect(terraformFile).toEqual(new TerraformFile(null, null, [new TerraformResource('aws_instance', 'web', [
        new TerraformAttribute('string', 'ami', 'data.aws_ami.web.id'),
        new TerraformAttribute('string', 'instance_type', 't1.micro'),
      ])]));
    });
  });
});
