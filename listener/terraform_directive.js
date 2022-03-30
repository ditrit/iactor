import { newTerraformDirective } from "../model/terraform_directive.js";

export default {
    exit_terraform_directive(parsed_rule) {
        console.log(parsed_rule.prog.current_file.object.value)
        let object = parsed_rule.prog.current_file.object.value
        let terraform_object = (object) ? object : ""
        parsed_rule.prog.current_file.terraform_directive = newTerraformDirective(terraform_object, parsed_rule.ctx)
    }
}