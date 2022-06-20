import { newProviderDirective } from '../model/provider_directive.js';

export default {
  enter_provider_directive(parsed_rule) {
    parsed_rule.prog.current_file.field = [];
    parsed_rule.prog.current_file.complex_field = [];
  },

  exit_provider_directive(parsed_rule) {
    const prog = parsed_rule.prog.current_file;
    const name = (prog.name) ? prog.name.value : '';
    const objects = (prog.object) ? prog.object : '';

    parsed_rule.prog.current_file.provider_directive.push(newProviderDirective({ name, objects }, parsed_rule.ctx));
  },
};
