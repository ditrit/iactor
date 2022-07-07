import TerraformBlock from 'src/models/TerraformBlock';
import TerraformAttribute from 'src/models/TerraformAttribute';

describe('Test class: TerraformBlock', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const terraFormBlock = new TerraformBlock();
      expect(terraFormBlock.blockType).toBeNull();
      expect(terraFormBlock.name).toBeNull();
      expect(terraFormBlock.attributes).toEqual([]);
    });

    it('Test constructor with parameters', () => {
      const terraFormBlock = new TerraformBlock('test', 'name', [new TerraformAttribute()]);
      expect(terraFormBlock.blockType).toEqual('test');
      expect(terraFormBlock.name).toEqual('name');
      expect(terraFormBlock.attributes).toEqual([new TerraformAttribute()]);
    });
  });
});
