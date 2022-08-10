import nunjucks from 'nunjucks';
import template from './templates/TerraformTemplate';
import {DefaultRender} from 'leto-modelizer-plugin-core';

/**
 * Class that compile Terraform File objects to terraform data.
 */
class TerraformRender extends DefaultRender {
  /**
     * Default constructor
     * @param {String} template url of template file
     * @param {TerraformFile} terraformFile The TerraformFile's instance to compile
     */
  constructor() {
    super();
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
  render(components, links) {
    return nunjucks.renderString(this.template, { components });
  }
}

export default TerraformRender;
