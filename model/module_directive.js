import { TerraformNode } from './terraform_node.js';

export class ModuleDirective extends TerraformNode {
    constructor(input, source) { 
        super(source)
        this.name = input.name
        this.value = input.value
    }

    toString() {     
        return `  ${this.name} {\n${this.value}\n  }`
    }

    static isValid(input, source) {
        if (typeof(input.value) != 'object' || typeof(input.name) != 'string' ||input == "") {
            source.errors.push('Incorrect input for module')
            return false
        } 
        return true
    }
}

export function newModuleDirective(input, source) {
    let res
    if (ModuleDirective.isValid(input, source)) {
        res = new ModuleDirective(input, source)
    } else {
        res = {}
    }
    return res
}