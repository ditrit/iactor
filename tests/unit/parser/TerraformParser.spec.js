import fs from "fs";
import TerraformParser from 'src/parser/TerraformParser';
import TerraformFile from 'src/models/TerraformFile';
import TerraformResource from 'src/models/TerraformResource';
import TerraformData from 'src/models/TerraformData';
import TerraformVariable from 'src/models/TerraformVariable';
import TerraformModule from 'src/models/TerraformModule';
import TerraformProvider from 'src/models/TerraformProvider';

describe('Test TerraformParser', () => {
  describe('Test method: parse', () => {
    it('With databaseExample.tf', () => {
      const terraformFile = TerraformParser.parse(fs.readFileSync('tests/tf/databaseExample.tf', 'utf8'));
      expect(new TerraformFile(null, null, [
        new TerraformResource('aws_db_subnet_group', 'rds_subnet', [
          new TerraformVariable('string', 'name', 'rds_subnet_grpp'),
          new TerraformVariable('array', 'subnet_ids', [
            '${aws_subnet.webservers-a.id}',
            '${aws_subnet.webservers-b.id}',
          ]),
        ]),
        new TerraformResource('aws_db_instance', 'myawsdb', [
          new TerraformVariable('number', 'allocated_storage', 20),
          new TerraformVariable('string', 'engine', 'mariadb'),
          new TerraformVariable('string', 'engine_version', '10.1.26'),
          new TerraformVariable('string', 'instance_class', 'db.t2.micro'),
          new TerraformVariable('string', 'name', 'myawsdb'),
          new TerraformVariable('string', 'username', 'user'),
          new TerraformVariable('string', 'password', 'password'),
          new TerraformVariable('string', 'db_subnet_group_name', '${aws_db_subnet_group.rds_subnet.id}'),
          new TerraformVariable('boolean', 'skip_final_snapshot', false),
          new TerraformVariable('boolean', 'multi_az', true),
          new TerraformVariable('string', 'final_snapshot_identifier', 'myawsdbfinalsnap'),
          new TerraformVariable('array', 'vpc_security_group_ids', ['${aws_security_group.sg_rds.id}']),
        ]),
        new TerraformResource('aws_security_group', 'sg_rds', [
          new TerraformVariable('string', 'name', 'sg_rds'),
          new TerraformVariable('string', 'vpc_id', '${aws_vpc.vpc_main.id}'),
          new TerraformVariable('map', 'ingress', [
            new TerraformVariable('string', 'from_port', '${var.mariadb_port}'),
            new TerraformVariable('string', 'to_port', '${var.mariadb_port}'),
            new TerraformVariable('string', 'protocol', 'tcp'),
            new TerraformVariable('array', 'cidr_blocks', ['172.16.0.0/16']),
          ]),
          new TerraformVariable('map', 'egress', [
            new TerraformVariable('number', 'from_port', 0),
            new TerraformVariable('number', 'to_port', 0),
            new TerraformVariable('string', 'protocol', '-1'),
            new TerraformVariable('array', 'cidr_blocks', ['0.0.0.0/0']),
          ]),
          new TerraformVariable('map', 'lifecycle', [
            new TerraformVariable('boolean', 'create_before_destroy', true),
          ]),
        ]),
      ])).toEqual(terraformFile);
    });

    it('With dataExample.tf', () => {
      const terraformFile = TerraformParser.parse(fs.readFileSync('tests/tf/dataExample.tf', 'utf8'));
      expect(new TerraformFile(null, null, [new TerraformData('aws_ami', 'web', [
        new TerraformVariable('map', 'filter', [
          new TerraformVariable('string', 'name', 'state'),
          new TerraformVariable('array', 'values', ['available']),
        ]),
        new TerraformVariable('map', 'filter', [
          new TerraformVariable('string', 'name', 'tag:Component'),
          new TerraformVariable('array', 'values', ['web']),
        ]),
        new TerraformVariable('boolean', 'most_recent', true),
      ])])).toEqual(terraformFile);
    });

    it('With moduleExample.tf', () => {
      const terraformFile = TerraformParser.parse(fs.readFileSync('tests/tf/moduleExample.tf', 'utf8'));
      expect(new TerraformFile(null, null, [
        new TerraformModule('server', [
          new TerraformVariable('string', 'source', '../modules/server'),
        ]),
        new TerraformModule('variables', [
          new TerraformVariable('string', 'source', '../modules/variables'),
          new TerraformVariable('string', 'base_cidr_block', '10.0.0.0/8'),
        ]),
      ])).toEqual(terraformFile);
    });

    it('With providerExample.tf', () => {
      const terraformFile = TerraformParser.parse(fs.readFileSync('tests/tf/providerExample.tf', 'utf8'));
      expect(new TerraformFile(null, null, [
        new TerraformProvider('aws', [
          new TerraformVariable('string', 'access_key', 'ABCD1234J54PXLDF4IC4WMVA'),
          new TerraformVariable('string', 'secret_key', '28prpojfngldfgPcgiv79Q/J+8o7ksdfsTjmmE2QQBRa'),
          new TerraformVariable('string', 'region', 'eu-west-3'),
        ]),
      ])).toEqual(terraformFile);
    });

    it('With resourceDataExample.tf', () => {
      const terraformFile = TerraformParser.parse(fs.readFileSync('tests/tf/resourceDataExample.tf', 'utf8'));
      expect(terraformFile).toEqual(new TerraformFile(null, null, [new TerraformResource('aws_instance', 'web', [
        new TerraformVariable('string', 'ami', 'data.aws_ami.web.id'),
        new TerraformVariable('string', 'instance_type', 't1.micro'),
      ])]));
    });
  });
});
