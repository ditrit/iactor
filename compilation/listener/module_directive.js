import { newModuleDirective } from "../model/module_directive.js";
import { get_names } from "../parser/management_objects.js";

export default {
	enter_module_directive(parsed_rule) {
		parsed_rule.prog.current_file.field = [];
	},

	exit_module_directive(parsed_rule) {
		let prog = parsed_rule.prog.current_file;
		let name = prog.name ? prog.name.value : "";
		let objects = prog.object ? prog.object : "";
		let source = prog.modules_source[prog.modules_source.length - 1]
			? prog.modules_source[prog.modules_source.length - 1]
			: "";
		let names = objects.value ? get_names(objects.value, true) : [];

		parsed_rule.prog.current_file.module_directive.push(
			newModuleDirective(
				{ name: name, objects: objects, source: source, names: names },
				parsed_rule.ctx
			)
		);
	},
};
