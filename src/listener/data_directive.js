import { newDataDirective } from '../model/data_directive.js';

export default {
  enter_data_directive(parsed_rule) {
    parsed_rule.prog.current_file.field = [];
    parsed_rule.prog.current_file.complex_field = [];
  },

  exit_data_directive(parsed_rule) {
    const prog = parsed_rule.prog.current_file;
    const name = (prog.name) ? prog.name.value : '';
    const type = (prog.name) ? prog.type.value : '';
    const objects = (prog.object) ? prog.object : '';

    parsed_rule.prog.current_file.data_directive.push(newDataDirective({ name, type, objects }, parsed_rule.ctx));
  },
};
