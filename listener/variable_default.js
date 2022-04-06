import { newVariableDefault } from "../model/variable_default.js";

export default {
    exit_variable_default(parsed_rule) {
        let variable_default = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
        parsed_rule.prog.current_file.variable_default = newVariableDefault(variable_default, parsed_rule.ctx)
    }
}
