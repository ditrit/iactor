import { parse_directories, get_module_attribute } from "./compilation/parser/parse_directory.js";
import { verify_schema } from "./metadatas/verify_schema.js";
import { analyse_resources, analyse_modules } from "./compilation/parser/analyse_metadatas.js";

export default function(filesPath) {
    let result = parse_directories(filesPath);

    const schema = verify_schema(result.provider[0].name)
    if (!schema.valid) console.log(schema.errors)
    else {
        if(schema.metadatas.provider.required && result.provider.length == 0) {
            result.errors.push('Provider required')
        }
        if(result.provider[0].constructor.name != schema.metadatas.provider.providerType) {
            result.errors.push('TERRAFORM ERROR in file : ' + result.provider.fileName + ' wrong type for provider')
        }
        result.provider[0].orderResources = (schema.metadatas.provider.orderResources) ? schema.metadatas.provider.orderResources : []
        analyse_resources(result.resources, schema.metadatas.provider.resources).forEach( e => {
            result.errors.push(e)
        })
    }    

    result['modules'].forEach( module => {
        get_module_attribute(result.variables, module)
        get_module_attribute(result.provider, module)
        get_module_attribute(result.resources, module)
        get_module_attribute(result.outputs, module)
        get_module_attribute(result.datas, module)
        get_module_attribute(result.terraform, module)
    })    

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