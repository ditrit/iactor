import { TerraformNode } from './terraform_node.js';

export class OutputDirective extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.name = input.name
        this.value = input.value
    }

    toString() {
        let str = ""

        str += `  ${(this.name)} {\n${(this.value.description) ? "     " + this.value.description.value + "\n" : ""} `
        str += `${(this.value.sensitive) ? "     " + this.value.sensitive.value + "\n" : "" } `
        str += `${(this.value.value) ? "     " + this.value.value.value + "\n" : "" }  }`
   
        return str
    }

    static isValid(input, source) {        
        // if (typeof(input.value) != 'object' || typeof(input.name) != 'string' ||input == "") {
        //     source.errors.push('Incorrect input for Output')
        //     return false
        // } 
        return true
    }
}

export function newOutputDirective(input, source) {
    let res
    if (OutputDirective.isValid(input, source)) {
        res = new OutputDirective(input, source)
    } else {
        res = {}
    }
    return res
}