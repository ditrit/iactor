import validateSchema from 'src/metadata/index.js';
import validSchema from 'src/plugins/terraform/internal/aws/metadatas.json';

describe('Test: validateSchema', () => {
  it('Expect true on valid schema', () => {
    expect(validateSchema(validSchema)).toBeTruthy();
  })

  it('Expect throw exception on bad schema', () => {
    let error = null;
    try {
      validateSchema({
        provider: {
          name: 'test',
          required: true,
          providerType: 'ProviderDirective',
          orderResources: [],
          modules: [],
          resources: [],
        }
      });
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeNull();
    expect(error.message).toBe('Schemas is not valid');
    expect(error.cause.length).toEqual(1);
    expect(error.cause[0].message).toBe('must be object');
    expect(error.cause[0].keyword).toBe('type');
  })
});
