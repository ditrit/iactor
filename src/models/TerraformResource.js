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
   * @param {TerraformVariable[]} variables List of all variables in the resource.
   */
  constructor(type = null, name = null, variables = []) {
    super('resource', name, variables);
    this.type = type;
  }

  validate(metadata, errors = []) {
    const resource = metadata.provider.resources.find((r) => r.resourceType === this.type);

    if (!resource) {
      errors.push(`Resource type "${this.type}" for "${this.name}" is not defined in the metadata.`);
      return false;
    }

    let hasError = false;
    resource.attributes.forEach((attribute) => {
      if (attribute.required
        && !this.variables.some((variable) => variable.name === attribute.variableName)) {
        errors.push(`Resource "${this.name}" does not contain attribute "${attribute.name}".`);
        hasError = false;
        return;
      }
    });

    return hasError;
  }
}

export default TerraformResource;
