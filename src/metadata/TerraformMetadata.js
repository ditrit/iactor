import Ajv from 'ajv';
import Schema from './ValidationSchema';

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
}

export default TerraformMetadata;
