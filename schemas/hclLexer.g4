lexer grammar hclLexer;

MODULE : 'module';

PROVIDER : 'provider';

TERRAFORM : 'terraform';

CLOUD : 'cloud';

BACKEND : 'backend';

VERSION : 'required_version';

PROVIDERS : 'required_providers';

RESOURCE : 'resource';

VARIABLE : 'variable';

OUTPUT : 'output';

VALUE : 'value';

DESCRIPTION : 'description';

DEPENDSON : 'depends_on';

SENSITIVE : 'sensitive';

VARIABLETYPE : 'type';

NULLABLE : 'nullable';

LIST : 'list';

MAP : 'map';

OBJECT : 'object';

DEFAULT : 'default';

VALIDATION : 'validation';

CONDITION : 'condition';

ERROR : 'error_message';

AO : '{';

AF : '}';

EQUAL : '=';

PO : '(';

PF : ')';

CO : '[';

CF : ']';

VIRG : ',';

POINT : '.';

TIRET : '-';

MULT : '*';

BOOLEANOP
  : '&'
  | '|'
  | '>'
  | '<'
  | EQUAL
  | '=='
  | MULT
  | TIRET
  | '/'
  | '+'
  ;

BOOLEAN
  : 'true'
  | '"true"'
  | 'false'
  | '"false"'
  ;

TYPE
  : 'string'
  | '"string"'
  | 'number'
  | '"number"'
  | 'bool'
  | '"bool"'
  | 'any'
  ;

IDENTIFIER
  : Letter LetterOrDigit*
  ;

fragment LetterOrDigit
    : Letter
    | [0-9]
    ;
fragment Letter
    : [a-zA-Z$_.] // these are the "java letters" below 0x7F
    | ~[\u0000-\u007F\uD800-\uDBFF] // covers all characters above 0x7F which are not a surrogate
    | [\uD800-\uDBFF] [\uDC00-\uDFFF] // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
    ;

/**
 * STRING Lexer Rule comes from the JSON grammar
 * https://github.com/antlr/grammars-v4/blob/master/json/JSON.g4
 */
STRING
   : '"' (ESC | SAFECODEPOINT)* '"'
   ;

fragment ESC
   : '\\' (["\\/bfnrt] | UNICODE)
   ;
fragment UNICODE
   : 'u' HEX HEX HEX HEX
   ;
fragment HEX
   : [0-9a-fA-F]
   ;
fragment SAFECODEPOINT
   : ~ ["\\\u0000-\u001F]
   ;

NUMBER
   : '0' | [1-9] [0-9]*
   ;

// comments and whitespaces
COMMENT:      '/*' .*? '*/' -> channel(HIDDEN);
LINE_COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);
HAS_COMMENT:  '#' ~ [\r\n]* -> channel(HIDDEN);
WS:           [ \t\r\n]+    -> channel(HIDDEN); // skip spaces, tabs, newlines

OPEN : '<<EOF' -> pushMode(SCRIPT);

mode SCRIPT;

IDENTIFIERS
  : [a-z]
  ;

WSS
  : WS;

fragment HEXS
   : HEX
   ;
fragment SAFECODEPOINTS
   : SAFECODEPOINT
   ;

NUMBERS
   : NUMBER
   ;

AUTRE 
  : '='
  | '/'
  | '#'
  | '!'
  | '-'
  | '"'
  | '.'
  | '$'
  | '{'
  | '}'
  | '_'
  ;

CLOSE : 'EOF' -> popMode;