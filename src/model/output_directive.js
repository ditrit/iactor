import { TerraformNode } from './terraform_node.js';

export class OutputDirective extends TerraformNode {
  constructor(input, source) {
    super(source);
    this.fileName = '';
    this.name = input.name;
    this.objects = input.objects;
    this.variablesName = input.names.variables;
    this.variablesObject = [];
    this.resourcesName = input.names.resources;
    this.resourcesObject = [];
    this.datasName = input.names.datas;
    this.datasObject = [];
  }

  toString() {
    return `output "${this.name}" {\n${this.objects}\n}`;
  }

  static isValid(input, source) {
    if (typeof (input.objects) !== 'object' || typeof (input.name) !== 'string' || input == '') {
      source.errors.push('Incorrect input for Output');
      return false;
    }
    return true;
  }
}

export function newOutputDirective(input, source) {
  let res;
  if (OutputDirective.isValid(input, source)) {
    res = new OutputDirective(input, source);
  } else {
    res = {};
  }
  return res;
}
