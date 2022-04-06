import { newTerraformType } from "../model/resource_type.js"

export default {
    exit_resource_type(parsed_rule) {
        let type = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
        parsed_rule.prog.current_file.type = newTerraformType(type, parsed_rule.ctx)
    }
}