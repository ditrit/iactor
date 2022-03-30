import { TerraformNode } from './terraform_node.js';

export class VariableType extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.ctx.grammarError('Variable input is not a string')
            return false
        } 
        return true
    }
}

export function newVariableType(input, source) {
    let res
    if (VariableType.isValid(input, source)) {
        res = new VariableType(input, source)
    } else {
        res = {}
    }
    return res
}