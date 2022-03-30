import { newTerraformExpression } from "../model/expression.js"

export default {
    exit_expression(parsed_rule) {
        let expression = (parsed_rule.ctx.getText()) ? parsed_rule.ctx.getText() : ""
        parsed_rule.prog.current_file.expression = newTerraformExpression(expression, parsed_rule.ctx)
    }
}