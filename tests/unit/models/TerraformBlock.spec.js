import TerraformBlock from 'src/models/TerraformBlock';
import TerraformVariable from 'src/models/TerraformVariable';

describe('Test class: TerraformBlock', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const terraFormBlock = new TerraformBlock();
      expect(terraFormBlock.blockType).toBeNull();
      expect(terraFormBlock.name).toBeNull();
      expect(terraFormBlock.variables).toEqual([]);
    });

    it('Test constructor with parameters', () => {
      const terraFormBlock = new TerraformBlock('test', 'name', [new TerraformVariable()]);
      expect(terraFormBlock.blockType).toEqual('test');
      expect(terraFormBlock.name).toEqual('name');
      expect(terraFormBlock.variables).toEqual([new TerraformVariable()]);
    });
  });
});
