import { newTerraformObject } from "../model/object.js"

export default {
    exit_object(parsed_rule) {
        let object = (parsed_rule.value) ? parsed_rule.value : ""
        parsed_rule.ctx.prog.current_service_template.object = newTerraformObject(object, parsed_rule)
    }
}