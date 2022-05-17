import { newResourceDirective } from '../model/resource_directive.js';
import { get_names } from '../parser/management_objects.js';

export default {
  enter_resource_directive(parsed_rule) {
    parsed_rule.prog.current_file.field = [];
  },

  exit_resource_directive(parsed_rule) {
    const prog = parsed_rule.prog.current_file;
    const type = (prog.type) ? prog.type.value : '';
    const name = (prog.name) ? prog.name.value : '';
    const objects = (prog.object && prog.object != '') ? prog.object : '';
    const names = get_names(objects.value);

    parsed_rule.prog.current_file.resource_directive.push(newResourceDirective({
      type, name, objects, names,
    }, parsed_rule.ctx));
  },
};
