import { parse } from "./parse.js";
import { get_objects } from "./management_objects.js";
import fs from 'fs';

export function parse_directories(filesPath, modulesPath) {
    let result = parse_directory(filesPath)  
    for(let i=0; i<result.modules.length; i++) {
        let source = result.modules[i].moduleSource.value.split('=')
        let path = source[1]
        path = path.replaceAll('"', "")
        if(path.includes(".."))
            result = parse_directory(path.replace("..", modulesPath), result, result.modules[i].name)  
        else if(path.includes("."))
            result = parse_directory(path.replace(".", modulesPath), result, result.modules[i].name) 
        else
            result = parse_directory(modulesPath + path, result, result.modules[i].name) 
    }

    return result
}

export function get_all_objects(result) {
    result = get_objects(result.resources, result)
    result = get_objects(result.modules, result, true)
    result = get_objects(result.outputs, result)

    return result;
}

export function get_final_result(result, finalResult) {
    let newFinalResult = get_module_attribute(result.variables, finalResult.variables, finalResult.modules)
    finalResult.variables = newFinalResult.finalResult 
    finalResult.modules = newFinalResult.modules 

    newFinalResult = get_module_attribute(result.provider, finalResult.provider, finalResult.modules)
    finalResult.provider = newFinalResult.finalResult 
    finalResult.modules = newFinalResult.modules 

    newFinalResult = get_module_attribute(result.resources, finalResult.resources, finalResult.modules)
    finalResult.resources = newFinalResult.finalResult 
    finalResult.modules = newFinalResult.modules 
    
    newFinalResult = get_module_attribute(result.outputs, finalResult.outputs, finalResult.modules)
    finalResult.outputs = newFinalResult.finalResult 
    finalResult.modules = newFinalResult.modules 
    
    newFinalResult = get_module_attribute(result.datas, finalResult.datas, finalResult.modules)
    finalResult.datas = newFinalResult.finalResult 
    finalResult.modules = newFinalResult.modules 
    
    newFinalResult = get_module_attribute(result.terraform, finalResult.terraform, finalResult.modules)
    finalResult.terraform = newFinalResult.finalResult 
    finalResult.modules = newFinalResult.modules 

    return finalResult;
}

function get_module_attribute(result, finalResult, modules) {
    result.forEach( v => {
        let find = false
        if(v.moduleName) {
            modules.forEach( m => {
                if(m.name == v.moduleName) {
                    find = true
                    m.attributes.push(v)
                }
            })
        }
        if(!find) {   
            finalResult.push(v)
        }
    })

    return {finalResult : finalResult, modules : modules};
}

function parse_directory(filePath, result, moduleName) {   
    let value;
    if(result) { value = result}
    else {
        value ={
            provider: [],
            resources: [],
            outputs: [],
            variables: [],
            modules: [],
            datas: [],
            terraform: [],
            errors: []
        };
    }
    var stats = fs.statSync(filePath);
    var files;
    var res = []

    if(stats.isDirectory()) {
        files = fs.readdirSync(filePath);
        files.forEach(e => {
            res.push(parse(filePath + '/' + e, 'UTF-8'))
        })
    } else {
        res.push(parse(filePath, 'UTF-8'))  
    }

    res.forEach(r => {
        r.files.forEach(st => {  
            st["provider_directive"].forEach( v => {
                v.fileName = r.fileName
                if(moduleName) v.moduleName = moduleName
                value.provider.push(v)
            })
            st["resource_directive"].forEach( v => {
                v.fileName = r.fileName
                if(moduleName) v.moduleName = moduleName
                value.resources.push(v)
            })
            st["output_directive"].forEach( v => {
                v.fileName = r.fileName
                if(moduleName) v.moduleName = moduleName
                value.outputs.push(v)
            })
            st["variable_directive"].forEach( v => {
                v.fileName = r.fileName
                if(moduleName) v.moduleName = moduleName
                value.variables.push(v)
            })
            st["data_directive"].forEach( v => {
                v.fileName = r.fileName
                if(moduleName) v.moduleName = moduleName
                value.datas.push(v)
            })
            st["module_directive"].forEach( v => {
                v.fileName = r.fileName
                if(moduleName) v.moduleName = moduleName
                value.modules.push(v)
            })
            st["terraform_directive"].forEach( v => {
                v.fileName = r.fileName
                if(moduleName) v.moduleName = moduleName
                value.terraform.push(v)
            })
        })
        r.errors.forEach( e => {
            value.errors.push(e)
        })
    })
    return value;
}