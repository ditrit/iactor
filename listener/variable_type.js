import { newVariableType } from "../model/variable_type.js";

export default {
    exit_variable_type(parsed_rule) {
        let prog_variable_type = parsed_rule.prog.current_file.variable_type
        let variable_type = (prog_variable_type) ? parsed_rule.ctx.getText() : parsed_rule.ctx.getText()
        parsed_rule.prog.current_file.variable_type = newVariableType(variable_type, parsed_rule.ctx)
    }
}
