import TerraformRender from 'src/render/TerraformRender';
import fs from 'fs';
import TerraformMetadata from 'src/metadata/TerraformMetadata';
import TerraformParser from 'src/parser/TerraformParser';

describe('Test TerraformRender', () => {
  const definitions = new TerraformMetadata(JSON.parse(fs.readFileSync('tests/tf/metadata.json', 'utf8')))
    .getComponentDefinitions();
  const render = new TerraformRender();
  it('Test constructor', () => {
    expect(render.template).not.toBeNull();
  });

  describe('Test method: render', () => {
    it('With databaseExample.tf', () => {
      const expected = fs.readFileSync('tests/tf/databaseExample.tf', 'utf8');
      const parser = new TerraformParser();
      const data = parser.parse(definitions, [expected]);
      console.log(data.components[0].definition);

      expect(render.render(data.components, data.links)).toEqual(expected);
    });

    // it('With dataExample.tf', () => {
    //   const expected = fs.readFileSync('tests/tf/dataExample.tf', 'utf8');
    //   const terraformFile = new TerraformFile(null, null, [new TerraformData('aws_ami', 'web', [
    //     new TerraformAttribute('map', 'filter', [
    //       new TerraformAttribute('string', 'name', 'state'),
    //       new TerraformAttribute('array', 'values', ['available']),
    //     ]),
    //     new TerraformAttribute('map', 'filter', [
    //       new TerraformAttribute('string', 'name', 'tag:Component'),
    //       new TerraformAttribute('array', 'values', ['web']),
    //     ]),
    //     new TerraformAttribute('boolean', 'most_recent', true),
    //   ])]);
    //
    //   expect(render.render(terraformFile)).toEqual(expected);
    // });
    //
    // it('With moduleExample.tf', () => {
    //   const expected = fs.readFileSync('tests/tf/moduleExample.tf', 'utf8');
    //   const terraformFile = new TerraformFile(null, null, [
    //     new TerraformModule('server', [
    //       new TerraformAttribute('string', 'source', '../modules/server'),
    //     ]),
    //     new TerraformModule('variables', [
    //       new TerraformAttribute('string', 'source', '../modules/variables'),
    //       new TerraformAttribute('string', 'base_cidr_block', '10.0.0.0/8'),
    //     ]),
    //   ]);
    //
    //   expect(render.render(terraformFile)).toEqual(expected);
    // });
    //
    // it('With providerExample.tf', () => {
    //   const expected = fs.readFileSync('tests/tf/providerExample.tf', 'utf8');
    //   const terraformFile = new TerraformFile(null, null, [
    //     new TerraformProvider('aws', [
    //       new TerraformAttribute('string', 'access_key', 'ABCD1234J54PXLDF4IC4WMVA'),
    //       new TerraformAttribute('string', 'secret_key', '28prpojfngldfgPcgiv79Q/J+8o7ksdfsTjmmE2QQBRa'),
    //       new TerraformAttribute('string', 'region', 'eu-west-3'),
    //     ]),
    //   ]);
    //
    //   expect(render.render(terraformFile)).toEqual(expected);
    // });
    //
    // it('With resourceDataExample.tf', () => {
    //   const expected = fs.readFileSync('tests/tf/resourceDataExample.tf', 'utf8');
    //   const terraformFile = new TerraformFile(null, null, [new TerraformResource('aws_instance', 'web', [
    //     new TerraformAttribute('string', 'ami', 'data.aws_ami.web.id'),
    //     new TerraformAttribute('string', 'instance_type', 't1.micro'),
    //   ])]);
    //
    //   expect(render.render(terraformFile)).toEqual(expected);
    // });
    //
    // it('With variableExample.tf', () => {
    //   const expected = fs.readFileSync('tests/tf/variableExample.tf', 'utf8');
    //   const terraformFile = new TerraformFile(null, null, [new TerraformVariable('image_id', [
    //     new TerraformAttribute('string', 'type', 'string'),
    //   ])]);
    //
    //   expect(render.render(terraformFile)).toEqual(expected);
    // });
  });
});
