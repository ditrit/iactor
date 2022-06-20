import { newModuleDirective } from '../model/module_directive.js';
import { get_names } from '../parser/compiler/get_links_between_objects.js';

export default {
  enter_module_directive(parsed_rule) {
    parsed_rule.prog.current_file.field = [];
    parsed_rule.prog.current_file.complex_field = [];
  },

  exit_module_directive(parsed_rule) {
    const prog = parsed_rule.prog.current_file;
    const name = (prog.name) ? prog.name.value : '';
    const objects = (prog.object) ? prog.object : '';
    const source = (prog.modules_source[prog.modules_source.length - 1]) ? prog.modules_source[prog.modules_source.length - 1] : '';
    const names = (objects.value) ? get_names(objects.value, true) : [];

    parsed_rule.prog.current_file.module_directive.push(newModuleDirective({
      name, objects, source, names,
    }, parsed_rule.ctx));
  },
};
