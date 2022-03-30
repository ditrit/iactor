import { newOutputDirective } from "../model/output_directive.js";

export default {
    exit_output_directive(parsed_rule) {
        let prog_output_directive = parsed_rule.prog.current_file.output_directive
        let output_directive = (prog_output_directive) ? parsed_rule.ctx.getText() : parsed_rule.ctx.getText()
        parsed_rule.prog.current_file.output_directive.push(newOutputDirective(output_directive, parsed_rule.ctx))
    }
}
