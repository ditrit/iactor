import { parse_directories, get_final_result, get_all_objects } from "./compilation/parser/parse_directory.js";
import { verify_schema } from "./metadatas/verify_schema.js";
import { analyse_resources, analyse_modules } from "./compilation/parser/analyse_metadatas.js";
import Ajv from 'ajv'
const ajv = new Ajv()

export default function(filesPath, modulePath) {
    let result = parse_directories(filesPath, modulePath);
    result = get_all_objects(result)

    const schema = verify_schema(result.provider[0].name)
    if (!schema.valid) console.log(schema.errors)
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

    let finalResult = {
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

    if (schema.valid) {
        analyse_modules(result.modules, schema.metadatas.provider.modules).forEach( e => {
            result.errors.push(e)
        })
    }   

    if (result.errors.length != 0) {
        console.log("\n#################### ERRORS ####################");
        result.errors.forEach(e => console.log(e))
    }

    return result
}