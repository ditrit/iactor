import { TerraformNode } from './terraform_node.js';

export class ProviderDirective extends TerraformNode {
    constructor(input, source) { 
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.ctx.grammarError('Provider input is not a string')
            return false
        } 
        return true
    }
}

export function newProviderDirective(input, source) {
    let res
    if (ProviderDirective.isValid(input, source)) {
        res = new ProviderDirective(input, source)
    } else {
        res = {}
    }
    return res
}