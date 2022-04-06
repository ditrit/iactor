import { newOutputBlock } from "../model/output_block.js";

export default {
    enter_output_block(parsed_rule) {
        parsed_rule.prog.current_file.output_description = ""
        parsed_rule.prog.current_file.output_value = ""
        parsed_rule.prog.current_file.output_sensitive = ""
    },

    exit_output_block(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let output_description = (prog.output_description) ? prog.output_description : ""
        let output_value = (prog.output_value) ? prog.output_value : ""
        let output_sensitive = (prog.output_sensitive) ? prog.output_sensitive : ""
        parsed_rule.prog.current_file.output_block = newOutputBlock({description : output_description, 
            value: output_value, sensitive : output_sensitive}, parsed_rule.ctx)
    }
}
