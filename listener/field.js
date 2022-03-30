import { newTerraformField } from "../model/field.js"

export default {
    exit_field(parsed_rule) {
        let field = (parsed_rule.ctx.getText()) ? parsed_rule.ctx.getText() : ""
        parsed_rule.prog.current_file.field = newTerraformField(field, parsed_rule.ctx)
    }
}