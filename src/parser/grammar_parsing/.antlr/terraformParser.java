// Generated from c:\Users\nolwe\Documents\Stage\test_antlr\iactor\src\parser\grammar_parsing\terraformParser.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class terraformParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		MODULE=1, DATA=2, SOURCE=3, PROVIDER=4, TERRAFORM=5, RESOURCE=6, VARIABLE=7, 
		OUTPUT=8, LIST=9, MAP=10, OBJECT=11, CONDITION=12, ERROR=13, AO=14, AF=15, 
		EQUAL=16, PO=17, PF=18, CO=19, CF=20, VIRG=21, POINT=22, TIRET=23, MULT=24, 
		BOOLEANOP=25, BOOLEAN=26, TYPE=27, IDENTIFIER=28, STRING=29, NUMBER=30, 
		COMMENT=31, LINE_COMMENT=32, HAS_COMMENT=33, WS=34, OPEN=35, IDENTIFIERS=36, 
		WSS=37, NUMBERS=38, AUTRE=39, CLOSE=40;
	public static final int
		RULE_file = 0, RULE_directive = 1, RULE_dataDirective = 2, RULE_moduleDirective = 3, 
		RULE_moduleSource = 4, RULE_providerDirective = 5, RULE_terraformDirective = 6, 
		RULE_resourceDirective = 7, RULE_variableDirective = 8, RULE_outputDirective = 9, 
		RULE_name = 10, RULE_providerType = 11, RULE_type = 12, RULE_object = 13, 
		RULE_field = 14, RULE_complexField = 15, RULE_validation = 16, RULE_condition = 17, 
		RULE_expression = 18, RULE_functionCall = 19, RULE_complexExpression = 20, 
		RULE_array = 21, RULE_index = 22;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "directive", "dataDirective", "moduleDirective", "moduleSource", 
			"providerDirective", "terraformDirective", "resourceDirective", "variableDirective", 
			"outputDirective", "name", "providerType", "type", "object", "field", 
			"complexField", "validation", "condition", "expression", "functionCall", 
			"complexExpression", "array", "index"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'module'", "'data'", "'source'", "'provider'", "'terraform'", 
			"'resource'", "'variable'", "'output'", "'list'", "'map'", "'object'", 
			"'condition'", "'error_message'", "'{'", "'}'", "'='", "'('", "')'", 
			"'['", "']'", "','", "'.'", "'-'", "'*'", null, null, null, null, null, 
			null, null, null, null, null, "'<<EOF'", null, null, null, null, "'EOF'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MODULE", "DATA", "SOURCE", "PROVIDER", "TERRAFORM", "RESOURCE", 
			"VARIABLE", "OUTPUT", "LIST", "MAP", "OBJECT", "CONDITION", "ERROR", 
			"AO", "AF", "EQUAL", "PO", "PF", "CO", "CF", "VIRG", "POINT", "TIRET", 
			"MULT", "BOOLEANOP", "BOOLEAN", "TYPE", "IDENTIFIER", "STRING", "NUMBER", 
			"COMMENT", "LINE_COMMENT", "HAS_COMMENT", "WS", "OPEN", "IDENTIFIERS", 
			"WSS", "NUMBERS", "AUTRE", "CLOSE"
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

	@Override
	public String getGrammarFileName() { return "terraformParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public terraformParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class FileContext extends ParserRuleContext {
		public List<DirectiveContext> directive() {
			return getRuleContexts(DirectiveContext.class);
		}
		public DirectiveContext directive(int i) {
			return getRuleContext(DirectiveContext.class,i);
		}
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_file);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(47); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(46);
				directive();
				}
				}
				setState(49); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MODULE) | (1L << DATA) | (1L << PROVIDER) | (1L << TERRAFORM) | (1L << RESOURCE) | (1L << VARIABLE) | (1L << OUTPUT))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DirectiveContext extends ParserRuleContext {
		public ProviderDirectiveContext providerDirective() {
			return getRuleContext(ProviderDirectiveContext.class,0);
		}
		public TerraformDirectiveContext terraformDirective() {
			return getRuleContext(TerraformDirectiveContext.class,0);
		}
		public ResourceDirectiveContext resourceDirective() {
			return getRuleContext(ResourceDirectiveContext.class,0);
		}
		public VariableDirectiveContext variableDirective() {
			return getRuleContext(VariableDirectiveContext.class,0);
		}
		public OutputDirectiveContext outputDirective() {
			return getRuleContext(OutputDirectiveContext.class,0);
		}
		public ModuleDirectiveContext moduleDirective() {
			return getRuleContext(ModuleDirectiveContext.class,0);
		}
		public DataDirectiveContext dataDirective() {
			return getRuleContext(DataDirectiveContext.class,0);
		}
		public DirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_directive; }
	}

	public final DirectiveContext directive() throws RecognitionException {
		DirectiveContext _localctx = new DirectiveContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_directive);
		try {
			setState(58);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PROVIDER:
				enterOuterAlt(_localctx, 1);
				{
				setState(51);
				providerDirective();
				}
				break;
			case TERRAFORM:
				enterOuterAlt(_localctx, 2);
				{
				setState(52);
				terraformDirective();
				}
				break;
			case RESOURCE:
				enterOuterAlt(_localctx, 3);
				{
				setState(53);
				resourceDirective();
				}
				break;
			case VARIABLE:
				enterOuterAlt(_localctx, 4);
				{
				setState(54);
				variableDirective();
				}
				break;
			case OUTPUT:
				enterOuterAlt(_localctx, 5);
				{
				setState(55);
				outputDirective();
				}
				break;
			case MODULE:
				enterOuterAlt(_localctx, 6);
				{
				setState(56);
				moduleDirective();
				}
				break;
			case DATA:
				enterOuterAlt(_localctx, 7);
				{
				setState(57);
				dataDirective();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataDirectiveContext extends ParserRuleContext {
		public TerminalNode DATA() { return getToken(terraformParser.DATA, 0); }
		public ProviderTypeContext providerType() {
			return getRuleContext(ProviderTypeContext.class,0);
		}
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public TerminalNode AO() { return getToken(terraformParser.AO, 0); }
		public TerminalNode AF() { return getToken(terraformParser.AF, 0); }
		public List<ObjectContext> object() {
			return getRuleContexts(ObjectContext.class);
		}
		public ObjectContext object(int i) {
			return getRuleContext(ObjectContext.class,i);
		}
		public DataDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataDirective; }
	}

	public final DataDirectiveContext dataDirective() throws RecognitionException {
		DataDirectiveContext _localctx = new DataDirectiveContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_dataDirective);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(DATA);
			setState(61);
			providerType();
			setState(62);
			name();
			setState(63);
			match(AO);
			setState(65); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(64);
				object();
				}
				}
				setState(67); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==SOURCE || _la==IDENTIFIER );
			setState(69);
			match(AF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModuleDirectiveContext extends ParserRuleContext {
		public TerminalNode MODULE() { return getToken(terraformParser.MODULE, 0); }
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public TerminalNode AO() { return getToken(terraformParser.AO, 0); }
		public TerminalNode AF() { return getToken(terraformParser.AF, 0); }
		public List<ModuleSourceContext> moduleSource() {
			return getRuleContexts(ModuleSourceContext.class);
		}
		public ModuleSourceContext moduleSource(int i) {
			return getRuleContext(ModuleSourceContext.class,i);
		}
		public List<ObjectContext> object() {
			return getRuleContexts(ObjectContext.class);
		}
		public ObjectContext object(int i) {
			return getRuleContext(ObjectContext.class,i);
		}
		public ModuleDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleDirective; }
	}

	public final ModuleDirectiveContext moduleDirective() throws RecognitionException {
		ModuleDirectiveContext _localctx = new ModuleDirectiveContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_moduleDirective);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			match(MODULE);
			setState(72);
			name();
			setState(73);
			match(AO);
			setState(76); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(76);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
				case 1:
					{
					setState(74);
					moduleSource();
					}
					break;
				case 2:
					{
					setState(75);
					object();
					}
					break;
				}
				}
				setState(78); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==SOURCE || _la==IDENTIFIER );
			setState(80);
			match(AF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModuleSourceContext extends ParserRuleContext {
		public TerminalNode SOURCE() { return getToken(terraformParser.SOURCE, 0); }
		public TerminalNode EQUAL() { return getToken(terraformParser.EQUAL, 0); }
		public TerminalNode STRING() { return getToken(terraformParser.STRING, 0); }
		public ModuleSourceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleSource; }
	}

	public final ModuleSourceContext moduleSource() throws RecognitionException {
		ModuleSourceContext _localctx = new ModuleSourceContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_moduleSource);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			match(SOURCE);
			setState(83);
			match(EQUAL);
			setState(84);
			match(STRING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProviderDirectiveContext extends ParserRuleContext {
		public TerminalNode PROVIDER() { return getToken(terraformParser.PROVIDER, 0); }
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public TerminalNode AO() { return getToken(terraformParser.AO, 0); }
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public TerminalNode AF() { return getToken(terraformParser.AF, 0); }
		public ProviderDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_providerDirective; }
	}

	public final ProviderDirectiveContext providerDirective() throws RecognitionException {
		ProviderDirectiveContext _localctx = new ProviderDirectiveContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_providerDirective);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			match(PROVIDER);
			setState(87);
			name();
			setState(88);
			match(AO);
			setState(89);
			object();
			setState(90);
			match(AF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TerraformDirectiveContext extends ParserRuleContext {
		public TerminalNode TERRAFORM() { return getToken(terraformParser.TERRAFORM, 0); }
		public TerminalNode AO() { return getToken(terraformParser.AO, 0); }
		public TerminalNode AF() { return getToken(terraformParser.AF, 0); }
		public List<ObjectContext> object() {
			return getRuleContexts(ObjectContext.class);
		}
		public ObjectContext object(int i) {
			return getRuleContext(ObjectContext.class,i);
		}
		public TerraformDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_terraformDirective; }
	}

	public final TerraformDirectiveContext terraformDirective() throws RecognitionException {
		TerraformDirectiveContext _localctx = new TerraformDirectiveContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_terraformDirective);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			match(TERRAFORM);
			setState(93);
			match(AO);
			setState(95); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(94);
				object();
				}
				}
				setState(97); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==SOURCE || _la==IDENTIFIER );
			setState(99);
			match(AF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ResourceDirectiveContext extends ParserRuleContext {
		public TerminalNode RESOURCE() { return getToken(terraformParser.RESOURCE, 0); }
		public ProviderTypeContext providerType() {
			return getRuleContext(ProviderTypeContext.class,0);
		}
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public TerminalNode AO() { return getToken(terraformParser.AO, 0); }
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public TerminalNode AF() { return getToken(terraformParser.AF, 0); }
		public ResourceDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resourceDirective; }
	}

	public final ResourceDirectiveContext resourceDirective() throws RecognitionException {
		ResourceDirectiveContext _localctx = new ResourceDirectiveContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_resourceDirective);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			match(RESOURCE);
			setState(102);
			providerType();
			setState(103);
			name();
			setState(104);
			match(AO);
			setState(105);
			object();
			setState(106);
			match(AF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDirectiveContext extends ParserRuleContext {
		public TerminalNode VARIABLE() { return getToken(terraformParser.VARIABLE, 0); }
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public TerminalNode AO() { return getToken(terraformParser.AO, 0); }
		public TerminalNode AF() { return getToken(terraformParser.AF, 0); }
		public List<ObjectContext> object() {
			return getRuleContexts(ObjectContext.class);
		}
		public ObjectContext object(int i) {
			return getRuleContext(ObjectContext.class,i);
		}
		public VariableDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDirective; }
	}

	public final VariableDirectiveContext variableDirective() throws RecognitionException {
		VariableDirectiveContext _localctx = new VariableDirectiveContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_variableDirective);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			match(VARIABLE);
			setState(109);
			name();
			setState(110);
			match(AO);
			setState(112); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(111);
				object();
				}
				}
				setState(114); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==SOURCE || _la==IDENTIFIER );
			setState(116);
			match(AF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OutputDirectiveContext extends ParserRuleContext {
		public TerminalNode OUTPUT() { return getToken(terraformParser.OUTPUT, 0); }
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public TerminalNode AO() { return getToken(terraformParser.AO, 0); }
		public TerminalNode AF() { return getToken(terraformParser.AF, 0); }
		public List<ObjectContext> object() {
			return getRuleContexts(ObjectContext.class);
		}
		public ObjectContext object(int i) {
			return getRuleContext(ObjectContext.class,i);
		}
		public OutputDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_outputDirective; }
	}

	public final OutputDirectiveContext outputDirective() throws RecognitionException {
		OutputDirectiveContext _localctx = new OutputDirectiveContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_outputDirective);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			match(OUTPUT);
			setState(119);
			name();
			setState(120);
			match(AO);
			setState(122); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(121);
				object();
				}
				}
				setState(124); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==SOURCE || _la==IDENTIFIER );
			setState(126);
			match(AF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NameContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(terraformParser.STRING, 0); }
		public NameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_name; }
	}

	public final NameContext name() throws RecognitionException {
		NameContext _localctx = new NameContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			match(STRING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProviderTypeContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(terraformParser.STRING, 0); }
		public ProviderTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_providerType; }
	}

	public final ProviderTypeContext providerType() throws RecognitionException {
		ProviderTypeContext _localctx = new ProviderTypeContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_providerType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			match(STRING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public TerminalNode TYPE() { return getToken(terraformParser.TYPE, 0); }
		public TerminalNode LIST() { return getToken(terraformParser.LIST, 0); }
		public TerminalNode PO() { return getToken(terraformParser.PO, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode PF() { return getToken(terraformParser.PF, 0); }
		public TerminalNode MAP() { return getToken(terraformParser.MAP, 0); }
		public TerminalNode OBJECT() { return getToken(terraformParser.OBJECT, 0); }
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_type);
		try {
			setState(149);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(132);
				match(TYPE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(133);
				match(LIST);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(134);
				match(LIST);
				setState(135);
				match(PO);
				setState(136);
				type();
				setState(137);
				match(PF);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(139);
				match(MAP);
				setState(140);
				match(PO);
				setState(141);
				type();
				setState(142);
				match(PF);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(144);
				match(OBJECT);
				setState(145);
				match(PO);
				setState(146);
				object();
				setState(147);
				match(PF);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectContext extends ParserRuleContext {
		public List<ComplexFieldContext> complexField() {
			return getRuleContexts(ComplexFieldContext.class);
		}
		public ComplexFieldContext complexField(int i) {
			return getRuleContext(ComplexFieldContext.class,i);
		}
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public ObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object; }
	}

	public final ObjectContext object() throws RecognitionException {
		ObjectContext _localctx = new ObjectContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_object);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(153); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					setState(153);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						setState(151);
						complexField();
						}
						break;
					case 2:
						{
						setState(152);
						field();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(155); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldContext extends ParserRuleContext {
		public TerminalNode EQUAL() { return getToken(terraformParser.EQUAL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(terraformParser.IDENTIFIER, 0); }
		public TerminalNode SOURCE() { return getToken(terraformParser.SOURCE, 0); }
		public FieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field; }
	}

	public final FieldContext field() throws RecognitionException {
		FieldContext _localctx = new FieldContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_field);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			_la = _input.LA(1);
			if ( !(_la==SOURCE || _la==IDENTIFIER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(158);
			match(EQUAL);
			setState(159);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComplexFieldContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(terraformParser.IDENTIFIER, 0); }
		public TerminalNode AO() { return getToken(terraformParser.AO, 0); }
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public TerminalNode AF() { return getToken(terraformParser.AF, 0); }
		public List<TerminalNode> EQUAL() { return getTokens(terraformParser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(terraformParser.EQUAL, i);
		}
		public List<TerminalNode> STRING() { return getTokens(terraformParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(terraformParser.STRING, i);
		}
		public ComplexFieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_complexField; }
	}

	public final ComplexFieldContext complexField() throws RecognitionException {
		ComplexFieldContext _localctx = new ComplexFieldContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_complexField);
		int _la;
		try {
			setState(177);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(161);
				match(IDENTIFIER);
				setState(162);
				match(AO);
				setState(163);
				object();
				setState(164);
				match(AF);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(166);
				match(IDENTIFIER);
				setState(167);
				match(EQUAL);
				setState(168);
				match(AO);
				setState(172); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(169);
					match(STRING);
					setState(170);
					match(EQUAL);
					setState(171);
					match(STRING);
					}
					}
					setState(174); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==STRING );
				setState(176);
				match(AF);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValidationContext extends ParserRuleContext {
		public TerminalNode AO() { return getToken(terraformParser.AO, 0); }
		public TerminalNode CONDITION() { return getToken(terraformParser.CONDITION, 0); }
		public List<TerminalNode> EQUAL() { return getTokens(terraformParser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(terraformParser.EQUAL, i);
		}
		public TerminalNode ERROR() { return getToken(terraformParser.ERROR, 0); }
		public TerminalNode STRING() { return getToken(terraformParser.STRING, 0); }
		public TerminalNode AF() { return getToken(terraformParser.AF, 0); }
		public List<ConditionContext> condition() {
			return getRuleContexts(ConditionContext.class);
		}
		public ConditionContext condition(int i) {
			return getRuleContext(ConditionContext.class,i);
		}
		public ValidationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_validation; }
	}

	public final ValidationContext validation() throws RecognitionException {
		ValidationContext _localctx = new ValidationContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_validation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			match(AO);
			setState(180);
			match(CONDITION);
			setState(181);
			match(EQUAL);
			setState(183); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(182);
				condition();
				}
				}
				setState(185); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEANOP) | (1L << BOOLEAN) | (1L << IDENTIFIER) | (1L << STRING) | (1L << NUMBER))) != 0) );
			setState(187);
			match(ERROR);
			setState(188);
			match(EQUAL);
			setState(189);
			match(STRING);
			setState(190);
			match(AF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(terraformParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(terraformParser.NUMBER, 0); }
		public TerminalNode BOOLEAN() { return getToken(terraformParser.BOOLEAN, 0); }
		public TerminalNode BOOLEANOP() { return getToken(terraformParser.BOOLEANOP, 0); }
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_condition);
		try {
			setState(197);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(192);
				match(STRING);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(193);
				match(NUMBER);
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 3);
				{
				setState(194);
				match(BOOLEAN);
				}
				break;
			case BOOLEANOP:
				enterOuterAlt(_localctx, 4);
				{
				setState(195);
				match(BOOLEANOP);
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 5);
				{
				setState(196);
				functionCall();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(terraformParser.NUMBER, 0); }
		public TerminalNode BOOLEAN() { return getToken(terraformParser.BOOLEAN, 0); }
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public ComplexExpressionContext complexExpression() {
			return getRuleContext(ComplexExpressionContext.class,0);
		}
		public TerminalNode STRING() { return getToken(terraformParser.STRING, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_expression);
		try {
			setState(205);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(199);
				match(NUMBER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(200);
				match(BOOLEAN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(201);
				array();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(202);
				complexExpression(0);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(203);
				match(STRING);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(204);
				type();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionCallContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(terraformParser.IDENTIFIER, 0); }
		public TerminalNode PO() { return getToken(terraformParser.PO, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode PF() { return getToken(terraformParser.PF, 0); }
		public List<TerminalNode> VIRG() { return getTokens(terraformParser.VIRG); }
		public TerminalNode VIRG(int i) {
			return getToken(terraformParser.VIRG, i);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_functionCall);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
			match(IDENTIFIER);
			setState(208);
			match(PO);
			setState(209);
			expression();
			setState(214);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(210);
					match(VIRG);
					setState(211);
					expression();
					}
					} 
				}
				setState(216);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			}
			setState(218);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VIRG) {
				{
				setState(217);
				match(VIRG);
				}
			}

			setState(220);
			match(PF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComplexExpressionContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(terraformParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(terraformParser.IDENTIFIER, i);
		}
		public List<TerminalNode> TIRET() { return getTokens(terraformParser.TIRET); }
		public TerminalNode TIRET(int i) {
			return getToken(terraformParser.TIRET, i);
		}
		public TerminalNode OPEN() { return getToken(terraformParser.OPEN, 0); }
		public TerminalNode CLOSE() { return getToken(terraformParser.CLOSE, 0); }
		public List<TerminalNode> IDENTIFIERS() { return getTokens(terraformParser.IDENTIFIERS); }
		public TerminalNode IDENTIFIERS(int i) {
			return getToken(terraformParser.IDENTIFIERS, i);
		}
		public List<TerminalNode> AUTRE() { return getTokens(terraformParser.AUTRE); }
		public TerminalNode AUTRE(int i) {
			return getToken(terraformParser.AUTRE, i);
		}
		public List<TerminalNode> WSS() { return getTokens(terraformParser.WSS); }
		public TerminalNode WSS(int i) {
			return getToken(terraformParser.WSS, i);
		}
		public List<TerminalNode> STRING() { return getTokens(terraformParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(terraformParser.STRING, i);
		}
		public List<ComplexExpressionContext> complexExpression() {
			return getRuleContexts(ComplexExpressionContext.class);
		}
		public ComplexExpressionContext complexExpression(int i) {
			return getRuleContext(ComplexExpressionContext.class,i);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public TerminalNode POINT() { return getToken(terraformParser.POINT, 0); }
		public TerminalNode CO() { return getToken(terraformParser.CO, 0); }
		public IndexContext index() {
			return getRuleContext(IndexContext.class,0);
		}
		public TerminalNode CF() { return getToken(terraformParser.CF, 0); }
		public ComplexExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_complexExpression; }
	}

	public final ComplexExpressionContext complexExpression() throws RecognitionException {
		return complexExpression(0);
	}

	private ComplexExpressionContext complexExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ComplexExpressionContext _localctx = new ComplexExpressionContext(_ctx, _parentState);
		ComplexExpressionContext _prevctx = _localctx;
		int _startState = 40;
		enterRecursionRule(_localctx, 40, RULE_complexExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(247);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(223);
				match(IDENTIFIER);
				}
				break;
			case 2:
				{
				setState(225); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(224);
						_la = _input.LA(1);
						if ( !(_la==TIRET || _la==IDENTIFIER) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(227); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case 3:
				{
				setState(229);
				match(OPEN);
				setState(237); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					setState(237);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case IDENTIFIERS:
						{
						setState(230);
						match(IDENTIFIERS);
						}
						break;
					case AUTRE:
						{
						setState(231);
						match(AUTRE);
						}
						break;
					case WSS:
						{
						setState(233); 
						_errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								setState(232);
								match(WSS);
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							setState(235); 
							_errHandler.sync(this);
							_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
						} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(239); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << IDENTIFIERS) | (1L << WSS) | (1L << AUTRE))) != 0) );
				setState(241);
				match(CLOSE);
				}
				break;
			case 4:
				{
				setState(242);
				match(STRING);
				setState(243);
				complexExpression(0);
				setState(244);
				match(STRING);
				}
				break;
			case 5:
				{
				setState(246);
				functionCall();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(262);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(260);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
					case 1:
						{
						_localctx = new ComplexExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_complexExpression);
						setState(249);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(250);
						match(POINT);
						setState(251);
						complexExpression(7);
						}
						break;
					case 2:
						{
						_localctx = new ComplexExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_complexExpression);
						setState(252);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(253);
						match(CO);
						setState(254);
						index();
						setState(255);
						match(CF);
						}
						break;
					case 3:
						{
						_localctx = new ComplexExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_complexExpression);
						setState(257);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(258);
						match(POINT);
						setState(259);
						index();
						}
						break;
					}
					} 
				}
				setState(264);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ArrayContext extends ParserRuleContext {
		public TerminalNode CO() { return getToken(terraformParser.CO, 0); }
		public TerminalNode CF() { return getToken(terraformParser.CF, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> VIRG() { return getTokens(terraformParser.VIRG); }
		public TerminalNode VIRG(int i) {
			return getToken(terraformParser.VIRG, i);
		}
		public ArrayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array; }
	}

	public final ArrayContext array() throws RecognitionException {
		ArrayContext _localctx = new ArrayContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_array);
		int _la;
		try {
			int _alt;
			setState(281);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(265);
				match(CO);
				setState(266);
				match(CF);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(267);
				match(CO);
				setState(268);
				expression();
				setState(273);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(269);
						match(VIRG);
						setState(270);
						expression();
						}
						} 
					}
					setState(275);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
				}
				setState(277);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==VIRG) {
					{
					setState(276);
					match(VIRG);
					}
				}

				setState(279);
				match(CF);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IndexContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(terraformParser.NUMBER, 0); }
		public TerminalNode MULT() { return getToken(terraformParser.MULT, 0); }
		public IndexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_index; }
	}

	public final IndexContext index() throws RecognitionException {
		IndexContext _localctx = new IndexContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_index);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(283);
			_la = _input.LA(1);
			if ( !(_la==MULT || _la==NUMBER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 20:
			return complexExpression_sempred((ComplexExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean complexExpression_sempred(ComplexExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 6);
		case 1:
			return precpred(_ctx, 5);
		case 2:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3*\u0120\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\3\2\6\2\62"+
		"\n\2\r\2\16\2\63\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3=\n\3\3\4\3\4\3\4\3\4"+
		"\3\4\6\4D\n\4\r\4\16\4E\3\4\3\4\3\5\3\5\3\5\3\5\3\5\6\5O\n\5\r\5\16\5"+
		"P\3\5\3\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\6\bb\n\b"+
		"\r\b\16\bc\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\6\ns\n"+
		"\n\r\n\16\nt\3\n\3\n\3\13\3\13\3\13\3\13\6\13}\n\13\r\13\16\13~\3\13\3"+
		"\13\3\f\3\f\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\5\16\u0098\n\16\3\17\3\17\6\17\u009c"+
		"\n\17\r\17\16\17\u009d\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3"+
		"\21\3\21\3\21\3\21\3\21\3\21\6\21\u00af\n\21\r\21\16\21\u00b0\3\21\5\21"+
		"\u00b4\n\21\3\22\3\22\3\22\3\22\6\22\u00ba\n\22\r\22\16\22\u00bb\3\22"+
		"\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\5\23\u00c8\n\23\3\24\3\24"+
		"\3\24\3\24\3\24\3\24\5\24\u00d0\n\24\3\25\3\25\3\25\3\25\3\25\7\25\u00d7"+
		"\n\25\f\25\16\25\u00da\13\25\3\25\5\25\u00dd\n\25\3\25\3\25\3\26\3\26"+
		"\3\26\6\26\u00e4\n\26\r\26\16\26\u00e5\3\26\3\26\3\26\3\26\6\26\u00ec"+
		"\n\26\r\26\16\26\u00ed\6\26\u00f0\n\26\r\26\16\26\u00f1\3\26\3\26\3\26"+
		"\3\26\3\26\3\26\5\26\u00fa\n\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26"+
		"\3\26\3\26\3\26\7\26\u0107\n\26\f\26\16\26\u010a\13\26\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\7\27\u0112\n\27\f\27\16\27\u0115\13\27\3\27\5\27\u0118"+
		"\n\27\3\27\3\27\5\27\u011c\n\27\3\30\3\30\3\30\2\3*\31\2\4\6\b\n\f\16"+
		"\20\22\24\26\30\32\34\36 \"$&(*,.\2\5\4\2\5\5\36\36\4\2\31\31\36\36\4"+
		"\2\32\32  \2\u0138\2\61\3\2\2\2\4<\3\2\2\2\6>\3\2\2\2\bI\3\2\2\2\nT\3"+
		"\2\2\2\fX\3\2\2\2\16^\3\2\2\2\20g\3\2\2\2\22n\3\2\2\2\24x\3\2\2\2\26\u0082"+
		"\3\2\2\2\30\u0084\3\2\2\2\32\u0097\3\2\2\2\34\u009b\3\2\2\2\36\u009f\3"+
		"\2\2\2 \u00b3\3\2\2\2\"\u00b5\3\2\2\2$\u00c7\3\2\2\2&\u00cf\3\2\2\2(\u00d1"+
		"\3\2\2\2*\u00f9\3\2\2\2,\u011b\3\2\2\2.\u011d\3\2\2\2\60\62\5\4\3\2\61"+
		"\60\3\2\2\2\62\63\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2\64\3\3\2\2\2\65"+
		"=\5\f\7\2\66=\5\16\b\2\67=\5\20\t\28=\5\22\n\29=\5\24\13\2:=\5\b\5\2;"+
		"=\5\6\4\2<\65\3\2\2\2<\66\3\2\2\2<\67\3\2\2\2<8\3\2\2\2<9\3\2\2\2<:\3"+
		"\2\2\2<;\3\2\2\2=\5\3\2\2\2>?\7\4\2\2?@\5\30\r\2@A\5\26\f\2AC\7\20\2\2"+
		"BD\5\34\17\2CB\3\2\2\2DE\3\2\2\2EC\3\2\2\2EF\3\2\2\2FG\3\2\2\2GH\7\21"+
		"\2\2H\7\3\2\2\2IJ\7\3\2\2JK\5\26\f\2KN\7\20\2\2LO\5\n\6\2MO\5\34\17\2"+
		"NL\3\2\2\2NM\3\2\2\2OP\3\2\2\2PN\3\2\2\2PQ\3\2\2\2QR\3\2\2\2RS\7\21\2"+
		"\2S\t\3\2\2\2TU\7\5\2\2UV\7\22\2\2VW\7\37\2\2W\13\3\2\2\2XY\7\6\2\2YZ"+
		"\5\26\f\2Z[\7\20\2\2[\\\5\34\17\2\\]\7\21\2\2]\r\3\2\2\2^_\7\7\2\2_a\7"+
		"\20\2\2`b\5\34\17\2a`\3\2\2\2bc\3\2\2\2ca\3\2\2\2cd\3\2\2\2de\3\2\2\2"+
		"ef\7\21\2\2f\17\3\2\2\2gh\7\b\2\2hi\5\30\r\2ij\5\26\f\2jk\7\20\2\2kl\5"+
		"\34\17\2lm\7\21\2\2m\21\3\2\2\2no\7\t\2\2op\5\26\f\2pr\7\20\2\2qs\5\34"+
		"\17\2rq\3\2\2\2st\3\2\2\2tr\3\2\2\2tu\3\2\2\2uv\3\2\2\2vw\7\21\2\2w\23"+
		"\3\2\2\2xy\7\n\2\2yz\5\26\f\2z|\7\20\2\2{}\5\34\17\2|{\3\2\2\2}~\3\2\2"+
		"\2~|\3\2\2\2~\177\3\2\2\2\177\u0080\3\2\2\2\u0080\u0081\7\21\2\2\u0081"+
		"\25\3\2\2\2\u0082\u0083\7\37\2\2\u0083\27\3\2\2\2\u0084\u0085\7\37\2\2"+
		"\u0085\31\3\2\2\2\u0086\u0098\7\35\2\2\u0087\u0098\7\13\2\2\u0088\u0089"+
		"\7\13\2\2\u0089\u008a\7\23\2\2\u008a\u008b\5\32\16\2\u008b\u008c\7\24"+
		"\2\2\u008c\u0098\3\2\2\2\u008d\u008e\7\f\2\2\u008e\u008f\7\23\2\2\u008f"+
		"\u0090\5\32\16\2\u0090\u0091\7\24\2\2\u0091\u0098\3\2\2\2\u0092\u0093"+
		"\7\r\2\2\u0093\u0094\7\23\2\2\u0094\u0095\5\34\17\2\u0095\u0096\7\24\2"+
		"\2\u0096\u0098\3\2\2\2\u0097\u0086\3\2\2\2\u0097\u0087\3\2\2\2\u0097\u0088"+
		"\3\2\2\2\u0097\u008d\3\2\2\2\u0097\u0092\3\2\2\2\u0098\33\3\2\2\2\u0099"+
		"\u009c\5 \21\2\u009a\u009c\5\36\20\2\u009b\u0099\3\2\2\2\u009b\u009a\3"+
		"\2\2\2\u009c\u009d\3\2\2\2\u009d\u009b\3\2\2\2\u009d\u009e\3\2\2\2\u009e"+
		"\35\3\2\2\2\u009f\u00a0\t\2\2\2\u00a0\u00a1\7\22\2\2\u00a1\u00a2\5&\24"+
		"\2\u00a2\37\3\2\2\2\u00a3\u00a4\7\36\2\2\u00a4\u00a5\7\20\2\2\u00a5\u00a6"+
		"\5\34\17\2\u00a6\u00a7\7\21\2\2\u00a7\u00b4\3\2\2\2\u00a8\u00a9\7\36\2"+
		"\2\u00a9\u00aa\7\22\2\2\u00aa\u00ae\7\20\2\2\u00ab\u00ac\7\37\2\2\u00ac"+
		"\u00ad\7\22\2\2\u00ad\u00af\7\37\2\2\u00ae\u00ab\3\2\2\2\u00af\u00b0\3"+
		"\2\2\2\u00b0\u00ae\3\2\2\2\u00b0\u00b1\3\2\2\2\u00b1\u00b2\3\2\2\2\u00b2"+
		"\u00b4\7\21\2\2\u00b3\u00a3\3\2\2\2\u00b3\u00a8\3\2\2\2\u00b4!\3\2\2\2"+
		"\u00b5\u00b6\7\20\2\2\u00b6\u00b7\7\16\2\2\u00b7\u00b9\7\22\2\2\u00b8"+
		"\u00ba\5$\23\2\u00b9\u00b8\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb\u00b9\3\2"+
		"\2\2\u00bb\u00bc\3\2\2\2\u00bc\u00bd\3\2\2\2\u00bd\u00be\7\17\2\2\u00be"+
		"\u00bf\7\22\2\2\u00bf\u00c0\7\37\2\2\u00c0\u00c1\7\21\2\2\u00c1#\3\2\2"+
		"\2\u00c2\u00c8\7\37\2\2\u00c3\u00c8\7 \2\2\u00c4\u00c8\7\34\2\2\u00c5"+
		"\u00c8\7\33\2\2\u00c6\u00c8\5(\25\2\u00c7\u00c2\3\2\2\2\u00c7\u00c3\3"+
		"\2\2\2\u00c7\u00c4\3\2\2\2\u00c7\u00c5\3\2\2\2\u00c7\u00c6\3\2\2\2\u00c8"+
		"%\3\2\2\2\u00c9\u00d0\7 \2\2\u00ca\u00d0\7\34\2\2\u00cb\u00d0\5,\27\2"+
		"\u00cc\u00d0\5*\26\2\u00cd\u00d0\7\37\2\2\u00ce\u00d0\5\32\16\2\u00cf"+
		"\u00c9\3\2\2\2\u00cf\u00ca\3\2\2\2\u00cf\u00cb\3\2\2\2\u00cf\u00cc\3\2"+
		"\2\2\u00cf\u00cd\3\2\2\2\u00cf\u00ce\3\2\2\2\u00d0\'\3\2\2\2\u00d1\u00d2"+
		"\7\36\2\2\u00d2\u00d3\7\23\2\2\u00d3\u00d8\5&\24\2\u00d4\u00d5\7\27\2"+
		"\2\u00d5\u00d7\5&\24\2\u00d6\u00d4\3\2\2\2\u00d7\u00da\3\2\2\2\u00d8\u00d6"+
		"\3\2\2\2\u00d8\u00d9\3\2\2\2\u00d9\u00dc\3\2\2\2\u00da\u00d8\3\2\2\2\u00db"+
		"\u00dd\7\27\2\2\u00dc\u00db\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd\u00de\3"+
		"\2\2\2\u00de\u00df\7\24\2\2\u00df)\3\2\2\2\u00e0\u00e1\b\26\1\2\u00e1"+
		"\u00fa\7\36\2\2\u00e2\u00e4\t\3\2\2\u00e3\u00e2\3\2\2\2\u00e4\u00e5\3"+
		"\2\2\2\u00e5\u00e3\3\2\2\2\u00e5\u00e6\3\2\2\2\u00e6\u00fa\3\2\2\2\u00e7"+
		"\u00ef\7%\2\2\u00e8\u00f0\7&\2\2\u00e9\u00f0\7)\2\2\u00ea\u00ec\7\'\2"+
		"\2\u00eb\u00ea\3\2\2\2\u00ec\u00ed\3\2\2\2\u00ed\u00eb\3\2\2\2\u00ed\u00ee"+
		"\3\2\2\2\u00ee\u00f0\3\2\2\2\u00ef\u00e8\3\2\2\2\u00ef\u00e9\3\2\2\2\u00ef"+
		"\u00eb\3\2\2\2\u00f0\u00f1\3\2\2\2\u00f1\u00ef\3\2\2\2\u00f1\u00f2\3\2"+
		"\2\2\u00f2\u00f3\3\2\2\2\u00f3\u00fa\7*\2\2\u00f4\u00f5\7\37\2\2\u00f5"+
		"\u00f6\5*\26\2\u00f6\u00f7\7\37\2\2\u00f7\u00fa\3\2\2\2\u00f8\u00fa\5"+
		"(\25\2\u00f9\u00e0\3\2\2\2\u00f9\u00e3\3\2\2\2\u00f9\u00e7\3\2\2\2\u00f9"+
		"\u00f4\3\2\2\2\u00f9\u00f8\3\2\2\2\u00fa\u0108\3\2\2\2\u00fb\u00fc\f\b"+
		"\2\2\u00fc\u00fd\7\30\2\2\u00fd\u0107\5*\26\t\u00fe\u00ff\f\7\2\2\u00ff"+
		"\u0100\7\25\2\2\u0100\u0101\5.\30\2\u0101\u0102\7\26\2\2\u0102\u0107\3"+
		"\2\2\2\u0103\u0104\f\6\2\2\u0104\u0105\7\30\2\2\u0105\u0107\5.\30\2\u0106"+
		"\u00fb\3\2\2\2\u0106\u00fe\3\2\2\2\u0106\u0103\3\2\2\2\u0107\u010a\3\2"+
		"\2\2\u0108\u0106\3\2\2\2\u0108\u0109\3\2\2\2\u0109+\3\2\2\2\u010a\u0108"+
		"\3\2\2\2\u010b\u010c\7\25\2\2\u010c\u011c\7\26\2\2\u010d\u010e\7\25\2"+
		"\2\u010e\u0113\5&\24\2\u010f\u0110\7\27\2\2\u0110\u0112\5&\24\2\u0111"+
		"\u010f\3\2\2\2\u0112\u0115\3\2\2\2\u0113\u0111\3\2\2\2\u0113\u0114\3\2"+
		"\2\2\u0114\u0117\3\2\2\2\u0115\u0113\3\2\2\2\u0116\u0118\7\27\2\2\u0117"+
		"\u0116\3\2\2\2\u0117\u0118\3\2\2\2\u0118\u0119\3\2\2\2\u0119\u011a\7\26"+
		"\2\2\u011a\u011c\3\2\2\2\u011b\u010b\3\2\2\2\u011b\u010d\3\2\2\2\u011c"+
		"-\3\2\2\2\u011d\u011e\t\4\2\2\u011e/\3\2\2\2\36\63<ENPct~\u0097\u009b"+
		"\u009d\u00b0\u00b3\u00bb\u00c7\u00cf\u00d8\u00dc\u00e5\u00ed\u00ef\u00f1"+
		"\u00f9\u0106\u0108\u0113\u0117\u011b";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}