"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokensForLine = exports.hclTokensProvider = exports.hclState = void 0;
/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />
var ParserFacade_1 = require("./ParserFacade");
var index_js_1 = require("../../../node_modules/antlr4/src/antlr4/index.js");
var hclState = /** @class */ (function () {
    function hclState() {
    }
    hclState.prototype.clone = function () {
        return new hclState();
    };
    hclState.prototype.equals = function (other) {
        return true;
    };
    return hclState;
}());
exports.hclState = hclState;
var hclTokensProvider = /** @class */ (function () {
    function hclTokensProvider() {
    }
    hclTokensProvider.prototype.getInitialState = function () {
        return new hclState();
    };
    hclTokensProvider.prototype.tokenize = function (line, state) {
        // So far we ignore the state, which is not great for performance reasons
        return tokensForLine(line);
    };
    return hclTokensProvider;
}());
exports.hclTokensProvider = hclTokensProvider;
var EOF = -1;
var hclToken = /** @class */ (function () {
    function hclToken(ruleName, startIndex) {
        this.scopes = ruleName.toLowerCase() + ".hcl";
        this.startIndex = startIndex;
    }
    return hclToken;
}());
var hclLineTokens = /** @class */ (function () {
    function hclLineTokens(tokens) {
        this.endState = new hclState();
        this.tokens = tokens;
    }
    return hclLineTokens;
}());
function tokensForLine(input) {
    var errorStartingPoints = [];
    var ErrorCollectorListener = /** @class */ (function (_super) {
        __extends(ErrorCollectorListener, _super);
        function ErrorCollectorListener() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ErrorCollectorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
            errorStartingPoints.push(column);
        };
        return ErrorCollectorListener;
    }(index_js_1.error.ErrorListener));
    var lexer = (0, ParserFacade_1.createLexer)(input);
    lexer.removeErrorListeners();
    var errorListener = new ErrorCollectorListener();
    lexer.addErrorListener(errorListener);
    var done = false;
    var myTokens = [];
    do {
        var token = lexer.nextToken();
        if (token == null) {
            done = true;
        }
        else {
            // We exclude EOF
            if (token.type == EOF) {
                done = true;
            }
            else {
                var tokenTypeName = lexer.symbolicNames[token.type];
                var myToken = new hclToken(tokenTypeName, token.column);
                myTokens.push(myToken);
            }
        }
    } while (!done);
    // Add all errors
    for (var _i = 0, errorStartingPoints_1 = errorStartingPoints; _i < errorStartingPoints_1.length; _i++) {
        var e = errorStartingPoints_1[_i];
        myTokens.push(new hclToken("error.hcl", e));
    }
    myTokens.sort(function (a, b) { return (a.startIndex > b.startIndex) ? 1 : -1; });
    return new hclLineTokens(myTokens);
}
exports.tokensForLine = tokensForLine;
//# sourceMappingURL=hclTokensProvider.js.map