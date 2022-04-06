import { newVariableDirective } from "../model/variable_directive.js";

export default {
    enter_variable_directive(parsed_rule) {  
        parsed_rule.prog.current_file.field = []    
    }, 

    exit_variable_directive(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let name = (prog.name) ? prog.name.value : "";
        let variable_block = (prog.variable_block) ? prog.variable_block.value : ""
        parsed_rule.prog.current_file.variable_directive.push(newVariableDirective({name : name, value : variable_block}, parsed_rule.ctx))
    }
}
