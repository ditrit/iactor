/**
 * Class that represent an attribute in a Terraform block.
 * @see https://www.terraform.io/language/expressions
 */
class TerraformAttribute {
  /**
   * Default constructor.
   * @param {String} type Type of the attribute, can be: 'string', 'number', 'boolean', 'array'
   * or 'map'.
   * @param {String} name Name of the attribute.
   * @param {String|Boolean|Number|Array|TerraformAttribute[]} value Value of the attribute.
   */
  constructor(type = null, name = null, value = null) {
    this.type = type;
    this.name = name;
    this.value = value;
  }
}

export default TerraformAttribute;
