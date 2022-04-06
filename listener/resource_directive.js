import { newResourceDirective } from "../model/resource_directive.js";

export default {
    enter_resource_directive(parsed_rule) {
        parsed_rule.prog.current_file.field = []     
    }, 

    
    exit_resource_directive(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let type = (prog.type) ? prog.type.value : "";
        let name = (prog.name) ? prog.name.value : "";
        let object = (prog.object && prog.object!="") ? prog.object : ""
        parsed_rule.prog.current_file.resource_directive.push(newResourceDirective({type : type, name: name, object : object}, parsed_rule.ctx))
    }
}
