import { newVariableBlock } from "../model/variable_block.js";

export default {
    enter_variable_block(parsed_rule) {
        parsed_rule.prog.current_file.variable_description = ""
        parsed_rule.prog.current_file.variable_type = ""
        parsed_rule.prog.current_file.variable_default = ""
    },

    exit_variable_block(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let variable_description = (prog.variable_description) ? prog.variable_description : ""
        let variable_type = (prog.variable_type) ? prog.variable_type : ""
        let variable_default = (prog.variable_default) ? prog.variable_default : ""
        parsed_rule.prog.current_file.variable_block = newVariableBlock({description : variable_description, 
            type: variable_type, default : variable_default}, parsed_rule.ctx)
    }
}
