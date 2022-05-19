import { TerraformNode } from './terraform_node.js';

export class TerraformField extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    toString() {
        return `${this.value}`
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.errors.push('Incorrect input for field')
            return false
        }
        return true
    }
}

export function newTerraformField(input, source) {
    let res
    if (TerraformField.isValid(input, source)) {
        res = new TerraformField(input, source)
    } else {
        res = {}
    }
    return res
}