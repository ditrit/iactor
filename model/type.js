import { TerraformNode } from "./terraform_node.js"

export class TerraformType extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    toString() {
        return `${this.value}`
    }

    static isValid(input, source) {
        if (input != 'string' || input != 'number' || input != 'bool' 
        || input != '"string"' || input != '"number"' || input != '"bool"'
        || input != 'any' || input == "") {
            source.ctx.grammarError('Incorrect input for type')
            return false
        }
        return true
    }
}

export function newTerraformType(input, source) {
    let res
    if (TerraformType.isValid(input, source)) {
        res = new TerraformType(input, source)
    } else {
        res = {}
    }
    return res
}