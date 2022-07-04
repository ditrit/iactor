import TerraformFile from 'src/models/TerraformFile';
import TerraformBlock from 'src/models/TerraformBlock';

describe('Test class: TerraformFile', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const terraformFile = new TerraformFile();
      expect(terraformFile.fileName).toBeNull();
      expect(terraformFile.parent).toBeNull();
      expect(terraformFile.blocks).toEqual([]);
    });

    it('Test constructor with parameters', () => {
      const terraformFile = new TerraformFile('test', 'name', [new TerraformBlock()]);
      expect(terraformFile.fileName).toEqual('test');
      expect(terraformFile.parent).toEqual('name');
      expect(terraformFile.blocks).toEqual([new TerraformBlock()]);
    });
  });
});
