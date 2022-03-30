import { parse } from "./parser/parse.js";

let res = parse("./tests/test.tf", 'UTF-8')

if (res.errors.length != 0) {
    console.log("TERRAFORM ERROR : ");
    res.errors.forEach(e => console.log(e))
} else {
    console.log("\n\n\n\n#################### OBJECTS ####################");
    res.files.forEach(st => {
        console.log(st)
        for (const key in st) {
            if (Array.isArray(st[key])) {
                console.log("\n\n" + key + " = ");
                for (let i=0; i< st[key].length ; i++) {
                    console.log("    " + st[key][i].value + "\n");
                }
            } else {
                console.log("\n\n" + key + " = " + st[key].value);
            }
        }
    });

    console.log("#################### NAME MANAGEMENT ####################");
    res.files.forEach(st => {
        for (const key in st) {
            console.log("key = " + key.toString());
        }
    });
}