import { newTerraformBackEnd } from "../model/terraform_backend.js";

export default {
    exit_terraform_backend(parsed_rule) {
        let terraform_backend = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
        parsed_rule.prog.current_file.terraform_backend = newTerraformBackEnd(terraform_backend, parsed_rule.ctx)
    }
}
