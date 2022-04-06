import { newVariableDescription } from "../model/variable_description.js";

export default {
    exit_variable_description(parsed_rule) {
        let variable_description = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
        parsed_rule.prog.current_file.variable_description = newVariableDescription(variable_description, parsed_rule.ctx)
    }
}
