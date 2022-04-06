import { TerraformNode } from './terraform_node.js';

export class TerraformBlock extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    static isValid(input, source) {
        // console.log(input)
        // if (typeof(input.cloud) != 'string' || typeof(input.backend) != 'string' || typeof(input.version) != 'string' || typeof(input.providers) != 'string' || input == {}) {
        //     source.errors.push('Incorrect input for terraform block')
        //     return false
        // } 
        return true
    }
}

export function newTerraformBlock(input, source) {
    let res
    if (TerraformBlock.isValid(input, source)) {
        res = new TerraformBlock(input, source)
    } else {
        res = {}
    }
    return res
}