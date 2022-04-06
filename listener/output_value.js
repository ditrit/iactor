import { newOutputValue } from "../model/output_value.js";

export default {
    exit_output_value(parsed_rule) {
        let output_value = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
        parsed_rule.prog.current_file.output_value = newOutputValue(output_value, parsed_rule.ctx)
    }
}
