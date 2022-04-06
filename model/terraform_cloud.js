import { TerraformNode } from './terraform_node.js';

export class TerraformCloud extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.errors.push('Incorrect input for terraform cloud')
            return false
        } 
        return true
    }
}

export function newTerraformCloud(input, source) {
    let res
    if (TerraformCloud.isValid(input, source)) {
        res = new TerraformCloud(input, source)
    } else {
        res = {}
    }
    return res
}