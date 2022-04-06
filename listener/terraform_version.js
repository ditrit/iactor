import { newTerraformVersion } from "../model/terraform_version.js";

export default {
    exit_terraform_version(parsed_rule) {
        let terraform_version = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
        parsed_rule.prog.current_file.terraform_version = newTerraformVersion(terraform_version, parsed_rule.ctx)
    }
}
