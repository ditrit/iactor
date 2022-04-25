import { TerraformNode } from './terraform_node.js';

export class ProviderDirective extends TerraformNode {
    constructor(input, source) { 
        super(source)
        this.fileName = ""
        this.name = input.name
        this.objects = input.objects
    }

    toString() {     
        return `  ${this.name}  {\n${this.objects}\n  }`
    }

    static isValid(input, source) {
        if (typeof(input.objects) != 'object' || typeof(input.name) != 'string' ||input == "") {
            source.errors.push('Incorrect input for provider')
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