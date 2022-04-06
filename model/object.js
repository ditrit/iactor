import { TerraformNode } from "./terraform_node.js"

export class TerraformObject extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = []
        input.forEach(e => {
            this.value.push(e.value)
        })
    }

    toString() {
        let str = ""
        for(let i=0; i < this.value.length-1; i++ ) {
            str+= "     " + this.value[i] + ",\n"
        }
        str+= "     " + this.value[this.value.length-1]
        return str
    }

    static isValid(input, source) {
        if (!Array.isArray(input) || input == []) {
            source.errors.push('Incorrect input for object')
            return false
        }
        return true
    }
}

export function newTerraformObject(input, source) {
    let res
    if (TerraformObject.isValid(input, source)) {
        res = new TerraformObject(input, source)
    } else {
        res = {}
    }
    return res
}