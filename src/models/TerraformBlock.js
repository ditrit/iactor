import { LetoObjectNode } from 'leto-module-client';
/**
 * Class that represent a Terraform block.
 */
class TerraformBlock extends LetoObjectNode {
  /**
   * Default constructor.
   * @param {String} blockType Type of block, can be: 'data', 'module', 'provider or 'resource'.
   * @param {String} name Local name of the block.
   * @param {TerraformAttribute[]} attributes List of all attributes in the block.
   */
  constructor(blockType = null, name = null, attributes = []) {
    super();
    this.blockType = blockType; // PAS STOCKÉ
    this.name = name; // LetoObjectNode.name
    this.attributes = attributes; //LetoAttribute: LetoObjectNode.contains || LetoObjectNode.attributesOutputLinks
  }
}

export default TerraformBlock;
