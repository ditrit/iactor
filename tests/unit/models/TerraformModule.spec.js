import TerraformModule from 'src/models/TerraformModule';
import TerraformAttribute from 'src/models/TerraformAttribute';

describe('Test class: TerraformModule', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const terraformModule = new TerraformModule();
      expect(terraformModule.blockType).toEqual('module');
      expect(terraformModule.name).toBeNull();
      expect(terraformModule.attributes).toEqual([]);
    });

    it('Test constructor with parameters', () => {
      const terraformModule = new TerraformModule('name', [new TerraformAttribute()]);
      expect(terraformModule.blockType).toEqual('module');
      expect(terraformModule.name).toEqual('name');
      expect(terraformModule.attributes).toEqual([new TerraformAttribute()]);
    });
  });
});
