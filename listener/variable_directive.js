import { newVariableDirective } from "../model/variable_directive.js";

export default {
    exit_variable_directive(parsed_rule) {
        let prog_variable_directive = parsed_rule.prog.current_file.variable_directive
        let variable_directive = (prog_variable_directive) ? parsed_rule.ctx.getText() : parsed_rule.ctx.getText()
        parsed_rule.prog.current_file.variable_directive = newVariableDirective(variable_directive, parsed_rule.ctx)
    }
}
