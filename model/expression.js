import { TerraformNode } from "./terraform_node.js"

export class TerraformExpression extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.value = input
    }

    toString() {
        return `${this.value}`
    }

    static isValid(input, source) {
        if (typeof(input) != 'string' || input == "") {
            source.errors.push('Incorrect input for expression')
            return false
        }
        return true
    }
}

export function newTerraformExpression(input, source) {
    let res
    if (TerraformExpression.isValid(input, source)) {
        res = new TerraformExpression(input, source)
    } else {
        res = {}
    }
    return res
}