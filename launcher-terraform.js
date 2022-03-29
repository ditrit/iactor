import { parse } from "./parser/parse.js";

let res = parse("./tests/test.tf", 'UTF-8')

if (res.errors.length != 0) {
    console.log("TERRAFORM ERROR : ");
    res.errors.forEach(e => console.log(e))
} else {
    console.log("\n\n\n\n#################### OBJECTS ####################");
    res.files.forEach(st => {
        for (const key in st.node_types) {
            if (key.startsWith("http") || key.startsWith("/") || key.includes('.')) {

            } else {
                console.log("\n\n" + key + " = " + st.node_types[key].toString());
            }
        }
    });

    console.log("#################### NAME MANAGEMENT ####################");
    res.files.forEach(st => {
        console.log("\n-------" + st.origin_file + " -------------------------------------");
        for (const key in st.node_types) {
            console.log("key = " + key.toString());
        }
    });
}