import { newResourceDirective } from "../model/resource_directive.js";

export default {
    enter_resource_directive(parsed_rule) {
        parsed_rule.prog.current_file.field = []     
    }, 
    
    exit_resource_directive(parsed_rule) {
        let prog = parsed_rule.prog.current_file
        let type = (prog.type) ? prog.type.value : "";
        let name = (prog.name) ? prog.name.value : "";
        let object = (prog.object && prog.object!="") ? prog.object : ""
        let variablesName = []
        let resources = []

        object.value.forEach(e => {
            let obj = e.split('=')
            if(obj[1] != undefined) {
                let affect = obj[1].split(".")  
                if(affect[0] == "var") {
                    variablesName.push('"' + affect[1] + '"')
                } else if(affect[0].substring(3) == "var") {
                    let variableName = '"' + affect[1].slice(0, -2) + '"'
                    if(!variablesName.includes(variableName)) {
                        variablesName.push(variableName)
                    }                    
                } else if(affect[0].substring(0,5) == "<<EOF" && affect[0].slice(-3) == "var") {
                    let script = affect[1].split('\r')
                    let variableName = '"' + script[0].slice(0, -2) + '"'
                    if(!variablesName.includes(variableName)) {
                        variablesName.push(variableName)
                    }
                } else if(affect[0].substring(0,3) == "aws") {
                    let resource = {resource : '"' + affect[0] + '"', name : '"' + affect[1] + '"'}    
                    resources.push(resource)   

                } else if(affect[0].substring(0,3) == '"${' && affect[0].substring(3,6) == "aws") {
                    let resource = {resource : '"' + affect[0].substring(3) + '"', name : '"' + affect[1] + '"'}    
                    resources.push(resource)   
                }  else if(affect[0].substring(0,1) == '[') {
                    let array = obj[1].split(",")
                    for(let i=0; i< array.length; i++) {
                        let explode = array[i].split('.')
                        if(i==0) {
                            if(explode[0].substring(0,4) == '["${' && explode[0].substring(4,7) == "aws") {
                                let resource = {resource : '"' + explode[0].substring(4) + '"', name : '"' + explode[1] + '"'} 
                                resources.push(resource)   
                            }
                        } else {
                            if(explode[0].substring(0,3) == '"${' && explode[0].substring(3,6) == "aws") {
                                let resource = {resource : '"' + explode[0].substring(3) + '"', name : '"' + explode[1] + '"'}  
                                resources.push(resource)   
                            }
                        }
                    }
                } 
            }
        });

        parsed_rule.prog.current_file.resource_directive.push(newResourceDirective({type : type, name: name, object : object, variables : variablesName, resources : resources}, parsed_rule.ctx))
    }    
}
