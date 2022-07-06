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

  validate(metadata, errors = []) {
    if (metadata.provider?.modules[0].source.required
      && !this.variables.some((variable) => variable.name === 'source')) {
      errors.push(`Module "${this.name}" does not contain source attribute.`);
      return false;
    }
    return true;
  }
}

export default TerraformModule;
