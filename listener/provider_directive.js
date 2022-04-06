import { newProviderDirective } from "../model/provider_directive.js";

export default {
    enter_provider_directive(parsed_rule) {
        parsed_rule.prog.current_file.field = []   
    }, 
    
    exit_provider_directive(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let name = (prog.name) ? prog.name.value : ""
        let object = (prog.object) ? prog.object : ""
        parsed_rule.prog.current_file.provider_directive.push(newProviderDirective({name : name, object : object}, parsed_rule.ctx))
    }
}