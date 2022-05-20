import { isArray } from "mathjs"
import { TerraformNode } from "./terraform_node.js"

export class TerraformComplexField extends TerraformNode {
	constructor(input, source) {
		super(source)
		this.name = input.name
		this.objects = input.objects
	}

	toString() {
		let str = `${this.name} {\n`
		this.objects.forEach(object => {
			str += '    ' + object + '\n'
		})
		str += '  }'
		return str
	}

	static isValid(input, source) {
		if (typeof(input.name) != 'string' || !isArray(input.objects) || input == "") {
			source.errors.push('Incorrect input for field')
			return false
		}
		return true
	}
}

export function newTerraformComplexField(input, source) {
	let res
	if (TerraformComplexField.isValid(input, source)) {
		res = new TerraformComplexField(input, source)
	} else {
		res = {}
	}
	return res
}