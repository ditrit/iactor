import { TerraformNode } from './terraform_node.js';

export class VariableDirective extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.name = input.name
        this.objects = input.objects
    }

    toString() {
        return `  ${this.name}  {\n${this.objects}\n  }`
    }

    static isValid(input, source) {
        if (typeof(input.objects) != 'object' || typeof(input.name) != 'string' ||input == "") {
            source.errors.push('Incorrect input for Variable')
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