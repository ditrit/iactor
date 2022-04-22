import { parse_directory } from "./parser/parse_directory.js";
import { verify_schema } from "./parser/parse.js";
import { get_objects } from "./parser/management_objects.js";
import { analyse_resources } from "./parser/analyse_metadatas.js";
import Ajv from 'ajv'
const ajv = new Ajv()

let values ={
    provider: [],
    resources: [],
    outputs: [],
    variables: [],
    modules: [],
    datas: [],
    modules_source: [],
    terraform: [],
    errors: []
};

let result = parse_directory('./tests/tf', values)  
for(let i=0; i<result.modules_source.length; i++) {
    let source = result.modules_source[i].split('=')
    let path = source[1]
    path = path.replaceAll('"', "")
    if(path.includes(".."))
        result = parse_directory(path.replace("..", "./tests"), result)  
    else if(path.includes("."))
        result = parse_directory(path.replace(".", "./tests"), result) 
    else
        result = parse_directory("./tests"+ path, result) 
}

result = get_objects(result.resources, result)
result = get_objects(result.modules, result, true)
result = get_objects(result.outputs, result)

const schema = verify_schema(result.provider[0].name)
if (!schema.valid) console.log(ajv.errors)
else {
    if(schema.metadatas.provider.required && result.provider.length == 0) {
        result.errors.push('Provider required')
    }
    if(result.provider[0].constructor.name != schema.metadatas.provider.providerType) {
        result.errors.push('Wrong type for provider')
    }
    analyse_resources(result.resources, schema.metadatas.provider.resources).forEach( e => {
        result.errors.push(e)
    })
}

if (result.errors.length != 0) {
    console.log("\n\n\n\n#################### ERRORS ####################");
    console.log("TERRAFORM ERROR in file : " + result.fileName);
    result.errors.forEach(e => console.log(e))
}