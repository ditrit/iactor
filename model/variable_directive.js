import { TerraformNode } from './terraform_node.js';

export class VariableDirective extends TerraformNode {
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

export function newVariableDirective(input, source) {
    let res
    if (VariableDirective.isValid(input, source)) {
        res = new VariableDirective(input, source)
    } else {
        res = {}
    }
    return res
}