import { TerraformNode } from './terraform_node.js';

export class TerraformObject extends TerraformNode {
  constructor(input, source) {
    super(source);
    this.value = [];
    input.field.forEach((e) => {
      this.value.push(e.value);
    });
    input.complex_field.forEach((e) => {
      this.value.push(e);
    });
  }

  toString() {
    let str = '';
    if (this.value.length > 0) {
      for (let i = 0; i < this.value.length - 1; i++) {
        str += `  ${this.value[i]}\n`;
      }
      str += `  ${this.value[this.value.length - 1]}`;
    }
    return str;
  }

  static isValid(input, source) {
    if (!Array.isArray(input.field) || !Array.isArray(input.complex_field) || input == []) {
      source.errors.push('Incorrect input for object');
      return false;
    }
    return true;
  }
}

export function newTerraformObject(input, source) {
  let res;
  if (TerraformObject.isValid(input, source)) {
    res = new TerraformObject(input, source);
  } else {
    res = {};
  }
  return res;
}
