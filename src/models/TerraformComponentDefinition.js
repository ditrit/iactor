import { ComponentDefinition } from 'leto-modelizer-plugin-core';

class TerraformComponentDefinition extends ComponentDefinition {
  constructor() {
    super()
    this.blockType = null;
    this.required = false;
  }
}

export default TerraformComponentDefinition;
