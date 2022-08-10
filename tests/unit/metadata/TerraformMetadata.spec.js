import TerraformMetadata from 'src/metadata/TerraformMetadata';
import fs from 'fs';
import TerraformComponentDefinition from 'src/models/TerraformComponentDefinition';
import {ComponentAttributeDefinition} from 'leto-modelizer-plugin-core';

describe('Test TerraformMetadata', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const validator = new TerraformMetadata();
      expect(validator.metadata).toBeNull();
    });

    it('Test constructor with parameters', () => {
      const validator = new TerraformMetadata({});
      expect(validator.metadata).toEqual({});
    });
  });

  describe('Test method: validate', () => {
    it('Should return true on valid metadata', () => {
      const metadata = JSON.parse(fs.readFileSync('tests/metadata/aws.json', 'utf8'));

      const validator = new TerraformMetadata(metadata);
      expect(validator.validate()).toBeTruthy();
    });

    it('Should throw an error on invalid metadata', () => {
      const metadata = JSON.parse(fs.readFileSync('tests/metadata/aws_invalid.json', 'utf8'));

      const validator = new TerraformMetadata(metadata);
      let error = null;
      try {
        validator.validate()
      } catch (e) {
        error = e
      }
      expect(error).not.toBeNull();
      expect(error.cause).toEqual([{
        instancePath: '/provider',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'name' },
        message: "must have required property 'name'",
      }]);
    });
  });
  describe('Test method: getComponentDefinitions', () => {
    const metadata = JSON.parse(fs.readFileSync('tests/metadata/aws_short.json', 'utf8'));

    it('Should return good definitions', () => {
      const validator = new TerraformMetadata(metadata);

      const providerDefinition = new TerraformComponentDefinition();
      providerDefinition.blockType = 'provider';
      providerDefinition.type = 'aws';
      providerDefinition.required = true;
      providerDefinition.displayable = false;

      const moduleDefinition = new TerraformComponentDefinition();
      moduleDefinition.blockType = 'module';
      moduleDefinition.type = 'module';
      moduleDefinition.displayable = false;
      moduleDefinition.definedAttributes.push(new ComponentAttributeDefinition(
        'source',
        'String',
        [],
        true,
      ));

      const dataDefinition = new TerraformComponentDefinition();
      dataDefinition.blockType = 'data';
      dataDefinition.type = 'data';
      dataDefinition.displayable = false;

      const variableDefinition = new TerraformComponentDefinition();
      variableDefinition.blockType = 'variable';
      variableDefinition.type = 'variable';
      variableDefinition.displayable = false;

      const resource1Definition = new TerraformComponentDefinition();
      resource1Definition.blockType = 'resource';
      resource1Definition.type = 'aws_instance';
      resource1Definition.icon = 'aws_instance';
      resource1Definition.svgTemplate = 'DefaultModel';
      resource1Definition.required = false;
      resource1Definition.displayable = true;
      resource1Definition.definedAttributes = [
        new ComponentAttributeDefinition('short_name', 'String', [], true),
        new ComponentAttributeDefinition('security_groups', 'Link', ['aws_security_group']),
        new ComponentAttributeDefinition('subnet_id', 'Link', ['aws_subnet']),
      ];

      const resource2Definition = new TerraformComponentDefinition();
      resource2Definition.blockType = 'resource';
      resource2Definition.type = 'aws_key_pair';
      resource2Definition.icon = 'aws_key_pair';
      resource2Definition.svgTemplate = 'DefaultModel';
      resource2Definition.required = false;
      resource2Definition.displayable = true;

      const expectedDefinitions = [
        providerDefinition,
        moduleDefinition,
        dataDefinition,
        variableDefinition,
        resource1Definition,
        resource2Definition,
      ];

      expect(expectedDefinitions).toEqual(validator.getComponentDefinitions());
    });
  });
});
