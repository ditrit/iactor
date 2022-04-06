import { newTerraformBlock } from "../model/terraform_block.js";

export default {
    enter_terraform_block(parsed_rule) {
        parsed_rule.prog.current_file.terraform_cloud = ""
        parsed_rule.prog.current_file.terraform_backend = ""
        parsed_rule.prog.current_file.terraform_version = ""
        parsed_rule.prog.current_file.terraform_providers = ""
    },

    exit_terraform_block(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let terraform_cloud = (prog.terraform_cloud) ? prog.terraform_cloud : ""
        let terraform_backend = (prog.terraform_backend) ? prog.terraform_backend : ""
        let terraform_version = (prog.terraform_version) ? prog.terraform_version : ""
        let terraform_providers = (prog.terraform_providers) ? prog.terraform_providers : ""
        parsed_rule.prog.current_file.terraform_block = newTerraformBlock({cloud : terraform_cloud, 
            backend: terraform_backend, version : terraform_version, providers : terraform_providers}, parsed_rule.ctx)
    }
}
