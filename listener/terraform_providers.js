import { newTerraformProviders } from "../model/terraform_providers.js";

export default {
    exit_terraform_providers(parsed_rule) {
        let terraform_providers = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
        parsed_rule.prog.current_file.terraform_providers = newTerraformProviders(terraform_providers, parsed_rule.ctx)
    }
}
