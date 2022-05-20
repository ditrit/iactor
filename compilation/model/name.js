import { TerraformNode } from "./terraform_node.js"

export class TerraformName extends TerraformNode {
	constructor(input, source) {
		super(source)
		this.value = input
	}

	toString() {
		return `${this.value}`
	}

	static isValid(input, source) {
		if (typeof(input) != 'string' || input == "") {
			source.errors.push('Incorrect input for name')
			return false
		}
		return true
	}
}

export function newTerraformName(input, source) {
	let res
	if (TerraformName.isValid(input, source)) {
		res = new TerraformName(input, source)
	} else {
		res = {}
	}
	return res
}