// Generated from c:\Users\nolwe\Documents\Stage\monaco\src\main\antlr\hcl.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class hclParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, BOOLEANOP=38, 
		BOOLEAN=39, TYPE=40, IDENTIFIER=41, STRING=42, NUMBER=43, COMMENT=44, 
		LINE_COMMENT=45, HAS_COMMENT=46, WS=47, UNRECOGNIZED=48;
	public static final int
		RULE_file = 0, RULE_directive = 1, RULE_moduleDirective = 2, RULE_providerDirective = 3, 
		RULE_terraformDirective = 4, RULE_terraformBlock = 5, RULE_terraformCloud = 6, 
		RULE_terraformBackEnd = 7, RULE_terraformVersion = 8, RULE_terraformProviders = 9, 
		RULE_resourceDirective = 10, RULE_variableDirective = 11, RULE_variableBlock = 12, 
		RULE_outputDirective = 13, RULE_name = 14, RULE_resourceType = 15, RULE_outputBlock = 16, 
		RULE_outputValue = 17, RULE_outputDescription = 18, RULE_outputDependsOn = 19, 
		RULE_outputSensitive = 20, RULE_variableSensitive = 21, RULE_variableType = 22, 
		RULE_variableNullabl = 23, RULE_type = 24, RULE_object = 25, RULE_field = 26, 
		RULE_complexField = 27, RULE_variableDescription = 28, RULE_variableDefault = 29, 
		RULE_variableValidation = 30, RULE_validation = 31, RULE_condition = 32, 
		RULE_expression = 33, RULE_functionCall = 34, RULE_complexExpression = 35, 
		RULE_array = 36, RULE_index = 37;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "directive", "moduleDirective", "providerDirective", "terraformDirective", 
			"terraformBlock", "terraformCloud", "terraformBackEnd", "terraformVersion", 
			"terraformProviders", "resourceDirective", "variableDirective", "variableBlock", 
			"outputDirective", "name", "resourceType", "outputBlock", "outputValue", 
			"outputDescription", "outputDependsOn", "outputSensitive", "variableSensitive", 
			"variableType", "variableNullabl", "type", "object", "field", "complexField", 
			"variableDescription", "variableDefault", "variableValidation", "validation", 
			"condition", "expression", "functionCall", "complexExpression", "array", 
			"index"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'module'", "'provider'", "'terraform'", "'{'", "'}'", "'cloud'", 
			"'backend'", "'required_version'", "'='", "'required_providers'", "'resource'", 
			"'variable'", "'output'", "'value'", "'description'", "'depends_on'", 
			"'sensitive'", "'type'", "'nullable'", "'list'", "'list('", "')'", "'map('", 
			"'object'", "'('", "'default'", "'validation'", "'condition'", "'error_message'", 
			"','", "'.'", "'['", "']'", "'<<EOF'", "'-'", "'EOF'", "'*'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "BOOLEANOP", "BOOLEAN", "TYPE", "IDENTIFIER", "STRING", "NUMBER", 
			"COMMENT", "LINE_COMMENT", "HAS_COMMENT", "WS", "UNRECOGNIZED"
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
	public String getGrammarFileName() { return "hcl.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public hclParser(TokenStream input) {
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
			setState(77); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(76);
				directive();
				}
				}
				setState(79); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__10) | (1L << T__11) | (1L << T__12))) != 0) );
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
		public DirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_directive; }
	}

	public final DirectiveContext directive() throws RecognitionException {
		DirectiveContext _localctx = new DirectiveContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_directive);
		try {
			setState(87);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				enterOuterAlt(_localctx, 1);
				{
				setState(81);
				providerDirective();
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(82);
				terraformDirective();
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 3);
				{
				setState(83);
				resourceDirective();
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 4);
				{
				setState(84);
				variableDirective();
				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 5);
				{
				setState(85);
				outputDirective();
				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 6);
				{
				setState(86);
				moduleDirective();
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

	public static class ModuleDirectiveContext extends ParserRuleContext {
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public ModuleDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleDirective; }
	}

	public final ModuleDirectiveContext moduleDirective() throws RecognitionException {
		ModuleDirectiveContext _localctx = new ModuleDirectiveContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_moduleDirective);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			match(T__0);
			setState(90);
			name();
			setState(91);
			object();
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
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public ProviderDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_providerDirective; }
	}

	public final ProviderDirectiveContext providerDirective() throws RecognitionException {
		ProviderDirectiveContext _localctx = new ProviderDirectiveContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_providerDirective);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			match(T__1);
			setState(94);
			name();
			setState(95);
			object();
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
		public TerraformBlockContext terraformBlock() {
			return getRuleContext(TerraformBlockContext.class,0);
		}
		public TerraformDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_terraformDirective; }
	}

	public final TerraformDirectiveContext terraformDirective() throws RecognitionException {
		TerraformDirectiveContext _localctx = new TerraformDirectiveContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_terraformDirective);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(T__2);
			setState(98);
			terraformBlock();
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

	public static class TerraformBlockContext extends ParserRuleContext {
		public List<TerraformCloudContext> terraformCloud() {
			return getRuleContexts(TerraformCloudContext.class);
		}
		public TerraformCloudContext terraformCloud(int i) {
			return getRuleContext(TerraformCloudContext.class,i);
		}
		public List<TerraformBackEndContext> terraformBackEnd() {
			return getRuleContexts(TerraformBackEndContext.class);
		}
		public TerraformBackEndContext terraformBackEnd(int i) {
			return getRuleContext(TerraformBackEndContext.class,i);
		}
		public List<TerraformVersionContext> terraformVersion() {
			return getRuleContexts(TerraformVersionContext.class);
		}
		public TerraformVersionContext terraformVersion(int i) {
			return getRuleContext(TerraformVersionContext.class,i);
		}
		public List<TerraformProvidersContext> terraformProviders() {
			return getRuleContexts(TerraformProvidersContext.class);
		}
		public TerraformProvidersContext terraformProviders(int i) {
			return getRuleContext(TerraformProvidersContext.class,i);
		}
		public List<ObjectContext> object() {
			return getRuleContexts(ObjectContext.class);
		}
		public ObjectContext object(int i) {
			return getRuleContext(ObjectContext.class,i);
		}
		public TerraformBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_terraformBlock; }
	}

	public final TerraformBlockContext terraformBlock() throws RecognitionException {
		TerraformBlockContext _localctx = new TerraformBlockContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_terraformBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			match(T__3);
			setState(106); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(106);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__5:
					{
					setState(101);
					terraformCloud();
					}
					break;
				case T__6:
					{
					setState(102);
					terraformBackEnd();
					}
					break;
				case T__7:
					{
					setState(103);
					terraformVersion();
					}
					break;
				case T__9:
					{
					setState(104);
					terraformProviders();
					}
					break;
				case T__3:
					{
					setState(105);
					object();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(108); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__9))) != 0) );
			setState(110);
			match(T__4);
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

	public static class TerraformCloudContext extends ParserRuleContext {
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public TerraformCloudContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_terraformCloud; }
	}

	public final TerraformCloudContext terraformCloud() throws RecognitionException {
		TerraformCloudContext _localctx = new TerraformCloudContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_terraformCloud);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			match(T__5);
			setState(113);
			object();
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

	public static class TerraformBackEndContext extends ParserRuleContext {
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public TerraformBackEndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_terraformBackEnd; }
	}

	public final TerraformBackEndContext terraformBackEnd() throws RecognitionException {
		TerraformBackEndContext _localctx = new TerraformBackEndContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_terraformBackEnd);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			match(T__6);
			setState(116);
			name();
			setState(117);
			object();
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

	public static class TerraformVersionContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(hclParser.STRING, 0); }
		public TerraformVersionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_terraformVersion; }
	}

	public final TerraformVersionContext terraformVersion() throws RecognitionException {
		TerraformVersionContext _localctx = new TerraformVersionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_terraformVersion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			match(T__7);
			setState(120);
			match(T__8);
			setState(121);
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

	public static class TerraformProvidersContext extends ParserRuleContext {
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public TerraformProvidersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_terraformProviders; }
	}

	public final TerraformProvidersContext terraformProviders() throws RecognitionException {
		TerraformProvidersContext _localctx = new TerraformProvidersContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_terraformProviders);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			match(T__9);
			setState(124);
			object();
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
		public ResourceTypeContext resourceType() {
			return getRuleContext(ResourceTypeContext.class,0);
		}
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public ResourceDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resourceDirective; }
	}

	public final ResourceDirectiveContext resourceDirective() throws RecognitionException {
		ResourceDirectiveContext _localctx = new ResourceDirectiveContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_resourceDirective);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			match(T__10);
			setState(127);
			resourceType();
			setState(128);
			name();
			setState(129);
			object();
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
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public VariableBlockContext variableBlock() {
			return getRuleContext(VariableBlockContext.class,0);
		}
		public VariableDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDirective; }
	}

	public final VariableDirectiveContext variableDirective() throws RecognitionException {
		VariableDirectiveContext _localctx = new VariableDirectiveContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_variableDirective);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			match(T__11);
			setState(132);
			name();
			setState(133);
			variableBlock();
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

	public static class VariableBlockContext extends ParserRuleContext {
		public List<VariableTypeContext> variableType() {
			return getRuleContexts(VariableTypeContext.class);
		}
		public VariableTypeContext variableType(int i) {
			return getRuleContext(VariableTypeContext.class,i);
		}
		public List<VariableDescriptionContext> variableDescription() {
			return getRuleContexts(VariableDescriptionContext.class);
		}
		public VariableDescriptionContext variableDescription(int i) {
			return getRuleContext(VariableDescriptionContext.class,i);
		}
		public List<VariableDefaultContext> variableDefault() {
			return getRuleContexts(VariableDefaultContext.class);
		}
		public VariableDefaultContext variableDefault(int i) {
			return getRuleContext(VariableDefaultContext.class,i);
		}
		public List<VariableValidationContext> variableValidation() {
			return getRuleContexts(VariableValidationContext.class);
		}
		public VariableValidationContext variableValidation(int i) {
			return getRuleContext(VariableValidationContext.class,i);
		}
		public List<VariableSensitiveContext> variableSensitive() {
			return getRuleContexts(VariableSensitiveContext.class);
		}
		public VariableSensitiveContext variableSensitive(int i) {
			return getRuleContext(VariableSensitiveContext.class,i);
		}
		public List<VariableNullablContext> variableNullabl() {
			return getRuleContexts(VariableNullablContext.class);
		}
		public VariableNullablContext variableNullabl(int i) {
			return getRuleContext(VariableNullablContext.class,i);
		}
		public List<ObjectContext> object() {
			return getRuleContexts(ObjectContext.class);
		}
		public ObjectContext object(int i) {
			return getRuleContext(ObjectContext.class,i);
		}
		public VariableBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableBlock; }
	}

	public final VariableBlockContext variableBlock() throws RecognitionException {
		VariableBlockContext _localctx = new VariableBlockContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_variableBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			match(T__3);
			setState(143); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(143);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__17:
					{
					setState(136);
					variableType();
					}
					break;
				case T__14:
					{
					setState(137);
					variableDescription();
					}
					break;
				case T__25:
					{
					setState(138);
					variableDefault();
					}
					break;
				case T__26:
					{
					setState(139);
					variableValidation();
					}
					break;
				case T__16:
					{
					setState(140);
					variableSensitive();
					}
					break;
				case T__18:
					{
					setState(141);
					variableNullabl();
					}
					break;
				case T__3:
					{
					setState(142);
					object();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(145); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << T__14) | (1L << T__16) | (1L << T__17) | (1L << T__18) | (1L << T__25) | (1L << T__26))) != 0) );
			setState(147);
			match(T__4);
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
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public OutputBlockContext outputBlock() {
			return getRuleContext(OutputBlockContext.class,0);
		}
		public OutputDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_outputDirective; }
	}

	public final OutputDirectiveContext outputDirective() throws RecognitionException {
		OutputDirectiveContext _localctx = new OutputDirectiveContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_outputDirective);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			match(T__12);
			setState(150);
			name();
			setState(151);
			outputBlock();
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
		public TerminalNode STRING() { return getToken(hclParser.STRING, 0); }
		public NameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_name; }
	}

	public final NameContext name() throws RecognitionException {
		NameContext _localctx = new NameContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
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

	public static class ResourceTypeContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(hclParser.STRING, 0); }
		public ResourceTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resourceType; }
	}

	public final ResourceTypeContext resourceType() throws RecognitionException {
		ResourceTypeContext _localctx = new ResourceTypeContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_resourceType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
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

	public static class OutputBlockContext extends ParserRuleContext {
		public List<OutputValueContext> outputValue() {
			return getRuleContexts(OutputValueContext.class);
		}
		public OutputValueContext outputValue(int i) {
			return getRuleContext(OutputValueContext.class,i);
		}
		public List<OutputDescriptionContext> outputDescription() {
			return getRuleContexts(OutputDescriptionContext.class);
		}
		public OutputDescriptionContext outputDescription(int i) {
			return getRuleContext(OutputDescriptionContext.class,i);
		}
		public List<OutputSensitiveContext> outputSensitive() {
			return getRuleContexts(OutputSensitiveContext.class);
		}
		public OutputSensitiveContext outputSensitive(int i) {
			return getRuleContext(OutputSensitiveContext.class,i);
		}
		public List<OutputDependsOnContext> outputDependsOn() {
			return getRuleContexts(OutputDependsOnContext.class);
		}
		public OutputDependsOnContext outputDependsOn(int i) {
			return getRuleContext(OutputDependsOnContext.class,i);
		}
		public List<ObjectContext> object() {
			return getRuleContexts(ObjectContext.class);
		}
		public ObjectContext object(int i) {
			return getRuleContext(ObjectContext.class,i);
		}
		public OutputBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_outputBlock; }
	}

	public final OutputBlockContext outputBlock() throws RecognitionException {
		OutputBlockContext _localctx = new OutputBlockContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_outputBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			match(T__3);
			setState(163); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(163);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__13:
					{
					setState(158);
					outputValue();
					}
					break;
				case T__14:
					{
					setState(159);
					outputDescription();
					}
					break;
				case T__16:
					{
					setState(160);
					outputSensitive();
					}
					break;
				case T__15:
					{
					setState(161);
					outputDependsOn();
					}
					break;
				case T__3:
					{
					setState(162);
					object();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(165); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << T__13) | (1L << T__14) | (1L << T__15) | (1L << T__16))) != 0) );
			setState(167);
			match(T__4);
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

	public static class OutputValueContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public OutputValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_outputValue; }
	}

	public final OutputValueContext outputValue() throws RecognitionException {
		OutputValueContext _localctx = new OutputValueContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_outputValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(169);
			match(T__13);
			setState(170);
			match(T__8);
			setState(171);
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

	public static class OutputDescriptionContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(hclParser.STRING, 0); }
		public OutputDescriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_outputDescription; }
	}

	public final OutputDescriptionContext outputDescription() throws RecognitionException {
		OutputDescriptionContext _localctx = new OutputDescriptionContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_outputDescription);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			match(T__14);
			setState(174);
			match(T__8);
			setState(175);
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

	public static class OutputDependsOnContext extends ParserRuleContext {
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public OutputDependsOnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_outputDependsOn; }
	}

	public final OutputDependsOnContext outputDependsOn() throws RecognitionException {
		OutputDependsOnContext _localctx = new OutputDependsOnContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_outputDependsOn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
			match(T__15);
			setState(178);
			match(T__8);
			setState(179);
			array();
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

	public static class OutputSensitiveContext extends ParserRuleContext {
		public TerminalNode BOOLEAN() { return getToken(hclParser.BOOLEAN, 0); }
		public OutputSensitiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_outputSensitive; }
	}

	public final OutputSensitiveContext outputSensitive() throws RecognitionException {
		OutputSensitiveContext _localctx = new OutputSensitiveContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_outputSensitive);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			match(T__16);
			setState(182);
			match(T__8);
			setState(183);
			match(BOOLEAN);
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

	public static class VariableSensitiveContext extends ParserRuleContext {
		public TerminalNode BOOLEAN() { return getToken(hclParser.BOOLEAN, 0); }
		public VariableSensitiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableSensitive; }
	}

	public final VariableSensitiveContext variableSensitive() throws RecognitionException {
		VariableSensitiveContext _localctx = new VariableSensitiveContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_variableSensitive);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			match(T__16);
			setState(186);
			match(T__8);
			setState(187);
			match(BOOLEAN);
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

	public static class VariableTypeContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public VariableTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableType; }
	}

	public final VariableTypeContext variableType() throws RecognitionException {
		VariableTypeContext _localctx = new VariableTypeContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_variableType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(189);
			match(T__17);
			setState(190);
			match(T__8);
			setState(191);
			type();
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

	public static class VariableNullablContext extends ParserRuleContext {
		public TerminalNode BOOLEAN() { return getToken(hclParser.BOOLEAN, 0); }
		public VariableNullablContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableNullabl; }
	}

	public final VariableNullablContext variableNullabl() throws RecognitionException {
		VariableNullablContext _localctx = new VariableNullablContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_variableNullabl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			match(T__18);
			setState(194);
			match(T__8);
			setState(195);
			match(BOOLEAN);
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
		public TerminalNode TYPE() { return getToken(hclParser.TYPE, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
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
		enterRule(_localctx, 48, RULE_type);
		try {
			setState(212);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(197);
				match(TYPE);
				}
				break;
			case T__19:
				enterOuterAlt(_localctx, 2);
				{
				setState(198);
				match(T__19);
				}
				break;
			case T__20:
				enterOuterAlt(_localctx, 3);
				{
				setState(199);
				match(T__20);
				setState(200);
				type();
				setState(201);
				match(T__21);
				}
				break;
			case T__22:
				enterOuterAlt(_localctx, 4);
				{
				setState(203);
				match(T__22);
				setState(204);
				type();
				setState(205);
				match(T__21);
				}
				break;
			case T__23:
				enterOuterAlt(_localctx, 5);
				{
				setState(207);
				match(T__23);
				setState(208);
				match(T__24);
				setState(209);
				object();
				setState(210);
				match(T__21);
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
		enterRule(_localctx, 50, RULE_object);
		int _la;
		try {
			setState(225);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(214);
				match(T__3);
				setState(215);
				match(T__4);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(216);
				match(T__3);
				setState(219); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					setState(219);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						setState(217);
						complexField();
						}
						break;
					case 2:
						{
						setState(218);
						field();
						}
						break;
					}
					}
					setState(221); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__14) | (1L << T__17) | (1L << IDENTIFIER))) != 0) );
				setState(223);
				match(T__4);
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

	public static class FieldContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(hclParser.IDENTIFIER, 0); }
		public FieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field; }
	}

	public final FieldContext field() throws RecognitionException {
		FieldContext _localctx = new FieldContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_field);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__14) | (1L << T__17) | (1L << IDENTIFIER))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(228);
			match(T__8);
			setState(229);
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
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(hclParser.IDENTIFIER, 0); }
		public ComplexFieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_complexField; }
	}

	public final ComplexFieldContext complexField() throws RecognitionException {
		ComplexFieldContext _localctx = new ComplexFieldContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_complexField);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(231);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__14) | (1L << T__17) | (1L << IDENTIFIER))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(232);
			object();
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

	public static class VariableDescriptionContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(hclParser.STRING, 0); }
		public VariableDescriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDescription; }
	}

	public final VariableDescriptionContext variableDescription() throws RecognitionException {
		VariableDescriptionContext _localctx = new VariableDescriptionContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_variableDescription);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			match(T__14);
			setState(235);
			match(T__8);
			setState(236);
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

	public static class VariableDefaultContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VariableDefaultContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDefault; }
	}

	public final VariableDefaultContext variableDefault() throws RecognitionException {
		VariableDefaultContext _localctx = new VariableDefaultContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_variableDefault);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			match(T__25);
			setState(239);
			match(T__8);
			setState(240);
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

	public static class VariableValidationContext extends ParserRuleContext {
		public ValidationContext validation() {
			return getRuleContext(ValidationContext.class,0);
		}
		public VariableValidationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableValidation; }
	}

	public final VariableValidationContext variableValidation() throws RecognitionException {
		VariableValidationContext _localctx = new VariableValidationContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_variableValidation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			match(T__26);
			setState(243);
			validation();
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
		public TerminalNode STRING() { return getToken(hclParser.STRING, 0); }
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
		enterRule(_localctx, 62, RULE_validation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
			match(T__3);
			setState(246);
			match(T__27);
			setState(247);
			match(T__8);
			setState(249); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(248);
				condition();
				}
				}
				setState(251); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEANOP) | (1L << BOOLEAN) | (1L << IDENTIFIER) | (1L << STRING) | (1L << NUMBER))) != 0) );
			setState(253);
			match(T__28);
			setState(254);
			match(T__8);
			setState(255);
			match(STRING);
			setState(256);
			match(T__4);
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
		public TerminalNode STRING() { return getToken(hclParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(hclParser.NUMBER, 0); }
		public TerminalNode BOOLEAN() { return getToken(hclParser.BOOLEAN, 0); }
		public TerminalNode BOOLEANOP() { return getToken(hclParser.BOOLEANOP, 0); }
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
		enterRule(_localctx, 64, RULE_condition);
		try {
			setState(263);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(258);
				match(STRING);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(259);
				match(NUMBER);
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 3);
				{
				setState(260);
				match(BOOLEAN);
				}
				break;
			case BOOLEANOP:
				enterOuterAlt(_localctx, 4);
				{
				setState(261);
				match(BOOLEANOP);
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 5);
				{
				setState(262);
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
		public TerminalNode STRING() { return getToken(hclParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(hclParser.NUMBER, 0); }
		public TerminalNode BOOLEAN() { return getToken(hclParser.BOOLEAN, 0); }
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public ComplexExpressionContext complexExpression() {
			return getRuleContext(ComplexExpressionContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_expression);
		try {
			setState(271);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(265);
				match(STRING);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(266);
				match(NUMBER);
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 3);
				{
				setState(267);
				match(BOOLEAN);
				}
				break;
			case T__31:
				enterOuterAlt(_localctx, 4);
				{
				setState(268);
				array();
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 5);
				{
				setState(269);
				object();
				}
				break;
			case T__33:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 6);
				{
				setState(270);
				complexExpression(0);
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

	public static class FunctionCallContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(hclParser.IDENTIFIER, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_functionCall);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(273);
			match(IDENTIFIER);
			setState(274);
			match(T__24);
			setState(275);
			expression();
			setState(280);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(276);
					match(T__29);
					setState(277);
					expression();
					}
					} 
				}
				setState(282);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			}
			setState(284);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__29) {
				{
				setState(283);
				match(T__29);
				}
			}

			setState(286);
			match(T__21);
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
		public List<TerminalNode> IDENTIFIER() { return getTokens(hclParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(hclParser.IDENTIFIER, i);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public List<ComplexExpressionContext> complexExpression() {
			return getRuleContexts(ComplexExpressionContext.class);
		}
		public ComplexExpressionContext complexExpression(int i) {
			return getRuleContext(ComplexExpressionContext.class,i);
		}
		public IndexContext index() {
			return getRuleContext(IndexContext.class,0);
		}
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
		int _startState = 70;
		enterRecursionRule(_localctx, 70, RULE_complexExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(299);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				{
				setState(289);
				match(IDENTIFIER);
				}
				break;
			case 2:
				{
				setState(290);
				match(T__33);
				setState(294);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__34 || _la==IDENTIFIER) {
					{
					{
					setState(291);
					_la = _input.LA(1);
					if ( !(_la==T__34 || _la==IDENTIFIER) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					setState(296);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(297);
				match(T__35);
				}
				break;
			case 3:
				{
				setState(298);
				functionCall();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(314);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(312);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
					case 1:
						{
						_localctx = new ComplexExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_complexExpression);
						setState(301);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(302);
						match(T__30);
						setState(303);
						complexExpression(6);
						}
						break;
					case 2:
						{
						_localctx = new ComplexExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_complexExpression);
						setState(304);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(305);
						match(T__31);
						setState(306);
						index();
						setState(307);
						match(T__32);
						}
						break;
					case 3:
						{
						_localctx = new ComplexExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_complexExpression);
						setState(309);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(310);
						match(T__30);
						setState(311);
						index();
						}
						break;
					}
					} 
				}
				setState(316);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
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
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ArrayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array; }
	}

	public final ArrayContext array() throws RecognitionException {
		ArrayContext _localctx = new ArrayContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_array);
		int _la;
		try {
			int _alt;
			setState(333);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(317);
				match(T__31);
				setState(318);
				match(T__32);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(319);
				match(T__31);
				setState(320);
				expression();
				setState(325);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(321);
						match(T__29);
						setState(322);
						expression();
						}
						} 
					}
					setState(327);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
				}
				setState(329);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__29) {
					{
					setState(328);
					match(T__29);
					}
				}

				setState(331);
				match(T__32);
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
		public TerminalNode NUMBER() { return getToken(hclParser.NUMBER, 0); }
		public IndexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_index; }
	}

	public final IndexContext index() throws RecognitionException {
		IndexContext _localctx = new IndexContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_index);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			_la = _input.LA(1);
			if ( !(_la==T__36 || _la==NUMBER) ) {
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
		case 35:
			return complexExpression_sempred((ComplexExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean complexExpression_sempred(ComplexExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 4);
		case 2:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\62\u0154\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\3\2\6\2P\n\2\r\2\16\2Q\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\5\3Z\n\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6"+
		"\3\6\3\7\3\7\3\7\3\7\3\7\3\7\6\7m\n\7\r\7\16\7n\3\7\3\7\3\b\3\b\3\b\3"+
		"\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r"+
		"\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\6\16\u0092\n\16\r"+
		"\16\16\16\u0093\3\16\3\16\3\17\3\17\3\17\3\17\3\20\3\20\3\21\3\21\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\6\22\u00a6\n\22\r\22\16\22\u00a7\3\22\3\22\3"+
		"\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\26\3\26\3"+
		"\26\3\26\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3"+
		"\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3"+
		"\32\5\32\u00d7\n\32\3\33\3\33\3\33\3\33\3\33\6\33\u00de\n\33\r\33\16\33"+
		"\u00df\3\33\3\33\5\33\u00e4\n\33\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3"+
		"\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3 \3 \3 \3!\3!\3!\3!\6!\u00fc\n"+
		"!\r!\16!\u00fd\3!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3\"\5\"\u010a\n\"\3#\3#"+
		"\3#\3#\3#\3#\5#\u0112\n#\3$\3$\3$\3$\3$\7$\u0119\n$\f$\16$\u011c\13$\3"+
		"$\5$\u011f\n$\3$\3$\3%\3%\3%\3%\7%\u0127\n%\f%\16%\u012a\13%\3%\3%\5%"+
		"\u012e\n%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\7%\u013b\n%\f%\16%\u013e\13"+
		"%\3&\3&\3&\3&\3&\3&\7&\u0146\n&\f&\16&\u0149\13&\3&\5&\u014c\n&\3&\3&"+
		"\5&\u0150\n&\3\'\3\'\3\'\2\3H(\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36"+
		" \"$&(*,.\60\62\64\668:<>@BDFHJL\2\5\5\2\21\21\24\24++\4\2%%++\4\2\'\'"+
		"--\2\u0160\2O\3\2\2\2\4Y\3\2\2\2\6[\3\2\2\2\b_\3\2\2\2\nc\3\2\2\2\ff\3"+
		"\2\2\2\16r\3\2\2\2\20u\3\2\2\2\22y\3\2\2\2\24}\3\2\2\2\26\u0080\3\2\2"+
		"\2\30\u0085\3\2\2\2\32\u0089\3\2\2\2\34\u0097\3\2\2\2\36\u009b\3\2\2\2"+
		" \u009d\3\2\2\2\"\u009f\3\2\2\2$\u00ab\3\2\2\2&\u00af\3\2\2\2(\u00b3\3"+
		"\2\2\2*\u00b7\3\2\2\2,\u00bb\3\2\2\2.\u00bf\3\2\2\2\60\u00c3\3\2\2\2\62"+
		"\u00d6\3\2\2\2\64\u00e3\3\2\2\2\66\u00e5\3\2\2\28\u00e9\3\2\2\2:\u00ec"+
		"\3\2\2\2<\u00f0\3\2\2\2>\u00f4\3\2\2\2@\u00f7\3\2\2\2B\u0109\3\2\2\2D"+
		"\u0111\3\2\2\2F\u0113\3\2\2\2H\u012d\3\2\2\2J\u014f\3\2\2\2L\u0151\3\2"+
		"\2\2NP\5\4\3\2ON\3\2\2\2PQ\3\2\2\2QO\3\2\2\2QR\3\2\2\2R\3\3\2\2\2SZ\5"+
		"\b\5\2TZ\5\n\6\2UZ\5\26\f\2VZ\5\30\r\2WZ\5\34\17\2XZ\5\6\4\2YS\3\2\2\2"+
		"YT\3\2\2\2YU\3\2\2\2YV\3\2\2\2YW\3\2\2\2YX\3\2\2\2Z\5\3\2\2\2[\\\7\3\2"+
		"\2\\]\5\36\20\2]^\5\64\33\2^\7\3\2\2\2_`\7\4\2\2`a\5\36\20\2ab\5\64\33"+
		"\2b\t\3\2\2\2cd\7\5\2\2de\5\f\7\2e\13\3\2\2\2fl\7\6\2\2gm\5\16\b\2hm\5"+
		"\20\t\2im\5\22\n\2jm\5\24\13\2km\5\64\33\2lg\3\2\2\2lh\3\2\2\2li\3\2\2"+
		"\2lj\3\2\2\2lk\3\2\2\2mn\3\2\2\2nl\3\2\2\2no\3\2\2\2op\3\2\2\2pq\7\7\2"+
		"\2q\r\3\2\2\2rs\7\b\2\2st\5\64\33\2t\17\3\2\2\2uv\7\t\2\2vw\5\36\20\2"+
		"wx\5\64\33\2x\21\3\2\2\2yz\7\n\2\2z{\7\13\2\2{|\7,\2\2|\23\3\2\2\2}~\7"+
		"\f\2\2~\177\5\64\33\2\177\25\3\2\2\2\u0080\u0081\7\r\2\2\u0081\u0082\5"+
		" \21\2\u0082\u0083\5\36\20\2\u0083\u0084\5\64\33\2\u0084\27\3\2\2\2\u0085"+
		"\u0086\7\16\2\2\u0086\u0087\5\36\20\2\u0087\u0088\5\32\16\2\u0088\31\3"+
		"\2\2\2\u0089\u0091\7\6\2\2\u008a\u0092\5.\30\2\u008b\u0092\5:\36\2\u008c"+
		"\u0092\5<\37\2\u008d\u0092\5> \2\u008e\u0092\5,\27\2\u008f\u0092\5\60"+
		"\31\2\u0090\u0092\5\64\33\2\u0091\u008a\3\2\2\2\u0091\u008b\3\2\2\2\u0091"+
		"\u008c\3\2\2\2\u0091\u008d\3\2\2\2\u0091\u008e\3\2\2\2\u0091\u008f\3\2"+
		"\2\2\u0091\u0090\3\2\2\2\u0092\u0093\3\2\2\2\u0093\u0091\3\2\2\2\u0093"+
		"\u0094\3\2\2\2\u0094\u0095\3\2\2\2\u0095\u0096\7\7\2\2\u0096\33\3\2\2"+
		"\2\u0097\u0098\7\17\2\2\u0098\u0099\5\36\20\2\u0099\u009a\5\"\22\2\u009a"+
		"\35\3\2\2\2\u009b\u009c\7,\2\2\u009c\37\3\2\2\2\u009d\u009e\7,\2\2\u009e"+
		"!\3\2\2\2\u009f\u00a5\7\6\2\2\u00a0\u00a6\5$\23\2\u00a1\u00a6\5&\24\2"+
		"\u00a2\u00a6\5*\26\2\u00a3\u00a6\5(\25\2\u00a4\u00a6\5\64\33\2\u00a5\u00a0"+
		"\3\2\2\2\u00a5\u00a1\3\2\2\2\u00a5\u00a2\3\2\2\2\u00a5\u00a3\3\2\2\2\u00a5"+
		"\u00a4\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00a5\3\2\2\2\u00a7\u00a8\3\2"+
		"\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00aa\7\7\2\2\u00aa#\3\2\2\2\u00ab\u00ac"+
		"\7\20\2\2\u00ac\u00ad\7\13\2\2\u00ad\u00ae\5D#\2\u00ae%\3\2\2\2\u00af"+
		"\u00b0\7\21\2\2\u00b0\u00b1\7\13\2\2\u00b1\u00b2\7,\2\2\u00b2\'\3\2\2"+
		"\2\u00b3\u00b4\7\22\2\2\u00b4\u00b5\7\13\2\2\u00b5\u00b6\5J&\2\u00b6)"+
		"\3\2\2\2\u00b7\u00b8\7\23\2\2\u00b8\u00b9\7\13\2\2\u00b9\u00ba\7)\2\2"+
		"\u00ba+\3\2\2\2\u00bb\u00bc\7\23\2\2\u00bc\u00bd\7\13\2\2\u00bd\u00be"+
		"\7)\2\2\u00be-\3\2\2\2\u00bf\u00c0\7\24\2\2\u00c0\u00c1\7\13\2\2\u00c1"+
		"\u00c2\5\62\32\2\u00c2/\3\2\2\2\u00c3\u00c4\7\25\2\2\u00c4\u00c5\7\13"+
		"\2\2\u00c5\u00c6\7)\2\2\u00c6\61\3\2\2\2\u00c7\u00d7\7*\2\2\u00c8\u00d7"+
		"\7\26\2\2\u00c9\u00ca\7\27\2\2\u00ca\u00cb\5\62\32\2\u00cb\u00cc\7\30"+
		"\2\2\u00cc\u00d7\3\2\2\2\u00cd\u00ce\7\31\2\2\u00ce\u00cf\5\62\32\2\u00cf"+
		"\u00d0\7\30\2\2\u00d0\u00d7\3\2\2\2\u00d1\u00d2\7\32\2\2\u00d2\u00d3\7"+
		"\33\2\2\u00d3\u00d4\5\64\33\2\u00d4\u00d5\7\30\2\2\u00d5\u00d7\3\2\2\2"+
		"\u00d6\u00c7\3\2\2\2\u00d6\u00c8\3\2\2\2\u00d6\u00c9\3\2\2\2\u00d6\u00cd"+
		"\3\2\2\2\u00d6\u00d1\3\2\2\2\u00d7\63\3\2\2\2\u00d8\u00d9\7\6\2\2\u00d9"+
		"\u00e4\7\7\2\2\u00da\u00dd\7\6\2\2\u00db\u00de\58\35\2\u00dc\u00de\5\66"+
		"\34\2\u00dd\u00db\3\2\2\2\u00dd\u00dc\3\2\2\2\u00de\u00df\3\2\2\2\u00df"+
		"\u00dd\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e2\7\7"+
		"\2\2\u00e2\u00e4\3\2\2\2\u00e3\u00d8\3\2\2\2\u00e3\u00da\3\2\2\2\u00e4"+
		"\65\3\2\2\2\u00e5\u00e6\t\2\2\2\u00e6\u00e7\7\13\2\2\u00e7\u00e8\5D#\2"+
		"\u00e8\67\3\2\2\2\u00e9\u00ea\t\2\2\2\u00ea\u00eb\5\64\33\2\u00eb9\3\2"+
		"\2\2\u00ec\u00ed\7\21\2\2\u00ed\u00ee\7\13\2\2\u00ee\u00ef\7,\2\2\u00ef"+
		";\3\2\2\2\u00f0\u00f1\7\34\2\2\u00f1\u00f2\7\13\2\2\u00f2\u00f3\5D#\2"+
		"\u00f3=\3\2\2\2\u00f4\u00f5\7\35\2\2\u00f5\u00f6\5@!\2\u00f6?\3\2\2\2"+
		"\u00f7\u00f8\7\6\2\2\u00f8\u00f9\7\36\2\2\u00f9\u00fb\7\13\2\2\u00fa\u00fc"+
		"\5B\"\2\u00fb\u00fa\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd\u00fb\3\2\2\2\u00fd"+
		"\u00fe\3\2\2\2\u00fe\u00ff\3\2\2\2\u00ff\u0100\7\37\2\2\u0100\u0101\7"+
		"\13\2\2\u0101\u0102\7,\2\2\u0102\u0103\7\7\2\2\u0103A\3\2\2\2\u0104\u010a"+
		"\7,\2\2\u0105\u010a\7-\2\2\u0106\u010a\7)\2\2\u0107\u010a\7(\2\2\u0108"+
		"\u010a\5F$\2\u0109\u0104\3\2\2\2\u0109\u0105\3\2\2\2\u0109\u0106\3\2\2"+
		"\2\u0109\u0107\3\2\2\2\u0109\u0108\3\2\2\2\u010aC\3\2\2\2\u010b\u0112"+
		"\7,\2\2\u010c\u0112\7-\2\2\u010d\u0112\7)\2\2\u010e\u0112\5J&\2\u010f"+
		"\u0112\5\64\33\2\u0110\u0112\5H%\2\u0111\u010b\3\2\2\2\u0111\u010c\3\2"+
		"\2\2\u0111\u010d\3\2\2\2\u0111\u010e\3\2\2\2\u0111\u010f\3\2\2\2\u0111"+
		"\u0110\3\2\2\2\u0112E\3\2\2\2\u0113\u0114\7+\2\2\u0114\u0115\7\33\2\2"+
		"\u0115\u011a\5D#\2\u0116\u0117\7 \2\2\u0117\u0119\5D#\2\u0118\u0116\3"+
		"\2\2\2\u0119\u011c\3\2\2\2\u011a\u0118\3\2\2\2\u011a\u011b\3\2\2\2\u011b"+
		"\u011e\3\2\2\2\u011c\u011a\3\2\2\2\u011d\u011f\7 \2\2\u011e\u011d\3\2"+
		"\2\2\u011e\u011f\3\2\2\2\u011f\u0120\3\2\2\2\u0120\u0121\7\30\2\2\u0121"+
		"G\3\2\2\2\u0122\u0123\b%\1\2\u0123\u012e\7+\2\2\u0124\u0128\7$\2\2\u0125"+
		"\u0127\t\3\2\2\u0126\u0125\3\2\2\2\u0127\u012a\3\2\2\2\u0128\u0126\3\2"+
		"\2\2\u0128\u0129\3\2\2\2\u0129\u012b\3\2\2\2\u012a\u0128\3\2\2\2\u012b"+
		"\u012e\7&\2\2\u012c\u012e\5F$\2\u012d\u0122\3\2\2\2\u012d\u0124\3\2\2"+
		"\2\u012d\u012c\3\2\2\2\u012e\u013c\3\2\2\2\u012f\u0130\f\7\2\2\u0130\u0131"+
		"\7!\2\2\u0131\u013b\5H%\b\u0132\u0133\f\6\2\2\u0133\u0134\7\"\2\2\u0134"+
		"\u0135\5L\'\2\u0135\u0136\7#\2\2\u0136\u013b\3\2\2\2\u0137\u0138\f\5\2"+
		"\2\u0138\u0139\7!\2\2\u0139\u013b\5L\'\2\u013a\u012f\3\2\2\2\u013a\u0132"+
		"\3\2\2\2\u013a\u0137\3\2\2\2\u013b\u013e\3\2\2\2\u013c\u013a\3\2\2\2\u013c"+
		"\u013d\3\2\2\2\u013dI\3\2\2\2\u013e\u013c\3\2\2\2\u013f\u0140\7\"\2\2"+
		"\u0140\u0150\7#\2\2\u0141\u0142\7\"\2\2\u0142\u0147\5D#\2\u0143\u0144"+
		"\7 \2\2\u0144\u0146\5D#\2\u0145\u0143\3\2\2\2\u0146\u0149\3\2\2\2\u0147"+
		"\u0145\3\2\2\2\u0147\u0148\3\2\2\2\u0148\u014b\3\2\2\2\u0149\u0147\3\2"+
		"\2\2\u014a\u014c\7 \2\2\u014b\u014a\3\2\2\2\u014b\u014c\3\2\2\2\u014c"+
		"\u014d\3\2\2\2\u014d\u014e\7#\2\2\u014e\u0150\3\2\2\2\u014f\u013f\3\2"+
		"\2\2\u014f\u0141\3\2\2\2\u0150K\3\2\2\2\u0151\u0152\t\4\2\2\u0152M\3\2"+
		"\2\2\32QYln\u0091\u0093\u00a5\u00a7\u00d6\u00dd\u00df\u00e3\u00fd\u0109"+
		"\u0111\u011a\u011e\u0128\u012d\u013a\u013c\u0147\u014b\u014f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}