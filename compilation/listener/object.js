import { newTerraformObject } from "../model/object.js";

export default {
	exit_object(parsed_rule) {
		let prog = parsed_rule.prog.current_file;
		let field = prog.field != [] ? prog.field : [];
		let complex_field = prog.complex_field != [] ? prog.complex_field : [];
		parsed_rule.prog.current_file.object = newTerraformObject(
			{ field: field, complex_field: complex_field },
			parsed_rule.ctx
		);
	},
};
