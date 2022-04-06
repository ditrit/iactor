import { newTerraformObject } from "../model/object.js"

export default {
    exit_object(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let field = (prog.field != []) ? prog.field : []
        parsed_rule.prog.current_file.object = newTerraformObject(field, parsed_rule.ctx)        
    }
}