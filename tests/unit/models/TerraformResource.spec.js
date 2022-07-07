import TerraformResource from 'src/models/TerraformResource';
import TerraformAttribute from 'src/models/TerraformAttribute';

describe('Test class: TerraformResource', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const terraformResource = new TerraformResource();
      expect(terraformResource.blockType).toEqual('resource');
      expect(terraformResource.type).toBeNull();
      expect(terraformResource.name).toBeNull();
      expect(terraformResource.attributes).toEqual([]);
    });

    it('Test constructor with parameters', () => {
      const terraformResource = new TerraformResource('test', 'name', [new TerraformAttribute()]);
      expect(terraformResource.blockType).toEqual('resource');
      expect(terraformResource.type).toEqual('test');
      expect(terraformResource.name).toEqual('name');
      expect(terraformResource.attributes).toEqual([new TerraformAttribute()]);
    });
  });
});
