import TerraformBlock from './TerraformBlock';

/**
 * Class that represent a variable block in Terraform.
 * @see https://www.terraform.io/language/values/variables
 */
class TerraformVariable extends TerraformBlock {
  /**
   * Default constructor.
   * @param {String} name Local name of the variable.
   * @param {TerraformAttribute[]} attributes List of all attributes in the variable.
   */
  constructor(name = null, attributes = []) {
    super('variable', name, attributes);
  }
}

export default TerraformVariable;
