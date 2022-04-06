import { TerraformNode } from './terraform_node.js';

export class TerraformDirective extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input 
    }

    toString() {     
        let str = ""

        str += `  {\n${(this.value.cloud) ? "      " + this.value.cloud.value + "\n" : ""}`
        str += `${(this.value.version) ? "      " + this.value.version.value + "\n" : "" } `
        str += `${(this.value.providers) ? "     " + this.value.providers.value + "\n" : "" } `
        str += `${(this.value.backend) ? "     " + this.value.backend.value + "\n" : "" }  }`
   
        return str
    }

    static isValid(input, source) {
        if (typeof(input) != 'object' || input == "") {
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