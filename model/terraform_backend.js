import { TerraformNode } from './terraform_node.js';

export class TerraformBackEnd extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.errors.push('Incorrect input for terraform backend')
            return false
        } 
        return true
    }
}

export function newTerraformBackEnd(input, source) {
    let res
    if (TerraformBackEnd.isValid(input, source)) {
        res = new TerraformBackEnd(input, source)
    } else {
        res = {}
    }
    return res
}