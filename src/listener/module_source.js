import { newModuleSource } from '../model/module_source.js';

export default {
    enter_module_source(parsed_rule) {
        parsed_rule.prog.current_file.field = []   
    }, 

    exit_module_source(parsed_rule) {
        let source = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
        parsed_rule.prog.current_file.modules_source.push(newModuleSource(source, parsed_rule.ctx))
    }
}
