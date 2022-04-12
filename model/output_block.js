import { TerraformNode } from './terraform_node.js';

export class OutputBlock extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        // if (typeof(input.description) != 'string' || typeof(input.value) != 'string' || typeof(input.sensitive) != 'string' || input == "") {
        //     source.errors.push('Incorrect input for output block')
        //     return false
        // } 
        return true
    }
}

export function newOutputBlock(input, source) {
    let res
    if (OutputBlock.isValid(input, source)) {
        res = new OutputBlock(input, source)
    } else {
        res = {}
    }
    return res
}