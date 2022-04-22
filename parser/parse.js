import { TerraformProg } from '../model/prog.js';
import parse_file from './prog_init.js';
import fs from 'fs';
import Ajv from 'ajv'
const ajv = new Ajv()

export function parse(src) {
    let fileName = src.split("/")[3]
    let prog = new TerraformProg(fileName)
    parse_file(src, "", "", null, prog)
    return prog
}

export function verify_schema(provider) {
    let metadatas, fileMetadatas;
    let schema, fileSchema;
    if(provider == '"aws"') {
        fileMetadatas = fs.readFileSync('./parser/metadatas_aws.json');
        metadatas = JSON.parse(fileMetadatas)
    }
    fileSchema = fs.readFileSync('./terraform_definitions/definitions/schema.json');
    schema = JSON.parse(fileSchema)
    return {valid : ajv.validate(schema, metadatas), metadatas : metadatas}
}