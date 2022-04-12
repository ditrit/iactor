// Generated from c:\Users\nolwe\Documents\Stage\test_antlr\hcl\schemas\hclLexer.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class hclLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		MODULE=1, PROVIDER=2, TERRAFORM=3, CLOUD=4, BACKEND=5, VERSION=6, PROVIDERS=7, 
		RESOURCE=8, VARIABLE=9, OUTPUT=10, VALUE=11, DESCRIPTION=12, DEPENDSON=13, 
		SENSITIVE=14, VARIABLETYPE=15, NULLABLE=16, LIST=17, MAP=18, OBJECT=19, 
		DEFAULT=20, VALIDATION=21, CONDITION=22, ERROR=23, AO=24, AF=25, EQUAL=26, 
		PO=27, PF=28, CO=29, CF=30, VIRG=31, POINT=32, TIRET=33, MULT=34, BOOLEANOP=35, 
		BOOLEAN=36, TYPE=37, IDENTIFIER=38, STRING=39, NUMBER=40, COMMENT=41, 
		LINE_COMMENT=42, HAS_COMMENT=43, WS=44, OPEN=45, IDENTIFIERS=46, WSS=47, 
		NUMBERS=48, AUTRE=49, CLOSE=50;
	public static final int
		SCRIPT=1;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "SCRIPT"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"MODULE", "PROVIDER", "TERRAFORM", "CLOUD", "BACKEND", "VERSION", "PROVIDERS", 
			"RESOURCE", "VARIABLE", "OUTPUT", "VALUE", "DESCRIPTION", "DEPENDSON", 
			"SENSITIVE", "VARIABLETYPE", "NULLABLE", "LIST", "MAP", "OBJECT", "DEFAULT", 
			"VALIDATION", "CONDITION", "ERROR", "AO", "AF", "EQUAL", "PO", "PF", 
			"CO", "CF", "VIRG", "POINT", "TIRET", "MULT", "BOOLEANOP", "BOOLEAN", 
			"TYPE", "IDENTIFIER", "LetterOrDigit", "Letter", "STRING", "ESC", "UNICODE", 
			"HEX", "SAFECODEPOINT", "NUMBER", "COMMENT", "LINE_COMMENT", "HAS_COMMENT", 
			"WS", "OPEN", "IDENTIFIERS", "WSS", "HEXS", "SAFECODEPOINTS", "NUMBERS", 
			"AUTRE", "CLOSE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'module'", "'provider'", "'terraform'", "'cloud'", "'backend'", 
			"'required_version'", "'required_providers'", "'resource'", "'variable'", 
			"'output'", "'value'", "'description'", "'depends_on'", "'sensitive'", 
			"'type'", "'nullable'", "'list'", "'map'", "'object'", "'default'", "'validation'", 
			"'condition'", "'error_message'", "'{'", "'}'", "'='", "'('", "')'", 
			"'['", "']'", "','", "'.'", "'-'", "'*'", null, null, null, null, null, 
			null, null, null, null, null, "'<<EOF'", null, null, null, null, "'EOF'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MODULE", "PROVIDER", "TERRAFORM", "CLOUD", "BACKEND", "VERSION", 
			"PROVIDERS", "RESOURCE", "VARIABLE", "OUTPUT", "VALUE", "DESCRIPTION", 
			"DEPENDSON", "SENSITIVE", "VARIABLETYPE", "NULLABLE", "LIST", "MAP", 
			"OBJECT", "DEFAULT", "VALIDATION", "CONDITION", "ERROR", "AO", "AF", 
			"EQUAL", "PO", "PF", "CO", "CF", "VIRG", "POINT", "TIRET", "MULT", "BOOLEANOP", 
			"BOOLEAN", "TYPE", "IDENTIFIER", "STRING", "NUMBER", "COMMENT", "LINE_COMMENT", 
			"HAS_COMMENT", "WS", "OPEN", "IDENTIFIERS", "WSS", "NUMBERS", "AUTRE", 
			"CLOSE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public hclLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "hclLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\64\u0226\b\1\b\1"+
		"\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t"+
		"\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4"+
		"\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4"+
		"\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4"+
		" \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4"+
		"+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4"+
		"\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\3\2\3\2"+
		"\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\24"+
		"\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25"+
		"\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34"+
		"\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3"+
		"$\3$\3$\3$\3$\5$\u016b\n$\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3"+
		"%\3%\3%\3%\3%\3%\3%\3%\5%\u0183\n%\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3"+
		"&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3&\3"+
		"&\3&\3&\3&\3&\3&\3&\5&\u01ae\n&\3\'\3\'\7\'\u01b2\n\'\f\'\16\'\u01b5\13"+
		"\'\3(\3(\5(\u01b9\n(\3)\3)\3)\3)\5)\u01bf\n)\3*\3*\3*\7*\u01c4\n*\f*\16"+
		"*\u01c7\13*\3*\3*\3+\3+\3+\5+\u01ce\n+\3,\3,\3,\3,\3,\3,\3-\3-\3.\3.\3"+
		"/\3/\3/\7/\u01dd\n/\f/\16/\u01e0\13/\5/\u01e2\n/\3\60\3\60\3\60\3\60\7"+
		"\60\u01e8\n\60\f\60\16\60\u01eb\13\60\3\60\3\60\3\60\3\60\3\60\3\61\3"+
		"\61\3\61\3\61\7\61\u01f6\n\61\f\61\16\61\u01f9\13\61\3\61\3\61\3\62\3"+
		"\62\7\62\u01ff\n\62\f\62\16\62\u0202\13\62\3\62\3\62\3\63\6\63\u0207\n"+
		"\63\r\63\16\63\u0208\3\63\3\63\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64"+
		"\3\65\3\65\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3;\3;\3;\3;\3\u01e9"+
		"\2<\4\3\6\4\b\5\n\6\f\7\16\b\20\t\22\n\24\13\26\f\30\r\32\16\34\17\36"+
		"\20 \21\"\22$\23&\24(\25*\26,\27.\30\60\31\62\32\64\33\66\348\35:\36<"+
		"\37> @!B\"D#F$H%J&L\'N(P\2R\2T)V\2X\2Z\2\\\2^*`+b,d-f.h/j\60l\61n\2p\2"+
		"r\62t\63v\64\4\2\3\21\6\2((>>@@~~\4\2--\61\61\3\2\62;\7\2&&\60\60C\\a"+
		"ac|\4\2\2\u0081\ud802\udc01\3\2\ud802\udc01\3\2\udc02\ue001\n\2$$\61\61"+
		"^^ddhhppttvv\5\2\62;CHch\5\2\2!$$^^\3\2\63;\4\2\f\f\17\17\5\2\13\f\17"+
		"\17\"\"\3\2c|\b\2#&/\61??aa}}\177\177\2\u0237\2\4\3\2\2\2\2\6\3\2\2\2"+
		"\2\b\3\2\2\2\2\n\3\2\2\2\2\f\3\2\2\2\2\16\3\2\2\2\2\20\3\2\2\2\2\22\3"+
		"\2\2\2\2\24\3\2\2\2\2\26\3\2\2\2\2\30\3\2\2\2\2\32\3\2\2\2\2\34\3\2\2"+
		"\2\2\36\3\2\2\2\2 \3\2\2\2\2\"\3\2\2\2\2$\3\2\2\2\2&\3\2\2\2\2(\3\2\2"+
		"\2\2*\3\2\2\2\2,\3\2\2\2\2.\3\2\2\2\2\60\3\2\2\2\2\62\3\2\2\2\2\64\3\2"+
		"\2\2\2\66\3\2\2\2\28\3\2\2\2\2:\3\2\2\2\2<\3\2\2\2\2>\3\2\2\2\2@\3\2\2"+
		"\2\2B\3\2\2\2\2D\3\2\2\2\2F\3\2\2\2\2H\3\2\2\2\2J\3\2\2\2\2L\3\2\2\2\2"+
		"N\3\2\2\2\2T\3\2\2\2\2^\3\2\2\2\2`\3\2\2\2\2b\3\2\2\2\2d\3\2\2\2\2f\3"+
		"\2\2\2\2h\3\2\2\2\3j\3\2\2\2\3l\3\2\2\2\3r\3\2\2\2\3t\3\2\2\2\3v\3\2\2"+
		"\2\4x\3\2\2\2\6\177\3\2\2\2\b\u0088\3\2\2\2\n\u0092\3\2\2\2\f\u0098\3"+
		"\2\2\2\16\u00a0\3\2\2\2\20\u00b1\3\2\2\2\22\u00c4\3\2\2\2\24\u00cd\3\2"+
		"\2\2\26\u00d6\3\2\2\2\30\u00dd\3\2\2\2\32\u00e3\3\2\2\2\34\u00ef\3\2\2"+
		"\2\36\u00fa\3\2\2\2 \u0104\3\2\2\2\"\u0109\3\2\2\2$\u0112\3\2\2\2&\u0117"+
		"\3\2\2\2(\u011b\3\2\2\2*\u0122\3\2\2\2,\u012a\3\2\2\2.\u0135\3\2\2\2\60"+
		"\u013f\3\2\2\2\62\u014d\3\2\2\2\64\u014f\3\2\2\2\66\u0151\3\2\2\28\u0153"+
		"\3\2\2\2:\u0155\3\2\2\2<\u0157\3\2\2\2>\u0159\3\2\2\2@\u015b\3\2\2\2B"+
		"\u015d\3\2\2\2D\u015f\3\2\2\2F\u0161\3\2\2\2H\u016a\3\2\2\2J\u0182\3\2"+
		"\2\2L\u01ad\3\2\2\2N\u01af\3\2\2\2P\u01b8\3\2\2\2R\u01be\3\2\2\2T\u01c0"+
		"\3\2\2\2V\u01ca\3\2\2\2X\u01cf\3\2\2\2Z\u01d5\3\2\2\2\\\u01d7\3\2\2\2"+
		"^\u01e1\3\2\2\2`\u01e3\3\2\2\2b\u01f1\3\2\2\2d\u01fc\3\2\2\2f\u0206\3"+
		"\2\2\2h\u020c\3\2\2\2j\u0214\3\2\2\2l\u0216\3\2\2\2n\u0218\3\2\2\2p\u021a"+
		"\3\2\2\2r\u021c\3\2\2\2t\u021e\3\2\2\2v\u0220\3\2\2\2xy\7o\2\2yz\7q\2"+
		"\2z{\7f\2\2{|\7w\2\2|}\7n\2\2}~\7g\2\2~\5\3\2\2\2\177\u0080\7r\2\2\u0080"+
		"\u0081\7t\2\2\u0081\u0082\7q\2\2\u0082\u0083\7x\2\2\u0083\u0084\7k\2\2"+
		"\u0084\u0085\7f\2\2\u0085\u0086\7g\2\2\u0086\u0087\7t\2\2\u0087\7\3\2"+
		"\2\2\u0088\u0089\7v\2\2\u0089\u008a\7g\2\2\u008a\u008b\7t\2\2\u008b\u008c"+
		"\7t\2\2\u008c\u008d\7c\2\2\u008d\u008e\7h\2\2\u008e\u008f\7q\2\2\u008f"+
		"\u0090\7t\2\2\u0090\u0091\7o\2\2\u0091\t\3\2\2\2\u0092\u0093\7e\2\2\u0093"+
		"\u0094\7n\2\2\u0094\u0095\7q\2\2\u0095\u0096\7w\2\2\u0096\u0097\7f\2\2"+
		"\u0097\13\3\2\2\2\u0098\u0099\7d\2\2\u0099\u009a\7c\2\2\u009a\u009b\7"+
		"e\2\2\u009b\u009c\7m\2\2\u009c\u009d\7g\2\2\u009d\u009e\7p\2\2\u009e\u009f"+
		"\7f\2\2\u009f\r\3\2\2\2\u00a0\u00a1\7t\2\2\u00a1\u00a2\7g\2\2\u00a2\u00a3"+
		"\7s\2\2\u00a3\u00a4\7w\2\2\u00a4\u00a5\7k\2\2\u00a5\u00a6\7t\2\2\u00a6"+
		"\u00a7\7g\2\2\u00a7\u00a8\7f\2\2\u00a8\u00a9\7a\2\2\u00a9\u00aa\7x\2\2"+
		"\u00aa\u00ab\7g\2\2\u00ab\u00ac\7t\2\2\u00ac\u00ad\7u\2\2\u00ad\u00ae"+
		"\7k\2\2\u00ae\u00af\7q\2\2\u00af\u00b0\7p\2\2\u00b0\17\3\2\2\2\u00b1\u00b2"+
		"\7t\2\2\u00b2\u00b3\7g\2\2\u00b3\u00b4\7s\2\2\u00b4\u00b5\7w\2\2\u00b5"+
		"\u00b6\7k\2\2\u00b6\u00b7\7t\2\2\u00b7\u00b8\7g\2\2\u00b8\u00b9\7f\2\2"+
		"\u00b9\u00ba\7a\2\2\u00ba\u00bb\7r\2\2\u00bb\u00bc\7t\2\2\u00bc\u00bd"+
		"\7q\2\2\u00bd\u00be\7x\2\2\u00be\u00bf\7k\2\2\u00bf\u00c0\7f\2\2\u00c0"+
		"\u00c1\7g\2\2\u00c1\u00c2\7t\2\2\u00c2\u00c3\7u\2\2\u00c3\21\3\2\2\2\u00c4"+
		"\u00c5\7t\2\2\u00c5\u00c6\7g\2\2\u00c6\u00c7\7u\2\2\u00c7\u00c8\7q\2\2"+
		"\u00c8\u00c9\7w\2\2\u00c9\u00ca\7t\2\2\u00ca\u00cb\7e\2\2\u00cb\u00cc"+
		"\7g\2\2\u00cc\23\3\2\2\2\u00cd\u00ce\7x\2\2\u00ce\u00cf\7c\2\2\u00cf\u00d0"+
		"\7t\2\2\u00d0\u00d1\7k\2\2\u00d1\u00d2\7c\2\2\u00d2\u00d3\7d\2\2\u00d3"+
		"\u00d4\7n\2\2\u00d4\u00d5\7g\2\2\u00d5\25\3\2\2\2\u00d6\u00d7\7q\2\2\u00d7"+
		"\u00d8\7w\2\2\u00d8\u00d9\7v\2\2\u00d9\u00da\7r\2\2\u00da\u00db\7w\2\2"+
		"\u00db\u00dc\7v\2\2\u00dc\27\3\2\2\2\u00dd\u00de\7x\2\2\u00de\u00df\7"+
		"c\2\2\u00df\u00e0\7n\2\2\u00e0\u00e1\7w\2\2\u00e1\u00e2\7g\2\2\u00e2\31"+
		"\3\2\2\2\u00e3\u00e4\7f\2\2\u00e4\u00e5\7g\2\2\u00e5\u00e6\7u\2\2\u00e6"+
		"\u00e7\7e\2\2\u00e7\u00e8\7t\2\2\u00e8\u00e9\7k\2\2\u00e9\u00ea\7r\2\2"+
		"\u00ea\u00eb\7v\2\2\u00eb\u00ec\7k\2\2\u00ec\u00ed\7q\2\2\u00ed\u00ee"+
		"\7p\2\2\u00ee\33\3\2\2\2\u00ef\u00f0\7f\2\2\u00f0\u00f1\7g\2\2\u00f1\u00f2"+
		"\7r\2\2\u00f2\u00f3\7g\2\2\u00f3\u00f4\7p\2\2\u00f4\u00f5\7f\2\2\u00f5"+
		"\u00f6\7u\2\2\u00f6\u00f7\7a\2\2\u00f7\u00f8\7q\2\2\u00f8\u00f9\7p\2\2"+
		"\u00f9\35\3\2\2\2\u00fa\u00fb\7u\2\2\u00fb\u00fc\7g\2\2\u00fc\u00fd\7"+
		"p\2\2\u00fd\u00fe\7u\2\2\u00fe\u00ff\7k\2\2\u00ff\u0100\7v\2\2\u0100\u0101"+
		"\7k\2\2\u0101\u0102\7x\2\2\u0102\u0103\7g\2\2\u0103\37\3\2\2\2\u0104\u0105"+
		"\7v\2\2\u0105\u0106\7{\2\2\u0106\u0107\7r\2\2\u0107\u0108\7g\2\2\u0108"+
		"!\3\2\2\2\u0109\u010a\7p\2\2\u010a\u010b\7w\2\2\u010b\u010c\7n\2\2\u010c"+
		"\u010d\7n\2\2\u010d\u010e\7c\2\2\u010e\u010f\7d\2\2\u010f\u0110\7n\2\2"+
		"\u0110\u0111\7g\2\2\u0111#\3\2\2\2\u0112\u0113\7n\2\2\u0113\u0114\7k\2"+
		"\2\u0114\u0115\7u\2\2\u0115\u0116\7v\2\2\u0116%\3\2\2\2\u0117\u0118\7"+
		"o\2\2\u0118\u0119\7c\2\2\u0119\u011a\7r\2\2\u011a\'\3\2\2\2\u011b\u011c"+
		"\7q\2\2\u011c\u011d\7d\2\2\u011d\u011e\7l\2\2\u011e\u011f\7g\2\2\u011f"+
		"\u0120\7e\2\2\u0120\u0121\7v\2\2\u0121)\3\2\2\2\u0122\u0123\7f\2\2\u0123"+
		"\u0124\7g\2\2\u0124\u0125\7h\2\2\u0125\u0126\7c\2\2\u0126\u0127\7w\2\2"+
		"\u0127\u0128\7n\2\2\u0128\u0129\7v\2\2\u0129+\3\2\2\2\u012a\u012b\7x\2"+
		"\2\u012b\u012c\7c\2\2\u012c\u012d\7n\2\2\u012d\u012e\7k\2\2\u012e\u012f"+
		"\7f\2\2\u012f\u0130\7c\2\2\u0130\u0131\7v\2\2\u0131\u0132\7k\2\2\u0132"+
		"\u0133\7q\2\2\u0133\u0134\7p\2\2\u0134-\3\2\2\2\u0135\u0136\7e\2\2\u0136"+
		"\u0137\7q\2\2\u0137\u0138\7p\2\2\u0138\u0139\7f\2\2\u0139\u013a\7k\2\2"+
		"\u013a\u013b\7v\2\2\u013b\u013c\7k\2\2\u013c\u013d\7q\2\2\u013d\u013e"+
		"\7p\2\2\u013e/\3\2\2\2\u013f\u0140\7g\2\2\u0140\u0141\7t\2\2\u0141\u0142"+
		"\7t\2\2\u0142\u0143\7q\2\2\u0143\u0144\7t\2\2\u0144\u0145\7a\2\2\u0145"+
		"\u0146\7o\2\2\u0146\u0147\7g\2\2\u0147\u0148\7u\2\2\u0148\u0149\7u\2\2"+
		"\u0149\u014a\7c\2\2\u014a\u014b\7i\2\2\u014b\u014c\7g\2\2\u014c\61\3\2"+
		"\2\2\u014d\u014e\7}\2\2\u014e\63\3\2\2\2\u014f\u0150\7\177\2\2\u0150\65"+
		"\3\2\2\2\u0151\u0152\7?\2\2\u0152\67\3\2\2\2\u0153\u0154\7*\2\2\u0154"+
		"9\3\2\2\2\u0155\u0156\7+\2\2\u0156;\3\2\2\2\u0157\u0158\7]\2\2\u0158="+
		"\3\2\2\2\u0159\u015a\7_\2\2\u015a?\3\2\2\2\u015b\u015c\7.\2\2\u015cA\3"+
		"\2\2\2\u015d\u015e\7\60\2\2\u015eC\3\2\2\2\u015f\u0160\7/\2\2\u0160E\3"+
		"\2\2\2\u0161\u0162\7,\2\2\u0162G\3\2\2\2\u0163\u016b\t\2\2\2\u0164\u016b"+
		"\5\66\33\2\u0165\u0166\7?\2\2\u0166\u016b\7?\2\2\u0167\u016b\5F#\2\u0168"+
		"\u016b\5D\"\2\u0169\u016b\t\3\2\2\u016a\u0163\3\2\2\2\u016a\u0164\3\2"+
		"\2\2\u016a\u0165\3\2\2\2\u016a\u0167\3\2\2\2\u016a\u0168\3\2\2\2\u016a"+
		"\u0169\3\2\2\2\u016bI\3\2\2\2\u016c\u016d\7v\2\2\u016d\u016e\7t\2\2\u016e"+
		"\u016f\7w\2\2\u016f\u0183\7g\2\2\u0170\u0171\7$\2\2\u0171\u0172\7v\2\2"+
		"\u0172\u0173\7t\2\2\u0173\u0174\7w\2\2\u0174\u0175\7g\2\2\u0175\u0183"+
		"\7$\2\2\u0176\u0177\7h\2\2\u0177\u0178\7c\2\2\u0178\u0179\7n\2\2\u0179"+
		"\u017a\7u\2\2\u017a\u0183\7g\2\2\u017b\u017c\7$\2\2\u017c\u017d\7h\2\2"+
		"\u017d\u017e\7c\2\2\u017e\u017f\7n\2\2\u017f\u0180\7u\2\2\u0180\u0181"+
		"\7g\2\2\u0181\u0183\7$\2\2\u0182\u016c\3\2\2\2\u0182\u0170\3\2\2\2\u0182"+
		"\u0176\3\2\2\2\u0182\u017b\3\2\2\2\u0183K\3\2\2\2\u0184\u0185\7u\2\2\u0185"+
		"\u0186\7v\2\2\u0186\u0187\7t\2\2\u0187\u0188\7k\2\2\u0188\u0189\7p\2\2"+
		"\u0189\u01ae\7i\2\2\u018a\u018b\7$\2\2\u018b\u018c\7u\2\2\u018c\u018d"+
		"\7v\2\2\u018d\u018e\7t\2\2\u018e\u018f\7k\2\2\u018f\u0190\7p\2\2\u0190"+
		"\u0191\7i\2\2\u0191\u01ae\7$\2\2\u0192\u0193\7p\2\2\u0193\u0194\7w\2\2"+
		"\u0194\u0195\7o\2\2\u0195\u0196\7d\2\2\u0196\u0197\7g\2\2\u0197\u01ae"+
		"\7t\2\2\u0198\u0199\7$\2\2\u0199\u019a\7p\2\2\u019a\u019b\7w\2\2\u019b"+
		"\u019c\7o\2\2\u019c\u019d\7d\2\2\u019d\u019e\7g\2\2\u019e\u019f\7t\2\2"+
		"\u019f\u01ae\7$\2\2\u01a0\u01a1\7d\2\2\u01a1\u01a2\7q\2\2\u01a2\u01a3"+
		"\7q\2\2\u01a3\u01ae\7n\2\2\u01a4\u01a5\7$\2\2\u01a5\u01a6\7d\2\2\u01a6"+
		"\u01a7\7q\2\2\u01a7\u01a8\7q\2\2\u01a8\u01a9\7n\2\2\u01a9\u01ae\7$\2\2"+
		"\u01aa\u01ab\7c\2\2\u01ab\u01ac\7p\2\2\u01ac\u01ae\7{\2\2\u01ad\u0184"+
		"\3\2\2\2\u01ad\u018a\3\2\2\2\u01ad\u0192\3\2\2\2\u01ad\u0198\3\2\2\2\u01ad"+
		"\u01a0\3\2\2\2\u01ad\u01a4\3\2\2\2\u01ad\u01aa\3\2\2\2\u01aeM\3\2\2\2"+
		"\u01af\u01b3\5R)\2\u01b0\u01b2\5P(\2\u01b1\u01b0\3\2\2\2\u01b2\u01b5\3"+
		"\2\2\2\u01b3\u01b1\3\2\2\2\u01b3\u01b4\3\2\2\2\u01b4O\3\2\2\2\u01b5\u01b3"+
		"\3\2\2\2\u01b6\u01b9\5R)\2\u01b7\u01b9\t\4\2\2\u01b8\u01b6\3\2\2\2\u01b8"+
		"\u01b7\3\2\2\2\u01b9Q\3\2\2\2\u01ba\u01bf\t\5\2\2\u01bb\u01bf\n\6\2\2"+
		"\u01bc\u01bd\t\7\2\2\u01bd\u01bf\t\b\2\2\u01be\u01ba\3\2\2\2\u01be\u01bb"+
		"\3\2\2\2\u01be\u01bc\3\2\2\2\u01bfS\3\2\2\2\u01c0\u01c5\7$\2\2\u01c1\u01c4"+
		"\5V+\2\u01c2\u01c4\5\\.\2\u01c3\u01c1\3\2\2\2\u01c3\u01c2\3\2\2\2\u01c4"+
		"\u01c7\3\2\2\2\u01c5\u01c3\3\2\2\2\u01c5\u01c6\3\2\2\2\u01c6\u01c8\3\2"+
		"\2\2\u01c7\u01c5\3\2\2\2\u01c8\u01c9\7$\2\2\u01c9U\3\2\2\2\u01ca\u01cd"+
		"\7^\2\2\u01cb\u01ce\t\t\2\2\u01cc\u01ce\5X,\2\u01cd\u01cb\3\2\2\2\u01cd"+
		"\u01cc\3\2\2\2\u01ceW\3\2\2\2\u01cf\u01d0\7w\2\2\u01d0\u01d1\5Z-\2\u01d1"+
		"\u01d2\5Z-\2\u01d2\u01d3\5Z-\2\u01d3\u01d4\5Z-\2\u01d4Y\3\2\2\2\u01d5"+
		"\u01d6\t\n\2\2\u01d6[\3\2\2\2\u01d7\u01d8\n\13\2\2\u01d8]\3\2\2\2\u01d9"+
		"\u01e2\7\62\2\2\u01da\u01de\t\f\2\2\u01db\u01dd\t\4\2\2\u01dc\u01db\3"+
		"\2\2\2\u01dd\u01e0\3\2\2\2\u01de\u01dc\3\2\2\2\u01de\u01df\3\2\2\2\u01df"+
		"\u01e2\3\2\2\2\u01e0\u01de\3\2\2\2\u01e1\u01d9\3\2\2\2\u01e1\u01da\3\2"+
		"\2\2\u01e2_\3\2\2\2\u01e3\u01e4\7\61\2\2\u01e4\u01e5\7,\2\2\u01e5\u01e9"+
		"\3\2\2\2\u01e6\u01e8\13\2\2\2\u01e7\u01e6\3\2\2\2\u01e8\u01eb\3\2\2\2"+
		"\u01e9\u01ea\3\2\2\2\u01e9\u01e7\3\2\2\2\u01ea\u01ec\3\2\2\2\u01eb\u01e9"+
		"\3\2\2\2\u01ec\u01ed\7,\2\2\u01ed\u01ee\7\61\2\2\u01ee\u01ef\3\2\2\2\u01ef"+
		"\u01f0\b\60\2\2\u01f0a\3\2\2\2\u01f1\u01f2\7\61\2\2\u01f2\u01f3\7\61\2"+
		"\2\u01f3\u01f7\3\2\2\2\u01f4\u01f6\n\r\2\2\u01f5\u01f4\3\2\2\2\u01f6\u01f9"+
		"\3\2\2\2\u01f7\u01f5\3\2\2\2\u01f7\u01f8\3\2\2\2\u01f8\u01fa\3\2\2\2\u01f9"+
		"\u01f7\3\2\2\2\u01fa\u01fb\b\61\2\2\u01fbc\3\2\2\2\u01fc\u0200\7%\2\2"+
		"\u01fd\u01ff\n\r\2\2\u01fe\u01fd\3\2\2\2\u01ff\u0202\3\2\2\2\u0200\u01fe"+
		"\3\2\2\2\u0200\u0201\3\2\2\2\u0201\u0203\3\2\2\2\u0202\u0200\3\2\2\2\u0203"+
		"\u0204\b\62\2\2\u0204e\3\2\2\2\u0205\u0207\t\16\2\2\u0206\u0205\3\2\2"+
		"\2\u0207\u0208\3\2\2\2\u0208\u0206\3\2\2\2\u0208\u0209\3\2\2\2\u0209\u020a"+
		"\3\2\2\2\u020a\u020b\b\63\2\2\u020bg\3\2\2\2\u020c\u020d\7>\2\2\u020d"+
		"\u020e\7>\2\2\u020e\u020f\7G\2\2\u020f\u0210\7Q\2\2\u0210\u0211\7H\2\2"+
		"\u0211\u0212\3\2\2\2\u0212\u0213\b\64\3\2\u0213i\3\2\2\2\u0214\u0215\t"+
		"\17\2\2\u0215k\3\2\2\2\u0216\u0217\5f\63\2\u0217m\3\2\2\2\u0218\u0219"+
		"\5Z-\2\u0219o\3\2\2\2\u021a\u021b\5\\.\2\u021bq\3\2\2\2\u021c\u021d\5"+
		"^/\2\u021ds\3\2\2\2\u021e\u021f\t\20\2\2\u021fu\3\2\2\2\u0220\u0221\7"+
		"G\2\2\u0221\u0222\7Q\2\2\u0222\u0223\7H\2\2\u0223\u0224\3\2\2\2\u0224"+
		"\u0225\b;\4\2\u0225w\3\2\2\2\23\2\3\u016a\u0182\u01ad\u01b3\u01b8\u01be"+
		"\u01c3\u01c5\u01cd\u01de\u01e1\u01e9\u01f7\u0200\u0208\5\2\3\2\7\3\2\6"+
		"\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}