import {parse_directories} from '../parser/parse_directory.js'

describe("Terraform prog ->", function() {
    describe("Data directive ->", function() {
        let prog, data; 
        beforeAll(function() {
            prog = parse_directories('./tests/tf/dataExample.tf')
        });

        it("simple data", function() { 
            data = prog["datas"];
            expect(data.length).toEqual(1); 
            expect(prog["errors"].length).toEqual(0);
            expect(data[0]["objects"].value.length).toEqual(3); 
        })
    })

    describe("Resource directive ->", function() {
        let prog, resource; 

        it("simple resource", function() { 
            prog = parse_directories('./tests/tf/sshKeyExample.tf')
            resource = prog["resources"];
            expect(resource.length).toEqual(1); 
            expect(prog["errors"].length).toEqual(0);
            expect(resource[0]["objects"].value.length).toEqual(2); 
        })
        
        it("resource using datas", function() { 
            prog = parse_directories('./tests/resourceLink')
            resource = prog["resources"];
            expect(resource[0]["datasName"].length).toEqual(1);
            expect(prog["errors"].length).toEqual(0);
            expect(resource[0]["datasName"][0].type).toEqual('"aws_ami"'); 
            expect(resource[0]["datasName"][0].name).toEqual('"web"');
            expect(resource[0]["datasName"].length).toEqual(resource[0]["datasObject"].length);  
            expect(resource[0]["datasObject"][0].value.type).toEqual('"aws_ami"'); 
            expect(resource[0]["datasObject"][0].value.name).toEqual('"web"');            
        })
        
        it("resource using variable", function() { 
            prog = parse_directories('./tests/resourceLink')
            resource = prog["resources"];
            expect(resource[1]["variablesName"].length).toEqual(1);
            expect(prog["errors"].length).toEqual(0);
            expect(resource[1]["variablesName"][0].name).toEqual('"http_port"');
            expect(resource[1]["variablesName"].length).toEqual(resource[1]["variablesObject"].length);  
            expect(resource[1]["variablesObject"][0].value.name).toEqual('"http_port"');            
        })

        
        it("resource using variables", function() { 
            prog = parse_directories('./tests/resourceLink')
            resource = prog["resources"];
            expect(resource[2]["variablesName"].length).toEqual(2);
            expect(prog["errors"].length).toEqual(0);
        })
    })
})