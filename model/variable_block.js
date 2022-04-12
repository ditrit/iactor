import { TerraformNode } from './terraform_node.js';

export class VariableBlock extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        /*if (typeof(input) != 'string' || input == "") {
            source.errors.push('Incorrect input for variable block')
            return false
        } */
        return true
    }
}

export function newVariableBlock(input, source) {
    let res
    if (VariableBlock.isValid(input, source)) {
        res = new VariableBlock(input, source)
    } else {
        res = {}
    }
    return res
}