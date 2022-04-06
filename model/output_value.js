import { TerraformNode } from './terraform_node.js';

export class OutputValue extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.errors.push('Incorrect input for output value')
            return false
        } 
        return true
    }
}

export function newOutputValue(input, source) {
    let res
    if (OutputValue.isValid(input, source)) {
        res = new OutputValue(input, source)
    } else {
        res = {}
    }
    return res
}