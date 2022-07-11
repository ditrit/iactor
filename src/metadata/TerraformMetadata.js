import Ajv from 'ajv';
import Schema from './ValidationSchema';
import { LetoAttribute, LetoTypeNode } from 'leto-module-client';

/**
 * Class that represent the metadata of a specific terraform implementation.
 */
class TerraformMetadata {
  /**
   * Default constructor.
   * @param {String} metadata Specific metadata definition.
   */
  constructor(metadata = null) {
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

  generate() {
    return this.metadata.provider.resources.map((resource) => {
      const letoType = new LetoTypeNode();

      letoType.logoPath = resource.icon;
      letoType.type = resource.resourceType;
      letoType.representation = resource.representation;

      if (resource.attributes) {
        letoType.attributes = resource.attributes.map((attribute) => {
          const letoAttribute = new LetoAttribute(
            attribute.variableName,
            null,
            attribute.resourceType,
            attribute.representation,
            attribute.required || false,
            attribute.array || false,
          );
          letoAttribute.widget = attribute.widget;
          letoAttribute.min = attribute.min;
          letoAttribute.max = attribute.max;
          letoAttribute.options = attribute.options;
          letoAttribute.attributes = attribute.attributes;
          return letoAttribute;
        });
      }

      return letoType;
    });
  }
}

export default TerraformMetadata;
