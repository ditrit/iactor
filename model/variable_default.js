import { TerraformNode } from './terraform_node.js';

export class VariableDefault extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.errors.push('Incorrect input for variable default')
            return false
        } 
        return true
    }
}

export function newVariableDefault(input, source) {
    let res
    if (VariableDefault.isValid(input, source)) {
        res = new VariableDefault(input, source)
    } else {
        res = {}
    }
    return res
}