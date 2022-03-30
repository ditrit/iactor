export class TerraformFile {
    constructor() {
        this.directive = []
        this.terraform_directive = {}
        this.variable_directive = {}
        this.variable_block = {}
        this.variable_default = {}
        this.variable_type = {}
        this.variable_description = {}
        this.output_directive = {}
        this.ressource_directive = {}
        this.provider_directive = {}
        this.expression = {value:""}
        this.field = {}
        this.object = {}

        this.errors = []
        this.warnings = []
    }

    toString() {
        let str = "prog: \n"     
        return str
    }
}

export function newTerraformFile(input, source) {

}