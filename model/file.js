export class TerraformFile {
    constructor() {
        this.directive = {}

        this.errors = []
        this.warnings = []
    }

    toString() {
        let str = "prog: \n"     
        return str
    }
}

export function newTerraformFile(input, source) {

}