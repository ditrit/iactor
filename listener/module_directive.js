import { newModuleDirective } from "../model/module_directive.js";

export default {
    enter_module_directive(parsed_rule) {
        parsed_rule.prog.current_file.field = []   
    }, 

    exit_module_directive(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let name = (prog.name) ? prog.name.value : ""
        let object = (prog.object) ? prog.object : ""
        parsed_rule.prog.current_file.module_directive.push(newModuleDirective({name : name, value: object}, parsed_rule.ctx))
    }
}
