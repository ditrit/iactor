import { newResourceDirective } from "../model/resource_directive.js";
import { get_names } from "../parser/management_objects.js";

export default {
    enter_resource_directive(parsed_rule) {
        parsed_rule.prog.current_file.field = []     
    }, 
    
    exit_resource_directive(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let type = (prog.type) ? prog.type.value : "";
        let name = (prog.name) ? prog.name.value : "";
        let objects = (prog.object && prog.object!="") ? prog.object : ""
        let names = get_names(objects.value)        

        parsed_rule.prog.current_file.resource_directive.push(newResourceDirective({type : type, name: name, objects : objects, names : names}, parsed_rule.ctx))
    }
}
