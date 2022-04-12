import { newTerraformExpression } from "../model/expression.js"

export default {
    exit_expression(parsed_rule) {
        let expression = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
        if(expression.substring(0,3) == '"${') {
        }
        parsed_rule.prog.current_file.expression = newTerraformExpression(expression, parsed_rule.ctx)
    }
}