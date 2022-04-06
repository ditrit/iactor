import { newOutputSensitive } from "../model/output_sensitive.js";

export default {
    exit_output_sensitive(parsed_rule) {
        let output_sensitive = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
        parsed_rule.prog.current_file.output_sensitive = newOutputSensitive(output_sensitive, parsed_rule.ctx)
    }
}
