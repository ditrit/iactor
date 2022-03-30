import { TerraformNode } from './terraform_node.js';

export class RessourceDirective extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.ctx.grammarError('Ressource input is not a string')
            return false
        } 
        return true
    }
}

export function newRessourceDirective(input, source) {
    let res
    if (RessourceDirective.isValid(input, source)) {
        res = new RessourceDirective(input, source)
    } else {
        res = {}
    }
    return res
}