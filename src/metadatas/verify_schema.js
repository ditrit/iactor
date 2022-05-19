import fs from 'fs';
import Ajv from 'ajv';

const ajv = new Ajv();

export function verify_schema(provider) {
  let metadatas;
  let fileMetadatas;
  let schema;
  let fileSchema;
  fileMetadatas = fs.readFileSync(`./src/plugins/terraform/${provider}/metadatas.json`);
  metadatas = JSON.parse(fileMetadatas);
  fileSchema = fs.readFileSync('./src/metadatas/validation_schema.json');
  schema = JSON.parse(fileSchema);
  const validate = ajv.compile(schema);
  return { valid: validate(metadatas), metadatas, errors: validate.errors };
}
