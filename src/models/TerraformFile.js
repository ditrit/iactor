/**
 * Class that represents a Terraform file.
 */
class TerraformFile {
  /**
   * Default constructor.
   * @param {String} fileName File name.
   * @param {String} parent Path of the parent.
   * @param {TerraformBlock[]} blocks List of all blocks presents in the file.
   */
  constructor(fileName = null, parent = null, blocks = []) {
    this.parent = parent;
    this.fileName = fileName;
    this.blocks = blocks;
  }

  validate(metadata) {
    const provider = metadata.getProvider();
    // Check that we have only one provider
    if (provider.required && this.blocks.filter((block) => block.blockType === 'provider').length !== 1) {
      return false;
    }
    const errors = [];
    return this.blocks.every((block) => block.validate(metadata, errors));
  }
}

export default TerraformFile;
