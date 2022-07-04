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
   * @param {TerraformVariable[]} variables List of all variables in the data source.
   */
  constructor(type = null, name = null, variables = []) {
    super('data', name, variables);
    this.type = type;
  }
}

export default TerraformData;
