import Ajv from 'ajv';
import ValidationSchema from './ValidationSchema.js';

const ajv = new Ajv();

export default function validateSchema(metadata) {
  const validate = ajv.compile(ValidationSchema);

  if (validate(metadata)) {
    return true;
  }

  throw new Error('Schemas is not valid', { cause: validate.errors });
}
