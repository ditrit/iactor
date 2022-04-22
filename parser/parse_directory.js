import { parse } from "./parse.js";
import fs from 'fs';

export function parse_directory(filePath, result) {  
    var files = fs.readdirSync(filePath);
    let res = []
    files.forEach(e => {
        res.push(parse(filePath + '/' + e, 'UTF-8'))
    })

    res.forEach(r => {
        r.files.forEach(st => {  
            st["provider_directive"].forEach( v => {
                result.provider.push(v)
            })
            st["resource_directive"].forEach( v => {
                result.resources.push(v)
            })
            st["output_directive"].forEach( v => {
                result.outputs.push(v)
            })
            st["variable_directive"].forEach( v => {
                result.variables.push(v)
            })
            st["data_directive"].forEach( v => {
                result.datas.push(v)
            })
            st["module_directive"].forEach( v => {
                result.modules.push(v)
            })
            st["modules_source"].forEach( v => {
                result.modules_source.push(v.value)
            })
            st["terraform_directive"].forEach( v => {
                result.terraform.push(v)
            })
        })
        r.errors.forEach( e => {
            result.errors.push(e)
        })
    })
    return result;
}