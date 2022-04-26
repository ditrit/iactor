import { newOutputDirective } from "../model/output_directive.js";
import { get_names } from "../parser/management_objects.js";

export default {
    enter_output_directive(parsed_rule) {
        parsed_rule.prog.current_file.field = []    
    }, 

    
    exit_output_directive(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let name = (prog.name) ? prog.name.value : ""
        let objects = (prog.object && prog.object!="") ? prog.object : "" 
        let names = get_names(objects.value) 

        parsed_rule.prog.current_file.output_directive.push(newOutputDirective({name : name, objects: objects, names : names}, parsed_rule.ctx))
    }
}
