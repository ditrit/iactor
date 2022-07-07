import TerraformAttribute from 'src/models/TerraformAttribute';

describe('Test class: TerraformAttribute', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const terraformAttribute = new TerraformAttribute();
      expect(terraformAttribute.type).toBeNull();
      expect(terraformAttribute.name).toBeNull();
      expect(terraformAttribute.value).toEqual(null);
    });

    it('Test constructor with parameters', () => {
      const terraformAttribute = new TerraformAttribute('test', 'name', 'value');
      expect(terraformAttribute.type).toEqual('test');
      expect(terraformAttribute.name).toEqual('name');
      expect(terraformAttribute.value).toEqual('value');
    });
  });
});
