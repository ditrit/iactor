import TerraformBlock from './TerraformBlock';

/**
 * Class that represent a data source block in Terraform.
 * @see https://www.terraform.io/language/data-sources
 */
class TerraformData extends TerraformBlock {
  /**
   * Default constructor.
   * @param {String} type Type of the data source.
   * @param {String} name Local name of the data source.
   * @param {TerraformAttribute[]} attributes List of all attributes in the data source.
   */
  constructor(type = null, name = null, attributes = []) {
    super('data', name, attributes);
    this.type = type;
  }
}

export default TerraformData;
