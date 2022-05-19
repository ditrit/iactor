import { newTerraformField } from '../model/field.js';

export default {
  exit_field(parsed_rule) {
    const { is_complex_field } = parsed_rule.prog.current_file;
    if (is_complex_field == false) {
      const field = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : '';
      parsed_rule.prog.current_file.field.push(newTerraformField(field, parsed_rule.ctx));
    } else {
      const field = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : '';
      parsed_rule.prog.current_file.complex_field_object.push(field);
    }
  },
};
