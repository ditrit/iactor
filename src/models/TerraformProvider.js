import TerraformBlock from './TerraformBlock';

/**
 * Class that represent a provider block in Terraform.
 * @see https://www.terraform.io/language/provider
 */
class TerraformProvider extends TerraformBlock {
  /**
   * Default constructor.
   * @param {String} name Local name of the provider.
   * @param {TerraformVariable[]} variables List of all variables in the provider.
   */
  constructor(name = null, variables = []) {
    super('provider', name, variables);
  }
}

export default TerraformProvider;
