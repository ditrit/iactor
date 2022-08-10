import Ajv from 'ajv';
import Schema from './ValidationSchema';
import {
  DefaultMetadata,
  ComponentAttributeDefinition,
} from 'leto-modelizer-plugin-core';
import TerraformComponentDefinition from '../models/TerraformComponentDefinition';

/**
 * Class that represent the metadata of a specific terraform implementation.
 */
class TerraformMetadata extends DefaultMetadata {
  /**
   * Default constructor.
   * @param {String} metadata Specific metadata definition.
   */
  constructor(metadata = null) {
    super();
    this.metadata = metadata;
    this.ajv = new Ajv();
    this.schema = Schema;
  }

  /**
   * Validate the provided metadata with the schemas.
   * @returns {boolean} True if metadata is valid, otherwise throw an error.
   * @throws {Error} When metadata is not valid.
   */
  validate() {
    const validate = this.ajv.compile(this.schema);

    if (validate(this.metadata)) {
      return true;
    }

    throw new Error('Metadata is not valid', { cause: validate.errors });
  }

  getComponentDefinitions() {
    const components = [];

    const providerDefinition = new TerraformComponentDefinition();
    providerDefinition.blockType = 'provider';
    providerDefinition.type = this.metadata.provider.name;
    providerDefinition.required = this.metadata.provider.required;
    providerDefinition.displayable = false;
    components.push(providerDefinition);

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
    components.push(moduleDefinition);

    const dataDefinition = new TerraformComponentDefinition();
    dataDefinition.blockType = 'data';
    dataDefinition.type = 'data';
    dataDefinition.displayable = false;
    components.push(dataDefinition);

    const variableDefinition = new TerraformComponentDefinition();
    variableDefinition.blockType = 'variable';
    variableDefinition.type = 'variable';
    variableDefinition.displayable = false;
    components.push(variableDefinition);

    this.metadata.provider.resources
      .map((resource) => {
        const resourceDefinition = new TerraformComponentDefinition();
        resourceDefinition.blockType = 'resource';
        resourceDefinition.type = resource.resourceType;
        resourceDefinition.icon = resource.icon;
        resourceDefinition.svgTemplate = 'DefaultModel';
        resourceDefinition.required = resource.required;
        resourceDefinition.displayable = true;

        if (!resource.attributes) {
          resource.attributes = [];
        }
        resource.attributes
          .map((attribute) => {
            const attributeDefinition = new ComponentAttributeDefinition();
            attributeDefinition.name = attribute.variableName;
            if (attribute.representation === 'link' || attribute.representation === 'inverseLink') {
              attributeDefinition.type = 'Link';
              attributeDefinition.linkTypes = [attribute.resourceType];
            } else {
              attributeDefinition.type = 'String';
            }
            attributeDefinition.required = attribute.required;

            return attributeDefinition;
          })
          .forEach((attribute) => resourceDefinition.definedAttributes.push(attribute));

        return resourceDefinition;
      })
      .forEach((component) => components.push(component))

    return components;
  }
}

export default TerraformMetadata;
