import { newTerraformObject } from "../model/object.js"

export default {
    exit_object(parsed_rule) {
        let object = (parsed_rule.ctx.getText()) ? parsed_rule.ctx.getText() : ""
        parsed_rule.prog.current_file.object = newTerraformObject(object, parsed_rule.ctx)
    }
}