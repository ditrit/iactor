import { newVariableDirective } from '../model/variable_directive.js';

export default {
  enter_variable_directive(parsed_rule) {
    parsed_rule.prog.current_file.field = [];
  },

  exit_variable_directive(parsed_rule) {
    const prog = parsed_rule.prog.current_file;
    const name = (prog.name) ? prog.name.value : '';
    const objects = (prog.object && prog.object != '') ? prog.object : '';

    parsed_rule.prog.current_file.variable_directive.push(newVariableDirective({ name, objects }, parsed_rule.ctx));
  },
};
