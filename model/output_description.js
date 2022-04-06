import { TerraformNode } from './terraform_node.js';

export class OutputDescription extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.errors.push('Incorrect input for output description')
            return false
        } 
        return true
    }
}

export function newOutputDescription(input, source) {
    let res
    if (OutputDescription.isValid(input, source)) {
        res = new OutputDescription(input, source)
    } else {
        res = {}
    }
    return res
}