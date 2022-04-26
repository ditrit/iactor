import { newTerraformField } from "../model/field.js"

export default {
    exit_field(parsed_rule) {
        var complex_field = parsed_rule.prog.current_file.complex_field
        if(complex_field == false) {
            let field = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
            parsed_rule.prog.current_file.field.push(newTerraformField(field, parsed_rule.ctx))
        }
    }
}