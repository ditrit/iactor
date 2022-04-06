import { TerraformNode } from './terraform_node.js';

export class VariableDirective extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.name = input.name
        this.value = input.value
    }

    toString() {
        let str = ""

        str += `  ${(this.name)} {\n${(this.value.description) ? "     " + this.value.description.value + "\n" : ""}`
        str += `${(this.value.type) ? "     " + this.value.type.value + "\n" : "" } `
        str += `${(this.value.default) ? "     " + this.value.default.value + "\n" : "" }  }`
   
        return str
    }

    static isValid(input, source) {
        if (typeof(input.value) != 'object' || typeof(input.name) != 'string' ||input == "") {
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