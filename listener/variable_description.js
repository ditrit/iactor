import { newVariableDescription } from "../model/variable_description.js";

export default {
    exit_variable_description(parsed_rule) {
        let prog_variable_description = parsed_rule.prog.current_file.variable_description
        let variable_description = (prog_variable_description) ? parsed_rule.ctx.getText() : parsed_rule.ctx.getText()
        parsed_rule.prog.current_file.variable_description = newVariableDescription(variable_description, parsed_rule.ctx)
    }
}
