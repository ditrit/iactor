/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />

import {CommonTokenStream, InputStream, Token, error} from '../../../node_modules/antlr4/src/antlr4/index.js'
import {hclLexer} from "../../main-generated/javascript/hclLexer.js"
import {hclParser} from "../../main-generated/javascript/hclParser.js"

export function createLexer(input: String) {
    const chars = new InputStream(input);
    const lexer = new hclLexer(chars);
    return lexer;
}

export function getTokens(input: String) : typeof Token[] {
    return createLexer(input).getAllTokens()
}

function createParser(input) {
    const lexer = createLexer(input);
    return createParserFromLexer(lexer);
}

function createParserFromLexer(lexer) {
    const tokens = new CommonTokenStream(lexer);
    return new hclParser(tokens);
}

function parseTree(input) {
    const parser = createParser(input);
    return parser.compilationUnit();
}

export function parseTreeStr(input) {
    const lexer = createLexer(input);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new MyErrorListener());
    const parser = createParserFromLexer(lexer);
    parser.removeErrorListeners();
    parser.addErrorListener(new MyErrorListener());
    const tree = parser.compilationUnit();
    return tree.toStringTree(parser.ruleNames);
}