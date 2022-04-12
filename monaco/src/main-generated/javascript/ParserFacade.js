"use strict";
/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokens = exports.createLexer = void 0;
var index_js_1 = require("../../../node_modules/antlr4/src/antlr4/index.js");
var hclLexer_js_1 = require("../../main-generated/javascript/hclLexer.js");
function createLexer(input) {
    var chars = new index_js_1.InputStream(input);
    var lexer = new hclLexer_js_1.hclLexer(chars);
    return lexer;
}
exports.createLexer = createLexer;
function getTokens(input) {
    return createLexer(input).getAllTokens();
}
exports.getTokens = getTokens;
//# sourceMappingURL=ParserFacade.js.map