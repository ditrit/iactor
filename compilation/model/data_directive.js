import { TerraformNode } from './terraform_node.js';

export class DataDirective extends TerraformNode {
	constructor(input, source) { 
		super(source)
		this.fileName = ""
		this.name = input.name
		this.type = input.type
		this.objects = input.objects
	}

	toString() {     
		return `data "${this.type}" "${this.name}" {\n${this.objects}\n}`
	}

	static isValid(input, source) {
		if (typeof(input.objects) != 'object' || typeof(input.name) != 'string' || typeof(input.name) != 'string' ||input == "") {
			source.errors.push('Incorrect input for data')
			return false
		} 
		return true
	}
}

export function newDataDirective(input, source) {
	let res
	if (DataDirective.isValid(input, source)) {
		res = new DataDirective(input, source)
	} else {
		res = {}
	}
	return res
}