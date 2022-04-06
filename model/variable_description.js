import { TerraformNode } from './terraform_node.js';

export class VariableDescription extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.errors.push('Incorrect input for variable description')
            return false
        } 
        return true
    }
}

export function newVariableDescription(input, source) {
    let res
    if (VariableDescription.isValid(input, source)) {
        res = new VariableDescription(input, source)
    } else {
        res = {}
    }
    return res
}