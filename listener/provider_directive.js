import { newProviderDirective } from "../model/provider_directive.js";

export default {
    exit_provider_directive(parsed_rule) {
        let prog_provider_directive = parsed_rule.prog.current_file.provider_directive
        let provider_directive = (prog_provider_directive) ? parsed_rule.ctx.getText() : parsed_rule.ctx.getText()
        parsed_rule.prog.current_file.provider_directive = newProviderDirective(provider_directive, parsed_rule.ctx)
    }
}