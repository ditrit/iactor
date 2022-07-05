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
}

export default TerraformFile;
