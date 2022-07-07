import TerraformVariable from 'src/models/TerraformVariable';
import TerraformAttribute from 'src/models/TerraformAttribute';

describe('Test class: TerraformVariable', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const terraformVariable = new TerraformVariable();
      expect(terraformVariable.blockType).toEqual('variable');
      expect(terraformVariable.name).toBeNull();
      expect(terraformVariable.attributes).toEqual([]);
    });

    it('Test constructor with parameters', () => {
      const terraformVariable = new TerraformVariable('name', [new TerraformAttribute()]);
      expect(terraformVariable.blockType).toEqual('variable');
      expect(terraformVariable.name).toEqual('name');
      expect(terraformVariable.attributes).toEqual([new TerraformAttribute()]);
    });
  });
});
