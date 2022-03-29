import { TerraformNode } from "./terraform_node.js"

export class TerraformObject extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    toString() {
        return `${this.value}`
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.ctx.grammarError('Incorrect input for object')
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