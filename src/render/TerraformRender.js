import nunjucks from 'nunjucks';
import template from './templates/TerraformTemplate';

/**
 * Class that compile Terraform File objects to terraform data.
 */
class TerraformRender {
  /**
     * Default constructor
     * @param {String} template url of template file
     * @param {TerraformFile} terraformFile The TerraformFile's instance to compile
     */
  constructor() {
    this.template = template;
    nunjucks.configure({
      autoescape: false,
      trimBlocks: true,
      lstripBlocks: true,
    });
  }

  /**
   * Tranforms TerrafornFile into a terraform file content.
   * @param {TerraformFile} terraformFile Terraform file object.
   * @returns {String} Content of a terraform file.
   */
  render(terraformFile) {
    return nunjucks.renderString(this.template, { terraformFile });
  }
}

export default TerraformRender;
