import { parse } from "./parser/parse.js";
import fs from 'fs';

var files = fs.readdirSync('./tests/tf/');
let res = []
files.forEach(e => {
    res.push(parse("./tests/tf/" + e, 'UTF-8'))
})

let variables = []
res.forEach(r => {
    r.files.forEach(st => {  
        st["variable_directive"].forEach( v => {
            variables.push(v)
        })
    })
})

let resources = []
res.forEach(r => {
    r.files.forEach(st => {  
        st["resource_directive"].forEach( v => {
            resources.push(v)
        })
    })
})

res.forEach(r => {
    r.files.forEach(st => {  
        st["resource_directive"].forEach( rd => {
            if(rd.variablesName.length > 0) {
                rd.variablesName.forEach( rv => {
                    variables.forEach( v => {
                        if(rv == v.name) {
                            rd.variablesObject.push(v)
                        }
                    })
                })
            } 

            if(rd.variablesName.length != rd.variablesObject.length) {
                let find = false
                rd.variablesName.forEach( rv => {
                    rd.variablesObject.forEach( v => {
                        if(rv == v.name) {
                            find = true
                        }
                    })
                    if(!find) {
                        r.errors.push('Variable ' + rv + ' inconnue')
                    }
                })                                
            }
        
            if(rd.resourcesName.length > 0) {
                rd.resourcesName.forEach( rv => {
                    resources.forEach( v => {
                        if(rv.resource == v.type && rv.name == v.name) {
                            rd.resourcesObject.push(v)
                        }
                    })
                })
            } 

            if(rd.resourcesName.length != rd.resourcesObject.length) {
                let find = false
                rd.resourcesName.forEach( rn => {
                    rd.resourcesObject.forEach( ro => {
                        if(rn.resource == ro.type && rn.name == ro.name) {
                            find = true
                        }
                    })
                    if(!find) {
                        r.errors.push('Resource type ' + rn.resource + ' : ' + rn.name + ' unknow')
                    }
                })                                
            }
        })
    })
})

res.forEach(r => {
    if (r.errors.length != 0) {
        console.log("\n\n\n\n#################### ERRORS ####################");
        console.log("TERRAFORM ERROR in file : " + r.fileName);
        r.errors.forEach(e => console.log(e))
    }
    console.log("\n\n\n\n#################### OBJECTS ####################");
    console.log("  File : " + r.fileName)
    r.files.forEach(st => {  
        if(st["terraform_directive"].length > 0) {
            console.log("\n  Terraforms: [")
            st["terraform_directive"].forEach( e => console.log(e.toString()))        
            console.log("  ]\n")
        }
            
        if(st["variable_directive"].length > 0) {
            console.log("\n  Variables: [")
            st["variable_directive"].forEach( e => console.log(e.toString()))     
            console.log("  ]\n")
        }
    
        if(st["provider_directive"].length > 0) {
            console.log("\n  Providers: [")
            st["provider_directive"].forEach( e => console.log(e.toString()))     
            console.log("  ]\n")
        }
    
        if(st["resource_directive"].length > 0) {
            console.log("\n  Resources: [")
            st["resource_directive"].forEach( e => console.log(e.toString()))     
            console.log("  ]\n")  
        }  
            
        if(st["output_directive"].length > 0) {
            console.log("\n  Outputs: [")
            st["output_directive"].forEach( e => console.log(e.toString()))     
            console.log("  ]\n")
        }
    
        if(st["module_directive"].length > 0) {
            console.log("\n  Modules: [")
            st["module_directive"].forEach( e => console.log(e.toString()))     
            console.log("  ]\n")
        }
    });
})