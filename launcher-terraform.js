import { parse } from "./parser/parse.js";

let res = parse("./tests/securityGroupExample.tf", 'UTF-8')

if (res.errors.length != 0) {
    console.log("TERRAFORM ERROR : ");
    res.errors.forEach(e => console.log(e))
} else {
    console.log("\n\n\n\n#################### OBJECTS ####################");
    res.files.forEach(st => {  
        console.log("\n  Terraforms: [")
        st["terraform_directive"].forEach( e => console.log(e.toString()))        
        console.log("  ]\n")
        
        console.log("\n  Variables: [")
        st["variable_directive"].forEach( e => console.log(e.toString()))     
        console.log("  ]\n")

        console.log("\n  Providers: [")
        st["provider_directive"].forEach( e => console.log(e.toString()))     
        console.log("  ]\n")

        console.log("\n  Resources: [")
        st["resource_directive"].forEach( e => console.log(e.toString()))     
        console.log("  ]\n")
        
        console.log("\n  Outputs: [")
        st["output_directive"].forEach( e => console.log(e.toString()))     
        console.log("  ]\n")

        console.log("\n  Modules: [")
        st["module_directive"].forEach( e => console.log(e.toString()))     
        console.log("  ]\n")
    });
}