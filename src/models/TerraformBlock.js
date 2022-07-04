/**
 * Class that represent a Terraform block.
 */
class TerraformBlock {
  /**
   * Default constructor.
   * @param {String} blockType Type of block, can be: 'data', 'module', 'provider or 'resource'.
   * @param {String} name Local name of the block.
   * @param {TerraformVariable[]} variables List of all variables in the block.
   */
  constructor(blockType = null, name = null, variables = []) {
    this.blockType = blockType;
    this.name = name;
    this.variables = variables;
  }
}

export default TerraformBlock;
