import TerraformData from 'src/models/TerraformData';
import TerraformVariable from 'src/models/TerraformVariable';

describe('Test class: TerraformData', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const terraformData = new TerraformData();
      expect(terraformData.blockType).toEqual('data');
      expect(terraformData.type).toBeNull();
      expect(terraformData.name).toBeNull();
      expect(terraformData.variables).toEqual([]);
    });

    it('Test constructor with parameters', () => {
      const terraformData = new TerraformData('test', 'name', [new TerraformVariable()]);
      expect(terraformData.blockType).toEqual('data');
      expect(terraformData.type).toEqual('test');
      expect(terraformData.name).toEqual('name');
      expect(terraformData.variables).toEqual([new TerraformVariable()]);
    });
  });
});
