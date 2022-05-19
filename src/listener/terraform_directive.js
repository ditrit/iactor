import { newTerraformDirective } from '../model/terraform_directive.js';

export default {
    enter_terraform_directive(parsed_rule) {
        parsed_rule.prog.current_file.field = []     
    }, 

    exit_terraform_directive(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let objects = (prog.object && prog.object!="") ? prog.object : "" 

        parsed_rule.prog.current_file.terraform_directive.push(newTerraformDirective(objects, parsed_rule.ctx))
    }
}