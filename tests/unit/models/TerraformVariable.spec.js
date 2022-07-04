import TerraformVariable from 'src/models/TerraformVariable';

describe('Test class: TerraformVariable', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const terraformVariable = new TerraformVariable();
      expect(terraformVariable.type).toBeNull();
      expect(terraformVariable.name).toBeNull();
      expect(terraformVariable.value).toEqual(null);
    });

    it('Test constructor with parameters', () => {
      const terraformVariable = new TerraformVariable('test', 'name', 'value');
      expect(terraformVariable.type).toEqual('test');
      expect(terraformVariable.name).toEqual('name');
      expect(terraformVariable.value).toEqual('value');
    });
  });
});
