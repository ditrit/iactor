import { newTerraformCloud } from "../model/terraform_cloud.js";

export default {
    exit_terraform_cloud(parsed_rule) {
        let terraform_cloud = (parsed_rule.ctx.ctx.getText()) ? parsed_rule.ctx.ctx.getText() : ""
        parsed_rule.prog.current_file.terraform_cloud = newTerraformCloud(terraform_cloud, parsed_rule.ctx)
    }
}
