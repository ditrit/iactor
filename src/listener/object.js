import { newTerraformObject } from '../model/object.js';

export default {
  exit_object(parsed_rule) {
    const prog = parsed_rule.prog.current_file;
    const field = (prog.field != []) ? prog.field : [];
    const complex_field = (prog.complex_field != []) ? prog.complex_field : [];
    parsed_rule.prog.current_file.object = newTerraformObject({ field, complex_field }, parsed_rule.ctx);
  },
};
