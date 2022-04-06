import { TerraformNode } from './terraform_node.js';

export class TerraformVersion extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.errors.push('Incorrect input for terraform version')
            return false
        } 
        return true
    }
}

export function newTerraformVersion(input, source) {
    let res
    if (TerraformVersion.isValid(input, source)) {
        res = new TerraformVersion(input, source)
    } else {
        res = {}
    }
    return res
}