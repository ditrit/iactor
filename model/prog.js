export class TerraformProg {
    constructor() {
        this.errors = []
        this.warnings = []
        this.imports = []
        this.alreadyImported = []
        this.files = []
    }

    toStringType(terraform_type) {
        let str = `\n ${terraform_type} : \n`
        for (const key in this[terraform_type]) {
            let node_type = this[terraform_type][key]
            str += `    ${key}: ${node_type}\n`
        }
        return str
    }

    toString() {
        let str = "prog: \n"
        console.log("DEBUG: ", this.files + "\n\n");
        for (const st in this.files) {
            str += st.toString()
        }
        return str
    }
}