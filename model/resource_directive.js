import { TerraformNode } from './terraform_node.js';

export class ResourceDirective extends TerraformNode {
    constructor(input, source) {
        super(source)
        this.type = input.type
        this.name = input.name
        this.variablesName = input.variables
        this.variablesObject = []
        this.resourcesName = input.resources
        this.resourcesObject = []
        this.object = input.object
    }

    toString() {     
        let variables = '['
        for(let i=0; i< this.variablesObject.length - 1; i++) {
            variables += this.variablesObject[i].name + ', '
        };
        if(this.variablesObject.length > 0) variables += this.variablesObject[this.variablesObject.length - 1].name
        variables += ']'
        
        let resources = '['
        for(let i=0; i< this.resourcesObject.length - 1; i++) {
            resources += '\n         type : ' + this.resourcesObject[i].type + ', name : ' + this.resourcesObject[i].name + ','
        };
        if(this.resourcesObject.length > 0) resources += '\n         type : ' + this.resourcesObject[this.resourcesObject.length - 1].type + ', name : ' + this.resourcesObject[this.resourcesObject.length - 1].name
        resources += '\n     ]'
        return `  ${this.type} ${this.name}{\n${"     variable(s) : " + variables + "\n     resource(s) : " + resources + "\n"}${this.object}\n  }`
    }

    static isValid(input, source) {
        if (typeof(input.object) != 'object' || typeof(input.name) != 'string' || typeof(input.type) != 'string' ||input == "") {
            source.errors.push('Incorrect input for ressource')
            return false
        } 
        return true
    }
}

export function newResourceDirective(input, source) {
    let res
    if (ResourceDirective.isValid(input, source)) {
        res = new ResourceDirective(input, source)
    } else {
        res = {}
    }
    return res
}