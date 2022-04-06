import { newOutputDirective } from "../model/output_directive.js";

export default {
    enter_output_directive(parsed_rule) {
        parsed_rule.prog.current_file.field = []    
    }, 

    
    exit_output_directive(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let name = (prog.name) ? prog.name.value : ""
        let output_block = (prog.output_block) ? prog.output_block.value : ""
        parsed_rule.prog.current_file.output_directive.push(newOutputDirective({name : name, value: output_block}, parsed_rule.ctx))
    }
}
