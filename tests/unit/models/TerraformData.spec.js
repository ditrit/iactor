import TerraformData from 'src/models/TerraformData';
import TerraformAttribute from 'src/models/TerraformAttribute';

describe('Test class: TerraformData', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const terraformData = new TerraformData();
      expect(terraformData.blockType).toEqual('data');
      expect(terraformData.type).toBeNull();
      expect(terraformData.name).toBeNull();
      expect(terraformData.attributes).toEqual([]);
    });

    it('Test constructor with parameters', () => {
      const terraformData = new TerraformData('test', 'name', [new TerraformAttribute()]);
      expect(terraformData.blockType).toEqual('data');
      expect(terraformData.type).toEqual('test');
      expect(terraformData.name).toEqual('name');
      expect(terraformData.attributes).toEqual([new TerraformAttribute()]);
    });
  });
});
