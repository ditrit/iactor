export class TerraformFile {
    constructor() {
        this.terraform_directive = []
        this.terraform_block = {}
        this.terraform_cloud = {}
        this.terraform_backend = {}
        this.terraform_providers = {}
        this.terraform_version = {}

        this.variable_directive = []
        this.variable_block = {}
        this.variable_default = {value:""}
        this.variable_type = {value:""}
        this.variable_description = {value:""}

        this.output_directive = []
        this.output_block = {}
        this.output_description = {value:""}
        this.output_sensitive = {value:""}
        this.output_value = {value:""}

        this.resource_directive = []

        this.provider_directive = []

        this.module_directive = []

        this.field = []
        this.complex_field = false
        this.name = {}
        this.type = {}
        this.object = {}

        this.errors = []
        this.warnings = []
    }
}

export function newTerraformFile(input, source) {

}