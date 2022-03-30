import { newRessourceDirective } from "../model/ressource_directive.js";

export default {
    exit_ressource_directive(parsed_rule) {
        let prog_ressource_directive = parsed_rule.prog.current_file.ressource_directive
        let ressource_directive = (prog_ressource_directive) ? parsed_rule.ctx.getText() : parsed_rule.ctx.getText()
        parsed_rule.prog.current_file.ressource_directive = newRessourceDirective(ressource_directive, parsed_rule.ctx)
    }
}
