import { TerraformNode } from './terraform_node.js';

export class Directive extends TerraformNode {
    constructor(input, source) { 
        super(source)
        this.directive = new Map()
    }

    static isValid(input, source) {
        /*if (typeof(input) != 'string' || input == "") {
            source.errors.push('Terraform input is not a string')
            return false
        } */
        return true
    }
}

export function newDirective(input, source) {
    let res
    if (Directive.isValid(input, source)) {
        res = new Directive(input, source)
    } else {
        res = {}
    }
    return res
}