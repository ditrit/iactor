import { TerraformNode } from './terraform_node.js';

export class OutputSensitive extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.errors.push('Incorrect input for output sensitive')
            return false
        } 
        return true
    }
}

export function newOutputSensitive(input, source) {
    let res
    if (OutputSensitive.isValid(input, source)) {
        res = new OutputSensitive(input, source)
    } else {
        res = {}
    }
    return res
}