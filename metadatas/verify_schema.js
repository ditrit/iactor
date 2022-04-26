import fs from 'fs';
import Ajv from 'ajv'
const ajv = new Ajv()

export function verify_schema(provider) {
    let metadatas, fileMetadatas;
    let schema, fileSchema;
    if(provider == '"aws"') {
        fileMetadatas = fs.readFileSync('./metadatas/aws.json');
        metadatas = JSON.parse(fileMetadatas)
    }
    fileSchema = fs.readFileSync('./metadatas/validation_schema.json');
    schema = JSON.parse(fileSchema)
    return {valid : ajv.validate(schema, metadatas), metadatas : metadatas}
}