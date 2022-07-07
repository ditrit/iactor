import TerraformBlock from './TerraformBlock';

/**
 * Class that represent a provider block in Terraform.
 * @see https://www.terraform.io/language/provider
 */
class TerraformProvider extends TerraformBlock {
  /**
   * Default constructor.
   * @param {String} name Local name of the provider.
   * @param {TerraformAttribute[]} attributes List of all attributes in the provider.
   */
  constructor(name = null, attributes = []) {
    super('provider', name, attributes);
  }
}

export default TerraformProvider;
