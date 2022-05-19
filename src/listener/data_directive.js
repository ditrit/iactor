import { newDataDirective } from '../model/data_directive.js';

export default {
    enter_data_directive(parsed_rule) {
        parsed_rule.prog.current_file.field = []   
    }, 

    exit_data_directive(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let name = (prog.name) ? prog.name.value : ""
        let type = (prog.name) ? prog.type.value : ""
        let objects = (prog.object) ? prog.object : ""

        parsed_rule.prog.current_file.data_directive.push(newDataDirective({name : name, type : type, objects: objects}, parsed_rule.ctx))
    }
}