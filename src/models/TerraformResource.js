import TerraformBlock from './TerraformBlock';
/**
 * Class that represent a resource block in Terraform.
 * @see https://www.terraform.io/language/resources
 */
class TerraformResource extends TerraformBlock {
  /**
   * Default constructor.
   * @param {String} type Type of the resource.
   * @param {String} name Local name of the resource.
   * @param {TerraformAttribute[]} attributes List of all attributes in the resource.
   */
  constructor(type = null, name = null, attributes = []) {
    super('resource', name, attributes);
    this.type = type;
  }
}

export default TerraformResource;
