import { newTerraformName } from "../model/name.js";

export default {
	exit_name(parsed_rule) {
		let name = parsed_rule.ctx.ctx
			? parsed_rule.ctx.ctx.getText().replaceAll('"', "")
			: "";
		parsed_rule.prog.current_file.name = newTerraformName(
			name,
			parsed_rule.ctx
		);
	},
};
