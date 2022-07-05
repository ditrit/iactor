import TerraformProvider from 'src/models/TerraformProvider';
import TerraformVariable from 'src/models/TerraformVariable';

describe('Test class: TerraformProvider', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const terraformProvider = new TerraformProvider();
      expect(terraformProvider.blockType).toEqual('provider');
      expect(terraformProvider.name).toBeNull();
      expect(terraformProvider.variables).toEqual([]);
    });

    it('Test constructor with parameters', () => {
      const terraformProvider = new TerraformProvider('name', [new TerraformVariable()]);
      expect(terraformProvider.blockType).toEqual('provider');
      expect(terraformProvider.name).toEqual('name');
      expect(terraformProvider.variables).toEqual([new TerraformVariable()]);
    });
  });
});
