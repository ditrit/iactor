import { newVariableBlock } from "../model/variable_block.js";

export default {
    exit_variable_block(parsed_rule) {
        let prog_variable_block = parsed_rule.prog.current_file.variable_block
        let variable_block = (prog_variable_block) ? parsed_rule.ctx.getText() : parsed_rule.ctx.getText()
        parsed_rule.prog.current_file.variable_block = newVariableBlock(variable_block, parsed_rule.ctx)
    }
}
