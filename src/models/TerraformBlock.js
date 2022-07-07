/**
 * Class that represent a Terraform block.
 */
class TerraformBlock {
  /**
   * Default constructor.
   * @param {String} blockType Type of block, can be: 'data', 'module', 'provider or 'resource'.
   * @param {String} name Local name of the block.
   * @param {TerraformAttribute[]} attributes List of all attributes in the block.
   */
  constructor(blockType = null, name = null, attributes = []) {
    this.blockType = blockType;
    this.name = name;
    this.attributes = attributes;
  }
}

export default TerraformBlock;
