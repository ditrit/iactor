import { newDirective } from "../model/directive.js";

export default {
    exit_direcrive(parsed_rule) {
        console.log(parsed_rule)
        /*let directive = (parsed_rule.value) ? parsed_rule.value : {}
        parsed_rule.current_file.directive = newDirective(directive, parsed_rule)  */
    }
}