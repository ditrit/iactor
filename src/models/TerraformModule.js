import TerraformBlock from './TerraformBlock';

/**
 * Class that represent a module block in Terraform.
 * @see https://www.terraform.io/language/modules
 */
class TerraformModule extends TerraformBlock {
  /**
   * Default constructor.
   * @param {String} name Local name of the module.
   * @param {TerraformAttribute[]} attributes List of all attributes in the module.
   */
  constructor(name = null, attributes = []) {
    super('module', name, attributes);
  }
}

export default TerraformModule;
