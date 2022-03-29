import { newTerraformExpression } from "../model/expression.js"

export default {
    exit_expression(parsed_rule) {
        let expression = (parsed_rule.value) ? parsed_rule.value : ""
        parsed_rule.ctx.prog.current_service_template.namespace = newTerraformExpression(expression, parsed_rule)
    }
}