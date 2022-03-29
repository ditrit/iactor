// Generated from hcl.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import hclListener from '../listener/hclListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003#\u00e1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0003\u0002\u0006\u00022\n\u0002\r\u0002\u000e",
    "\u00023\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003;\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0006\bQ\n\b\r\b\u000e\bR\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0006",
    "\n_\n\n\r\n\u000e\n`\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u0084\n\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0006\u0010\u008a\n\u0010\r\u0010\u000e",
    "\u0010\u008b\u0003\u0010\u0003\u0010\u0005\u0010\u0090\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u0097",
    "\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00a7\n\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u00ae",
    "\n\u0015\f\u0015\u000e\u0015\u00b1\u000b\u0015\u0003\u0015\u0005\u0015",
    "\u00b4\n\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0005\u0016\u00bb\n\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0007\u0016\u00c8\n\u0016\f\u0016\u000e\u0016",
    "\u00cb\u000b\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0007\u0017\u00d3\n\u0017\f\u0017\u000e\u0017\u00d6",
    "\u000b\u0017\u0003\u0017\u0005\u0017\u00d9\n\u0017\u0003\u0017\u0003",
    "\u0017\u0005\u0017\u00dd\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0002\u0003*\u0019\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.\u0002\u0003\u0004\u0002\u001a",
    "\u001a\u001f\u001f\u0002\u00e9\u00021\u0003\u0002\u0002\u0002\u0004",
    ":\u0003\u0002\u0002\u0002\u0006<\u0003\u0002\u0002\u0002\b@\u0003\u0002",
    "\u0002\u0002\nC\u0003\u0002\u0002\u0002\fH\u0003\u0002\u0002\u0002\u000e",
    "L\u0003\u0002\u0002\u0002\u0010V\u0003\u0002\u0002\u0002\u0012Z\u0003",
    "\u0002\u0002\u0002\u0014d\u0003\u0002\u0002\u0002\u0016h\u0003\u0002",
    "\u0002\u0002\u0018l\u0003\u0002\u0002\u0002\u001ap\u0003\u0002\u0002",
    "\u0002\u001c\u0083\u0003\u0002\u0002\u0002\u001e\u008f\u0003\u0002\u0002",
    "\u0002 \u0096\u0003\u0002\u0002\u0002\"\u0098\u0003\u0002\u0002\u0002",
    "$\u009c\u0003\u0002\u0002\u0002&\u00a6\u0003\u0002\u0002\u0002(\u00a8",
    "\u0003\u0002\u0002\u0002*\u00ba\u0003\u0002\u0002\u0002,\u00dc\u0003",
    "\u0002\u0002\u0002.\u00de\u0003\u0002\u0002\u000202\u0005\u0004\u0003",
    "\u000210\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u000231\u0003\u0002",
    "\u0002\u000234\u0003\u0002\u0002\u00024\u0003\u0003\u0002\u0002\u0002",
    "5;\u0005\u0006\u0004\u00026;\u0005\b\u0005\u00027;\u0005\n\u0006\u0002",
    "8;\u0005\f\u0007\u00029;\u0005\u0010\t\u0002:5\u0003\u0002\u0002\u0002",
    ":6\u0003\u0002\u0002\u0002:7\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002",
    "\u0002:9\u0003\u0002\u0002\u0002;\u0005\u0003\u0002\u0002\u0002<=\u0007",
    "\u0003\u0002\u0002=>\u0007\u001e\u0002\u0002>?\u0005\u001e\u0010\u0002",
    "?\u0007\u0003\u0002\u0002\u0002@A\u0007\u0004\u0002\u0002AB\u0005\u001e",
    "\u0010\u0002B\t\u0003\u0002\u0002\u0002CD\u0007\u0005\u0002\u0002DE",
    "\u0007\u001e\u0002\u0002EF\u0007\u001e\u0002\u0002FG\u0005\u001e\u0010",
    "\u0002G\u000b\u0003\u0002\u0002\u0002HI\u0007\u0006\u0002\u0002IJ\u0007",
    "\u001e\u0002\u0002JK\u0005\u000e\b\u0002K\r\u0003\u0002\u0002\u0002",
    "LP\u0007\u0007\u0002\u0002MQ\u0005\u001a\u000e\u0002NQ\u0005\"\u0012",
    "\u0002OQ\u0005$\u0013\u0002PM\u0003\u0002\u0002\u0002PN\u0003\u0002",
    "\u0002\u0002PO\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RP\u0003",
    "\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002",
    "TU\u0007\b\u0002\u0002U\u000f\u0003\u0002\u0002\u0002VW\u0007\t\u0002",
    "\u0002WX\u0007\u001e\u0002\u0002XY\u0005\u0012\n\u0002Y\u0011\u0003",
    "\u0002\u0002\u0002Z^\u0007\u0007\u0002\u0002[_\u0005\u0014\u000b\u0002",
    "\\_\u0005\u0016\f\u0002]_\u0005\u0018\r\u0002^[\u0003\u0002\u0002\u0002",
    "^\\\u0003\u0002\u0002\u0002^]\u0003\u0002\u0002\u0002_`\u0003\u0002",
    "\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ab\u0003",
    "\u0002\u0002\u0002bc\u0007\b\u0002\u0002c\u0013\u0003\u0002\u0002\u0002",
    "de\u0007\n\u0002\u0002ef\u0007\u000b\u0002\u0002fg\u0005&\u0014\u0002",
    "g\u0015\u0003\u0002\u0002\u0002hi\u0007\f\u0002\u0002ij\u0007\u000b",
    "\u0002\u0002jk\u0007\u001e\u0002\u0002k\u0017\u0003\u0002\u0002\u0002",
    "lm\u0007\r\u0002\u0002mn\u0007\u000b\u0002\u0002no\u0007\u001b\u0002",
    "\u0002o\u0019\u0003\u0002\u0002\u0002pq\u0007\u000e\u0002\u0002qr\u0007",
    "\u000b\u0002\u0002rs\u0005\u001c\u000f\u0002s\u001b\u0003\u0002\u0002",
    "\u0002t\u0084\u0007\u001c\u0002\u0002u\u0084\u0007\u000f\u0002\u0002",
    "vw\u0007\u0010\u0002\u0002wx\u0005\u001c\u000f\u0002xy\u0007\u0011\u0002",
    "\u0002y\u0084\u0003\u0002\u0002\u0002z{\u0007\u0012\u0002\u0002{|\u0005",
    "\u001c\u000f\u0002|}\u0007\u0011\u0002\u0002}\u0084\u0003\u0002\u0002",
    "\u0002~\u007f\u0007\u0013\u0002\u0002\u007f\u0080\u0007\u0014\u0002",
    "\u0002\u0080\u0081\u0005\u001e\u0010\u0002\u0081\u0082\u0007\u0011\u0002",
    "\u0002\u0082\u0084\u0003\u0002\u0002\u0002\u0083t\u0003\u0002\u0002",
    "\u0002\u0083u\u0003\u0002\u0002\u0002\u0083v\u0003\u0002\u0002\u0002",
    "\u0083z\u0003\u0002\u0002\u0002\u0083~\u0003\u0002\u0002\u0002\u0084",
    "\u001d\u0003\u0002\u0002\u0002\u0085\u0086\u0007\u0007\u0002\u0002\u0086",
    "\u0090\u0007\b\u0002\u0002\u0087\u0089\u0007\u0007\u0002\u0002\u0088",
    "\u008a\u0005 \u0011\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u008a",
    "\u008b\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008b",
    "\u008c\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d",
    "\u008e\u0007\b\u0002\u0002\u008e\u0090\u0003\u0002\u0002\u0002\u008f",
    "\u0085\u0003\u0002\u0002\u0002\u008f\u0087\u0003\u0002\u0002\u0002\u0090",
    "\u001f\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u001d\u0002\u0002\u0092",
    "\u0093\u0007\u000b\u0002\u0002\u0093\u0097\u0005&\u0014\u0002\u0094",
    "\u0095\u0007\u001d\u0002\u0002\u0095\u0097\u0005\u001e\u0010\u0002\u0096",
    "\u0091\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0097",
    "!\u0003\u0002\u0002\u0002\u0098\u0099\u0007\f\u0002\u0002\u0099\u009a",
    "\u0007\u000b\u0002\u0002\u009a\u009b\u0007\u001e\u0002\u0002\u009b#",
    "\u0003\u0002\u0002\u0002\u009c\u009d\u0007\u0015\u0002\u0002\u009d\u009e",
    "\u0007\u000b\u0002\u0002\u009e\u009f\u0005&\u0014\u0002\u009f%\u0003",
    "\u0002\u0002\u0002\u00a0\u00a7\u0007\u001e\u0002\u0002\u00a1\u00a7\u0007",
    "\u001f\u0002\u0002\u00a2\u00a7\u0007\u001b\u0002\u0002\u00a3\u00a7\u0005",
    ",\u0017\u0002\u00a4\u00a7\u0005\u001e\u0010\u0002\u00a5\u00a7\u0005",
    "*\u0016\u0002\u00a6\u00a0\u0003\u0002\u0002\u0002\u00a6\u00a1\u0003",
    "\u0002\u0002\u0002\u00a6\u00a2\u0003\u0002\u0002\u0002\u00a6\u00a3\u0003",
    "\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a5\u0003",
    "\u0002\u0002\u0002\u00a7\'\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007",
    "\u001d\u0002\u0002\u00a9\u00aa\u0007\u0014\u0002\u0002\u00aa\u00af\u0005",
    "&\u0014\u0002\u00ab\u00ac\u0007\u0016\u0002\u0002\u00ac\u00ae\u0005",
    "&\u0014\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ae\u00b1\u0003",
    "\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00af\u00b0\u0003",
    "\u0002\u0002\u0002\u00b0\u00b3\u0003\u0002\u0002\u0002\u00b1\u00af\u0003",
    "\u0002\u0002\u0002\u00b2\u00b4\u0007\u0016\u0002\u0002\u00b3\u00b2\u0003",
    "\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003",
    "\u0002\u0002\u0002\u00b5\u00b6\u0007\u0011\u0002\u0002\u00b6)\u0003",
    "\u0002\u0002\u0002\u00b7\u00b8\b\u0016\u0001\u0002\u00b8\u00bb\u0007",
    "\u001d\u0002\u0002\u00b9\u00bb\u0005(\u0015\u0002\u00ba\u00b7\u0003",
    "\u0002\u0002\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002\u00bb\u00c9\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\f\u0006\u0002\u0002\u00bd\u00be\u0007",
    "\u0017\u0002\u0002\u00be\u00c8\u0005*\u0016\u0007\u00bf\u00c0\f\u0005",
    "\u0002\u0002\u00c0\u00c1\u0007\u0018\u0002\u0002\u00c1\u00c2\u0005.",
    "\u0018\u0002\u00c2\u00c3\u0007\u0019\u0002\u0002\u00c3\u00c8\u0003\u0002",
    "\u0002\u0002\u00c4\u00c5\f\u0004\u0002\u0002\u00c5\u00c6\u0007\u0017",
    "\u0002\u0002\u00c6\u00c8\u0005.\u0018\u0002\u00c7\u00bc\u0003\u0002",
    "\u0002\u0002\u00c7\u00bf\u0003\u0002\u0002\u0002\u00c7\u00c4\u0003\u0002",
    "\u0002\u0002\u00c8\u00cb\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002",
    "\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca+\u0003\u0002",
    "\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cc\u00cd\u0007\u0018",
    "\u0002\u0002\u00cd\u00dd\u0007\u0019\u0002\u0002\u00ce\u00cf\u0007\u0018",
    "\u0002\u0002\u00cf\u00d4\u0005&\u0014\u0002\u00d0\u00d1\u0007\u0016",
    "\u0002\u0002\u00d1\u00d3\u0005&\u0014\u0002\u00d2\u00d0\u0003\u0002",
    "\u0002\u0002\u00d3\u00d6\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002",
    "\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00d8\u0003\u0002",
    "\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d7\u00d9\u0007\u0016",
    "\u0002\u0002\u00d8\u00d7\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002",
    "\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da\u00db\u0007\u0019",
    "\u0002\u0002\u00db\u00dd\u0003\u0002\u0002\u0002\u00dc\u00cc\u0003\u0002",
    "\u0002\u0002\u00dc\u00ce\u0003\u0002\u0002\u0002\u00dd-\u0003\u0002",
    "\u0002\u0002\u00de\u00df\t\u0002\u0002\u0002\u00df/\u0003\u0002\u0002",
    "\u0002\u00153:PR^`\u0083\u008b\u008f\u0096\u00a6\u00af\u00b3\u00ba\u00c7",
    "\u00c9\u00d4\u00d8\u00dc"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class hclParser extends antlr4.Parser {

    static grammarFileName = "hcl.g4";
    static literalNames = [ null, "'provider'", "'terraform'", "'resource'", 
                            "'variable'", "'{'", "'}'", "'output'", "'value'", 
                            "'='", "'description'", "'sensitive'", "'type'", 
                            "'list'", "'list('", "')'", "'map('", "'object'", 
                            "'('", "'default'", "','", "'.'", "'['", "']'", 
                            "'*'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "BOOLEAN", "TYPE", "IDENTIFIER", "STRING", 
                             "NUMBER", "COMMENT", "LINE_COMMENT", "HAS_COMMENT", 
                             "WS" ];
    static ruleNames = [ "file", "directive", "providerDirective", "terraformDirective", 
                         "resourceDirective", "variableDirective", "variableBlock", 
                         "outputDirective", "outputBlock", "outputValue", 
                         "outputDescription", "outputSensitive", "variableType", 
                         "type", "object", "field", "variableDescription", 
                         "variableDefault", "expression", "functionCall", 
                         "complexExpression", "array", "index" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = hclParser.ruleNames;
        this.literalNames = hclParser.literalNames;
        this.symbolicNames = hclParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 20:
    	    		return this.complexExpression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    complexExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		case 2:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, hclParser.RULE_file);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 46;
	            this.directive();
	            this.state = 49; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << hclParser.T__0) | (1 << hclParser.T__1) | (1 << hclParser.T__2) | (1 << hclParser.T__3) | (1 << hclParser.T__6))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, hclParser.RULE_directive);
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case hclParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.providerDirective();
	            break;
	        case hclParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.terraformDirective();
	            break;
	        case hclParser.T__2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 53;
	            this.resourceDirective();
	            break;
	        case hclParser.T__3:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 54;
	            this.variableDirective();
	            break;
	        case hclParser.T__6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 55;
	            this.outputDirective();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	providerDirective() {
	    let localctx = new ProviderDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, hclParser.RULE_providerDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(hclParser.T__0);
	        this.state = 59;
	        this.match(hclParser.STRING);
	        this.state = 60;
	        this.object();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terraformDirective() {
	    let localctx = new TerraformDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, hclParser.RULE_terraformDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(hclParser.T__1);
	        this.state = 63;
	        this.object();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	resourceDirective() {
	    let localctx = new ResourceDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, hclParser.RULE_resourceDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(hclParser.T__2);
	        this.state = 66;
	        this.match(hclParser.STRING);
	        this.state = 67;
	        this.match(hclParser.STRING);
	        this.state = 68;
	        this.object();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDirective() {
	    let localctx = new VariableDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, hclParser.RULE_variableDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(hclParser.T__3);
	        this.state = 71;
	        this.match(hclParser.STRING);
	        this.state = 72;
	        this.variableBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableBlock() {
	    let localctx = new VariableBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, hclParser.RULE_variableBlock);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(hclParser.T__4);
	        this.state = 78; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 78;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case hclParser.T__11:
	                this.state = 75;
	                this.variableType();
	                break;
	            case hclParser.T__9:
	                this.state = 76;
	                this.variableDescription();
	                break;
	            case hclParser.T__18:
	                this.state = 77;
	                this.variableDefault();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 80; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << hclParser.T__9) | (1 << hclParser.T__11) | (1 << hclParser.T__18))) !== 0));
	        this.state = 82;
	        this.match(hclParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputDirective() {
	    let localctx = new OutputDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, hclParser.RULE_outputDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(hclParser.T__6);
	        this.state = 85;
	        this.match(hclParser.STRING);
	        this.state = 86;
	        this.outputBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputBlock() {
	    let localctx = new OutputBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, hclParser.RULE_outputBlock);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(hclParser.T__4);
	        this.state = 92; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 92;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case hclParser.T__7:
	                this.state = 89;
	                this.outputValue();
	                break;
	            case hclParser.T__9:
	                this.state = 90;
	                this.outputDescription();
	                break;
	            case hclParser.T__10:
	                this.state = 91;
	                this.outputSensitive();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 94; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << hclParser.T__7) | (1 << hclParser.T__9) | (1 << hclParser.T__10))) !== 0));
	        this.state = 96;
	        this.match(hclParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputValue() {
	    let localctx = new OutputValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, hclParser.RULE_outputValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(hclParser.T__7);
	        this.state = 99;
	        this.match(hclParser.T__8);
	        this.state = 100;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputDescription() {
	    let localctx = new OutputDescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, hclParser.RULE_outputDescription);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(hclParser.T__9);
	        this.state = 103;
	        this.match(hclParser.T__8);
	        this.state = 104;
	        this.match(hclParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputSensitive() {
	    let localctx = new OutputSensitiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, hclParser.RULE_outputSensitive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(hclParser.T__10);
	        this.state = 107;
	        this.match(hclParser.T__8);
	        this.state = 108;
	        this.match(hclParser.BOOLEAN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableType() {
	    let localctx = new VariableTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, hclParser.RULE_variableType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(hclParser.T__11);
	        this.state = 111;
	        this.match(hclParser.T__8);
	        this.state = 112;
	        this.type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, hclParser.RULE_type);
	    try {
	        this.state = 129;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case hclParser.TYPE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.match(hclParser.TYPE);
	            break;
	        case hclParser.T__12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 115;
	            this.match(hclParser.T__12);
	            break;
	        case hclParser.T__13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 116;
	            this.match(hclParser.T__13);
	            this.state = 117;
	            this.type();
	            this.state = 118;
	            this.match(hclParser.T__14);
	            break;
	        case hclParser.T__15:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 120;
	            this.match(hclParser.T__15);
	            this.state = 121;
	            this.type();
	            this.state = 122;
	            this.match(hclParser.T__14);
	            break;
	        case hclParser.T__16:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 124;
	            this.match(hclParser.T__16);
	            this.state = 125;
	            this.match(hclParser.T__17);
	            this.state = 126;
	            this.object();
	            this.state = 127;
	            this.match(hclParser.T__14);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, hclParser.RULE_object);
	    var _la = 0; // Token type
	    try {
	        this.state = 141;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 131;
	            this.match(hclParser.T__4);
	            this.state = 132;
	            this.match(hclParser.T__5);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.match(hclParser.T__4);
	            this.state = 135; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 134;
	                this.field();
	                this.state = 137; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===hclParser.IDENTIFIER);
	            this.state = 139;
	            this.match(hclParser.T__5);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, hclParser.RULE_field);
	    try {
	        this.state = 148;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            this.match(hclParser.IDENTIFIER);
	            this.state = 144;
	            this.match(hclParser.T__8);
	            this.state = 145;
	            this.expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 146;
	            this.match(hclParser.IDENTIFIER);
	            this.state = 147;
	            this.object();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDescription() {
	    let localctx = new VariableDescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, hclParser.RULE_variableDescription);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(hclParser.T__9);
	        this.state = 151;
	        this.match(hclParser.T__8);
	        this.state = 152;
	        this.match(hclParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDefault() {
	    let localctx = new VariableDefaultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, hclParser.RULE_variableDefault);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(hclParser.T__18);
	        this.state = 155;
	        this.match(hclParser.T__8);
	        this.state = 156;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, hclParser.RULE_expression);
	    try {
	        this.state = 164;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case hclParser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 158;
	            this.match(hclParser.STRING);
	            break;
	        case hclParser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 159;
	            this.match(hclParser.NUMBER);
	            break;
	        case hclParser.BOOLEAN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 160;
	            this.match(hclParser.BOOLEAN);
	            break;
	        case hclParser.T__21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 161;
	            this.array();
	            break;
	        case hclParser.T__4:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 162;
	            this.object();
	            break;
	        case hclParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 163;
	            this.complexExpression(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, hclParser.RULE_functionCall);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(hclParser.IDENTIFIER);
	        this.state = 167;
	        this.match(hclParser.T__17);
	        this.state = 168;
	        this.expression();
	        this.state = 173;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 169;
	                this.match(hclParser.T__19);
	                this.state = 170;
	                this.expression(); 
	            }
	            this.state = 175;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===hclParser.T__19) {
	            this.state = 176;
	            this.match(hclParser.T__19);
	        }

	        this.state = 179;
	        this.match(hclParser.T__14);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	complexExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ComplexExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 40;
	    this.enterRecursionRule(localctx, 40, hclParser.RULE_complexExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 182;
	            this.match(hclParser.IDENTIFIER);
	            break;

	        case 2:
	            this.state = 183;
	            this.functionCall();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 199;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 197;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ComplexExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, hclParser.RULE_complexExpression);
	                    this.state = 186;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 187;
	                    this.match(hclParser.T__20);
	                    this.state = 188;
	                    this.complexExpression(5);
	                    break;

	                case 2:
	                    localctx = new ComplexExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, hclParser.RULE_complexExpression);
	                    this.state = 189;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 190;
	                    this.match(hclParser.T__21);
	                    this.state = 191;
	                    this.index();
	                    this.state = 192;
	                    this.match(hclParser.T__22);
	                    break;

	                case 3:
	                    localctx = new ComplexExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, hclParser.RULE_complexExpression);
	                    this.state = 194;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 195;
	                    this.match(hclParser.T__20);
	                    this.state = 196;
	                    this.index();
	                    break;

	                } 
	            }
	            this.state = 201;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, hclParser.RULE_array);
	    var _la = 0; // Token type
	    try {
	        this.state = 218;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            this.match(hclParser.T__21);
	            this.state = 203;
	            this.match(hclParser.T__22);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 204;
	            this.match(hclParser.T__21);
	            this.state = 205;
	            this.expression();
	            this.state = 210;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 206;
	                    this.match(hclParser.T__19);
	                    this.state = 207;
	                    this.expression(); 
	                }
	                this.state = 212;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	            }

	            this.state = 214;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===hclParser.T__19) {
	                this.state = 213;
	                this.match(hclParser.T__19);
	            }

	            this.state = 216;
	            this.match(hclParser.T__22);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	index() {
	    let localctx = new IndexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, hclParser.RULE_index);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        _la = this._input.LA(1);
	        if(!(_la===hclParser.T__23 || _la===hclParser.NUMBER)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

hclParser.EOF = antlr4.Token.EOF;
hclParser.T__0 = 1;
hclParser.T__1 = 2;
hclParser.T__2 = 3;
hclParser.T__3 = 4;
hclParser.T__4 = 5;
hclParser.T__5 = 6;
hclParser.T__6 = 7;
hclParser.T__7 = 8;
hclParser.T__8 = 9;
hclParser.T__9 = 10;
hclParser.T__10 = 11;
hclParser.T__11 = 12;
hclParser.T__12 = 13;
hclParser.T__13 = 14;
hclParser.T__14 = 15;
hclParser.T__15 = 16;
hclParser.T__16 = 17;
hclParser.T__17 = 18;
hclParser.T__18 = 19;
hclParser.T__19 = 20;
hclParser.T__20 = 21;
hclParser.T__21 = 22;
hclParser.T__22 = 23;
hclParser.T__23 = 24;
hclParser.BOOLEAN = 25;
hclParser.TYPE = 26;
hclParser.IDENTIFIER = 27;
hclParser.STRING = 28;
hclParser.NUMBER = 29;
hclParser.COMMENT = 30;
hclParser.LINE_COMMENT = 31;
hclParser.HAS_COMMENT = 32;
hclParser.WS = 33;

hclParser.RULE_file = 0;
hclParser.RULE_directive = 1;
hclParser.RULE_providerDirective = 2;
hclParser.RULE_terraformDirective = 3;
hclParser.RULE_resourceDirective = 4;
hclParser.RULE_variableDirective = 5;
hclParser.RULE_variableBlock = 6;
hclParser.RULE_outputDirective = 7;
hclParser.RULE_outputBlock = 8;
hclParser.RULE_outputValue = 9;
hclParser.RULE_outputDescription = 10;
hclParser.RULE_outputSensitive = 11;
hclParser.RULE_variableType = 12;
hclParser.RULE_type = 13;
hclParser.RULE_object = 14;
hclParser.RULE_field = 15;
hclParser.RULE_variableDescription = 16;
hclParser.RULE_variableDefault = 17;
hclParser.RULE_expression = 18;
hclParser.RULE_functionCall = 19;
hclParser.RULE_complexExpression = 20;
hclParser.RULE_array = 21;
hclParser.RULE_index = 22;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_file;
    }

	directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DirectiveContext);
	    } else {
	        return this.getTypedRuleContext(DirectiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitFile(this);
		}
	}


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_directive;
    }

	providerDirective() {
	    return this.getTypedRuleContext(ProviderDirectiveContext,0);
	};

	terraformDirective() {
	    return this.getTypedRuleContext(TerraformDirectiveContext,0);
	};

	resourceDirective() {
	    return this.getTypedRuleContext(ResourceDirectiveContext,0);
	};

	variableDirective() {
	    return this.getTypedRuleContext(VariableDirectiveContext,0);
	};

	outputDirective() {
	    return this.getTypedRuleContext(OutputDirectiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitDirective(this);
		}
	}


}



class ProviderDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_providerDirective;
    }

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterProviderDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitProviderDirective(this);
		}
	}


}



class TerraformDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_terraformDirective;
    }

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterTerraformDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitTerraformDirective(this);
		}
	}


}



class ResourceDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_resourceDirective;
    }

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(hclParser.STRING);
	    } else {
	        return this.getToken(hclParser.STRING, i);
	    }
	};


	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterResourceDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitResourceDirective(this);
		}
	}


}



class VariableDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_variableDirective;
    }

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	variableBlock() {
	    return this.getTypedRuleContext(VariableBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterVariableDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitVariableDirective(this);
		}
	}


}



class VariableBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_variableBlock;
    }

	variableType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableTypeContext);
	    } else {
	        return this.getTypedRuleContext(VariableTypeContext,i);
	    }
	};

	variableDescription = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDescriptionContext);
	    } else {
	        return this.getTypedRuleContext(VariableDescriptionContext,i);
	    }
	};

	variableDefault = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDefaultContext);
	    } else {
	        return this.getTypedRuleContext(VariableDefaultContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterVariableBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitVariableBlock(this);
		}
	}


}



class OutputDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_outputDirective;
    }

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	outputBlock() {
	    return this.getTypedRuleContext(OutputBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterOutputDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitOutputDirective(this);
		}
	}


}



class OutputBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_outputBlock;
    }

	outputValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OutputValueContext);
	    } else {
	        return this.getTypedRuleContext(OutputValueContext,i);
	    }
	};

	outputDescription = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OutputDescriptionContext);
	    } else {
	        return this.getTypedRuleContext(OutputDescriptionContext,i);
	    }
	};

	outputSensitive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OutputSensitiveContext);
	    } else {
	        return this.getTypedRuleContext(OutputSensitiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterOutputBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitOutputBlock(this);
		}
	}


}



class OutputValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_outputValue;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterOutputValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitOutputValue(this);
		}
	}


}



class OutputDescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_outputDescription;
    }

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterOutputDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitOutputDescription(this);
		}
	}


}



class OutputSensitiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_outputSensitive;
    }

	BOOLEAN() {
	    return this.getToken(hclParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterOutputSensitive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitOutputSensitive(this);
		}
	}


}



class VariableTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_variableType;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterVariableType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitVariableType(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_type;
    }

	TYPE() {
	    return this.getToken(hclParser.TYPE, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitType(this);
		}
	}


}



class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_object;
    }

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitObject(this);
		}
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_field;
    }

	IDENTIFIER() {
	    return this.getToken(hclParser.IDENTIFIER, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitField(this);
		}
	}


}



class VariableDescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_variableDescription;
    }

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterVariableDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitVariableDescription(this);
		}
	}


}



class VariableDefaultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_variableDefault;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterVariableDefault(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitVariableDefault(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_expression;
    }

	STRING() {
	    return this.getToken(hclParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(hclParser.NUMBER, 0);
	};

	BOOLEAN() {
	    return this.getToken(hclParser.BOOLEAN, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	complexExpression() {
	    return this.getTypedRuleContext(ComplexExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitExpression(this);
		}
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_functionCall;
    }

	IDENTIFIER() {
	    return this.getToken(hclParser.IDENTIFIER, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitFunctionCall(this);
		}
	}


}



class ComplexExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_complexExpression;
    }

	IDENTIFIER() {
	    return this.getToken(hclParser.IDENTIFIER, 0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	complexExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComplexExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ComplexExpressionContext,i);
	    }
	};

	index() {
	    return this.getTypedRuleContext(IndexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterComplexExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitComplexExpression(this);
		}
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_array;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitArray(this);
		}
	}


}



class IndexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = hclParser.RULE_index;
    }

	NUMBER() {
	    return this.getToken(hclParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.enterIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof hclListener ) {
	        listener.exitIndex(this);
		}
	}


}




hclParser.FileContext = FileContext; 
hclParser.DirectiveContext = DirectiveContext; 
hclParser.ProviderDirectiveContext = ProviderDirectiveContext; 
hclParser.TerraformDirectiveContext = TerraformDirectiveContext; 
hclParser.ResourceDirectiveContext = ResourceDirectiveContext; 
hclParser.VariableDirectiveContext = VariableDirectiveContext; 
hclParser.VariableBlockContext = VariableBlockContext; 
hclParser.OutputDirectiveContext = OutputDirectiveContext; 
hclParser.OutputBlockContext = OutputBlockContext; 
hclParser.OutputValueContext = OutputValueContext; 
hclParser.OutputDescriptionContext = OutputDescriptionContext; 
hclParser.OutputSensitiveContext = OutputSensitiveContext; 
hclParser.VariableTypeContext = VariableTypeContext; 
hclParser.TypeContext = TypeContext; 
hclParser.ObjectContext = ObjectContext; 
hclParser.FieldContext = FieldContext; 
hclParser.VariableDescriptionContext = VariableDescriptionContext; 
hclParser.VariableDefaultContext = VariableDefaultContext; 
hclParser.ExpressionContext = ExpressionContext; 
hclParser.FunctionCallContext = FunctionCallContext; 
hclParser.ComplexExpressionContext = ComplexExpressionContext; 
hclParser.ArrayContext = ArrayContext; 
hclParser.IndexContext = IndexContext; 
