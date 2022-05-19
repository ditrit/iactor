export class TerraformFile {
  constructor() {
    this.terraform_directive = [];

    this.variable_directive = [];

    this.output_directive = [];

    this.resource_directive = [];

    this.data_directive = [];

    this.provider_directive = [];

    this.module_directive = [];
    this.modules_source = [];

    this.field = [];
    this.complex_field = [];
    this.complex_field_object = [];
    this.is_complex_field = false;
    this.name = {};
    this.type = {};
    this.object = {};

    this.errors = [];
    this.warnings = [];
  }
}

export function newTerraformFile(input, source) {

}
