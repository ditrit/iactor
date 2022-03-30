import { TerraformNode } from './terraform_node.js';

export class OutputDirective extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.ctx.grammarError('Output input is not a string')
            return false
        } 
        return true
    }
}

export function newOutputDirective(input, source) {
    let res
    if (OutputDirective.isValid(input, source)) {
        res = new OutputDirective(input, source)
    } else {
        res = {}
    }
    return res
}