import { newTerraformType } from "../model/provider_type.js"

export default {
    exit_provider_type(parsed_rule) {
        let type = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText().replaceAll('"', '') : ""
        parsed_rule.prog.current_file.type = newTerraformType(type, parsed_rule.ctx)
    }
}