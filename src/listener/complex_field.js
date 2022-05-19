import { newTerraformComplexField } from '../model/complex_field.js';

export default {
  enter_complex_field(parsed_rule) {
    parsed_rule.prog.current_file.is_complex_field = true;
    parsed_rule.prog.current_file.complex_field_object = [];
  },

  exit_complex_field(parsed_rule) {
    const prog = parsed_rule.prog.current_file;
    const name = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText().split('{')[0] : '';
    const objects = (prog.complex_field_object != []) ? prog.complex_field_object : [];
    parsed_rule.prog.current_file.complex_field.push(newTerraformComplexField({ name, objects }, parsed_rule.ctx));
    parsed_rule.prog.current_file.is_complex_field = false;
  },
};
