import TerraformBlock from './TerraformBlock';

/**
 * Class that represent a module block in Terraform.
 * @see https://www.terraform.io/language/modules
 */
class TerraformModule extends TerraformBlock {
  /**
   * Default constructor.
   * @param {String} name Local name of the module.
   * @param {TerraformVariable[]} variables List of all variables in the module.
   */
  constructor(name = null, variables = []) {
    super('module', name, variables);
  }
}

export default TerraformModule;
