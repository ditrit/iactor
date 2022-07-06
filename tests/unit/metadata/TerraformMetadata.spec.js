import TerraformMetadata from 'src/metadata/TerraformMetadata';
import fs from 'fs';

describe('Test TerraformMetadata', () => {
  describe('Test: constructor', () => {
    it('Test constructor without parameters', () => {
      const validator = new TerraformMetadata();
      expect(validator.metadata).toBeNull();
    });

    it('Test constructor with parameters', () => {
      const validator = new TerraformMetadata({});
      expect(validator.metadata).toEqual({});
    });
  });

  describe('Test method: validate', () => {
    it('Should return true on valid metadata', () => {
      const metadata = JSON.parse(fs.readFileSync('tests/metadata/aws.json', 'utf8'));

      const validator = new TerraformMetadata(metadata);
      expect(validator.validate()).toBeTruthy();
    });

    it('Should throw an error on invalid metadata', () => {
      const metadata = JSON.parse(fs.readFileSync('tests/metadata/aws_invalid.json', 'utf8'));

      const validator = new TerraformMetadata(metadata);
      let error = null;
      try {
        validator.validate()
      } catch (e) {
        error = e
      }
      expect(error).not.toBeNull();
      expect(error.cause).toEqual([{
        instancePath: '/provider',
        schemaPath: '#/required',
        keyword: 'required',
        params: { missingProperty: 'name' },
        message: "must have required property 'name'",
      }]);
    });
  });
});
