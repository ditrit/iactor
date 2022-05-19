import { TerraformNode } from './terraform_node.js';

export class TerraformType extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    toString() {
        return `${this.value}`
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.errors.push('Incorrect input for Type')
            return false
        }
        return true
    }
}

export function newTerraformType(input, source) {
    let res
    if (TerraformType.isValid(input, source)) {
        res = new TerraformType(input, source)
    } else {
        res = {}
    }
    return res
}