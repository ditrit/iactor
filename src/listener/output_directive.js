import { newOutputDirective } from '../model/output_directive.js';
import { get_names } from '../parser/compiler/get_links_between_objects.js';

export default {
  enter_output_directive(parsed_rule) {
    parsed_rule.prog.current_file.field = [];
  },

  exit_output_directive(parsed_rule) {
    const prog = parsed_rule.prog.current_file;
    const name = (prog.name) ? prog.name.value : '';
    const objects = (prog.object && prog.object != '') ? prog.object : '';
    const names = get_names(objects.value);

    parsed_rule.prog.current_file.output_directive.push(newOutputDirective({ name, objects, names }, parsed_rule.ctx));
  },
};
