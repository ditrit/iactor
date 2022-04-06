import { TerraformNode } from './terraform_node.js';

export class TerraformProviders extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.errors.push('Incorrect input for terraform providers')
            return false
        } 
        return true
    }
}

export function newTerraformProviders(input, source) {
    let res
    if (TerraformProviders.isValid(input, source)) {
        res = new TerraformProviders(input, source)
    } else {
        res = {}
    }
    return res
}