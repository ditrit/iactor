import TerraformProvider from 'src/models/TerraformProvider';
import TerraformAttribute from 'src/models/TerraformAttribute';

describe('Test class: TerraformProvider', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const terraformProvider = new TerraformProvider();
      expect(terraformProvider.blockType).toEqual('provider');
      expect(terraformProvider.name).toBeNull();
      expect(terraformProvider.attributes).toEqual([]);
    });

    it('Test constructor with parameters', () => {
      const terraformProvider = new TerraformProvider('name', [new TerraformAttribute()]);
      expect(terraformProvider.blockType).toEqual('provider');
      expect(terraformProvider.name).toEqual('name');
      expect(terraformProvider.attributes).toEqual([new TerraformAttribute()]);
    });
  });
});
