import { TerraformNode } from './terraform_node.js';

export class TerraformDirective extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.fileName = ""
        this.objects = input.objects 
    }

    toString() {     
        return `  ${this.name}  {\n${this.objects}\n  }`
    }

    static isValid(input, source) {
        if (typeof(input.objects) != 'object' || input == "") {
            source.errors.push('Incorrect input for Terraform')
            return false
        }
        return true
    }
}

export function newTerraformDirective(input, source) {
    let res
    if (TerraformDirective.isValid(input, source)) {
        res = new TerraformDirective(input, source)
    } else {
        res = {}
    }
    return res
}