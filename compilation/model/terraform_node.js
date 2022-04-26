export class TerraformNode {
    constructor(source) {
        this.source = source
        this.source.terraform = this
    }
}