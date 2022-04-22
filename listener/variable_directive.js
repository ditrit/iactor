import { newVariableDirective } from "../model/variable_directive.js";

export default {
    enter_variable_directive(parsed_rule) {  
        parsed_rule.prog.current_file.field = []    
    }, 

    exit_variable_directive(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let name = (prog.name) ? prog.name.value : "";
        let objects = (prog.object && prog.object!="") ? prog.object : "" 

        parsed_rule.prog.current_file.variable_directive.push(newVariableDirective({name : name, objects : objects}, parsed_rule.ctx))
    }
}
