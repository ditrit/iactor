/**
 * Class that represent a variable in a Terraform block.
 * @see https://www.terraform.io/language/expressions
 */
class TerraformVariable {
  /**
   * Default constructor.
   * @param {String} type Type of the variable, can be: 'string', 'number', 'boolean', 'array'
   * or 'map'.
   * @param {String} name Name of the variable.
   * @param {String|Boolean|Number|Array|TerraformVariable[]} value Value of the variable.
   */
  constructor(type = null, name = null, value = null) {
    this.type = type;
    this.name = name;
    this.value = value;
  }
}

export default TerraformVariable;
