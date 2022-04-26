import { newTerraformField } from "../model/field.js"

export default {
    enter_complex_field(parsed_rule) {
        parsed_rule.prog.current_file.complex_field = true
    },

    exit_complex_field(parsed_rule) {
        let field = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
        parsed_rule.prog.current_file.field.push(newTerraformField(field, parsed_rule.ctx))
        parsed_rule.prog.current_file.complex_field = false
    }
}