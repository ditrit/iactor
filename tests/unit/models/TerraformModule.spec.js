import TerraformModule from 'src/models/TerraformModule';
import TerraformVariable from 'src/models/TerraformVariable';

describe('Test class: TerraformModule', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const terraformModule = new TerraformModule();
      expect(terraformModule.blockType).toEqual('module');
      expect(terraformModule.name).toBeNull();
      expect(terraformModule.variables).toEqual([]);
    });

    it('Test constructor with parameters', () => {
      const terraformModule = new TerraformModule('name', [new TerraformVariable()]);
      expect(terraformModule.blockType).toEqual('module');
      expect(terraformModule.name).toEqual('name');
      expect(terraformModule.variables).toEqual([new TerraformVariable()]);
    });
  });
});
