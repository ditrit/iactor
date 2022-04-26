import { parse_directories, get_final_result, get_all_objects } from "./compilation/parser/parse_directory.js";
import { verify_schema } from "./metadatas/verify_schema.js";
import { analyse_resources } from "./compilation/parser/analyse_metadatas.js";
import Ajv from 'ajv'
const ajv = new Ajv()

export default function(filesPath, modulePath) {
    let result = parse_directories(filesPath, modulePath);

    const schema = verify_schema(result.provider[0].name)
    if (!schema.valid) console.log(ajv.errors)
    else {
        if(schema.metadatas.provider.required && result.provider.length == 0) {
            result.errors.push('Provider required')
        }
        if(result.provider[0].constructor.name != schema.metadatas.provider.providerType) {
            result.errors.push('TERRAFORM ERROR in file : ' + result.provider.fileName + ' wrong type for provider')
        }
        analyse_resources(result.resources, schema.metadatas.provider.resources).forEach( e => {
            result.errors.push(e)
        })
    }
    
    result = get_all_objects(result)

    let finalResult ={
        provider: [],
        resources: [],
        outputs: [],
        variables: [],
        modules: [],
        datas: [],
        terraform: [],
        errors: []
    };
    finalResult.modules = result.modules

    finalResult = get_final_result(result, finalResult)

    if (result.errors.length != 0) {
        console.log("\n#################### ERRORS ####################");
        result.errors.forEach(e => console.log(e))
    }

    return finalResult
}