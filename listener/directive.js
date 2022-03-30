import { newDirective } from "../model/directive.js";

export default {
    exit_direcrive(parsed_rule) {
        let prog_directive = parsed_rule.prog.current_file.directive
        let directive = (prog_directive) ? parsed_rule.ctx.getText() : parsed_rule.ctx.getText()
        parsed_rule.prog.current_file.directive.push(newDirective(directive, parsed_rule.ctx))
    }
}