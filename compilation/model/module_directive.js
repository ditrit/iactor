import { TerraformNode } from './terraform_node.js';

export class ModuleDirective extends TerraformNode {
    constructor(input, source) { 
        super(source)
        this.fileName = ""
        this.type = '"module"'
        this.moduleSource = input.source
        this.name = input.name
        this.objects = input.objects
        this.variablesName = (input.names.variables) ? input.names.variables : []
        this.variablesObject = []
        this.datasName = (input.names.datas) ? input.names.datas : []
        this.datasObject = []
        this.resourcesName = (input.names.resources) ? input.names.resources : []
        this.resourcesObject = []
        this.modulesName = (input.names.modules) ? input.names.modules : []
        this.modulesObject = []
        this.attributes = []
    }

    toString() {     
        return `  ${this.name}  {\n${this.objects}\n  }`
    }

    static isValid(input, source) {
        if (typeof(input.objects) != 'object' || typeof(input.name) != 'string' || typeof(input.names) != 'object' ||input == "") {
            source.errors.push('Incorrect input for module')
            return false
        } 
        return true
    }
}

export function newModuleDirective(input, source) {
    let res
    if (ModuleDirective.isValid(input, source)) {
        res = new ModuleDirective(input, source)
    } else {
        res = {}
    }
    return res
}