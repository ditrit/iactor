import { newTerraformField } from "../model/field.js";

export default {
	exit_field(parsed_rule) {
		var is_complex_field = parsed_rule.prog.current_file.is_complex_field;
		if (is_complex_field == false) {
			let field = parsed_rule.ctx.ctx.getText()
				? parsed_rule.ctx.ctx.getText()
				: "";
			parsed_rule.prog.current_file.field.push(
				newTerraformField(field, parsed_rule.ctx)
			);
		} else {
			let field = parsed_rule.ctx.ctx.getText()
				? parsed_rule.ctx.ctx.getText()
				: "";
			parsed_rule.prog.current_file.complex_field_object.push(field);
		}
	},
};
