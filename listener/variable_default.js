import { newVariableDefault } from "../model/variable_default.js";

export default {
    exit_variable_default(parsed_rule) {
        let prog_variable_default = parsed_rule.prog.current_file.variable_default
        let variable_default = (prog_variable_default) ? parsed_rule.ctx.getText() : parsed_rule.ctx.getText()
        parsed_rule.prog.current_file.variable_default = newVariableDefault(variable_default, parsed_rule.ctx)
    }
}
