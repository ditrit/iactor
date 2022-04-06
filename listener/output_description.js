import { newOutputDescription } from "../model/output_description.js";

export default {
    exit_output_description(parsed_rule) {
        let output_description = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
        parsed_rule.prog.current_file.output_description = newOutputDescription(output_description, parsed_rule.ctx)
    }
}
