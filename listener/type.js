import { newTerraformType } from "../model/type.js"

export default {
    exit_type(parsed_rule) {
        let type = (parsed_rule.value) ? parsed_rule.value : ""
        parsed_rule.ctx.prog.current_service_template.namespace = newTerraformType(type, parsed_rule)
    }
}