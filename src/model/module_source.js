import { TerraformNode } from './terraform_node.js';

export class ModuleSource extends TerraformNode {
  constructor(input, source) {
    super(source);
    this.value = input;
  }

  toString() {
    return `${this.value}`;
  }

  static isValid(input, source) {
    if (typeof (input) !== 'string' || input == '') {
      source.errors.push('Incorrect input for source');
      return false;
    }
    return true;
  }
}

export function newModuleSource(input, source) {
  let res;
  if (ModuleSource.isValid(input, source)) {
    res = new ModuleSource(input, source);
  } else {
    res = {};
  }
  return res;
}
