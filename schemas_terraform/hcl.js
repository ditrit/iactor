import hclParser from "../compilation/parser/hclParser.js";
import hclLexer from "./hclLexer.js";
import antlr4 from 'antlr4';
import fs from "fs"

export function parse(src) {
    var input = fs.readFileSync(src.file, 'UTF-8')
    var chars = new antlr4.InputStream(input)
    var lexer = new hclLexer(chars)
    var tokens  = new antlr4.CommonTokenStream(lexer)
    var parser = new hclParser(tokens)
    parser.buildParseTrees = true;   
    var tree = parser.file(); 
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(src.listener, tree);
    return src.listener
}