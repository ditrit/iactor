import { TerraformNode } from './terraform_node.js';

export class ResourceDirective extends TerraformNode {
  constructor(input, source) {
    super(source);
    this.fileName = '';
    this.type = input.type;
    this.name = input.name;
    this.variablesName = input.names.variables;
    this.variablesObject = [];
    this.resourcesName = input.names.resources;
    this.resourcesObject = [];
    this.datasName = input.names.datas;
    this.datasObject = [];
    this.objects = input.objects;
    this.representation = '';
  }

  toString() {
    return `resource "${this.type}" "${this.name}" {\n${this.objects}\n}`;
  }

  static isValid(input, source) {
    if (typeof (input.objects) !== 'object' || typeof (input.name) !== 'string' || typeof (input.type) !== 'string' || input == '') {
      source.errors.push('Incorrect input for ressource');
      return false;
    }
    return true;
  }
}

export function newResourceDirective(input, source) {
  let res;
  if (ResourceDirective.isValid(input, source)) {
    res = new ResourceDirective(input, source);
  } else {
    res = {};
  }
  return res;
}
