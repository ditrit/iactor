grammar hcl;

file
  : directive+
  ;

directive
  : providerDirective
  | terraformDirective
  | resourceDirective
  | variableDirective
  | outputDirective
  | moduleDirective
  ;

moduleDirective
  : 'module' name object
  ;

providerDirective
  : 'provider' name object
  ;

terraformDirective
  : 'terraform' terraformBlock
  ;

terraformBlock
  : '{' (terraformCloud|terraformBackEnd|terraformVersion|terraformProviders|object)+ '}'
  ;

terraformCloud
  : 'cloud' object
  ;
  
terraformBackEnd
  : 'backend' name object
  ;
  
terraformVersion
  : 'required_version' '=' STRING
  ;
  
terraformProviders
  : 'required_providers' object
  ;
  
resourceDirective
  : 'resource' resourceType name object
  ;

variableDirective
  : 'variable' name variableBlock
  ;

variableBlock
  : '{' (variableType|variableDescription|variableDefault|variableValidation|variableSensitive|variableNullabl|object)+ '}'
  ;

outputDirective
  : 'output' name outputBlock
  ;

name
  : STRING
  ;

resourceType
  : STRING
  ;

outputBlock
  : '{' (outputValue|outputDescription|outputSensitive|outputDependsOn|object)+ '}'
  ;

outputValue
  : 'value' '=' expression
  ;

outputDescription
  : 'description' '=' STRING
  ;

outputDependsOn
  : 'depends_on' '=' array
  ;

outputSensitive
  : 'sensitive' '=' BOOLEAN
  ;

variableSensitive
  : 'sensitive' '=' BOOLEAN
  ;

variableType
  : 'type' '=' type
  ;

variableNullabl
  : 'nullable' '=' BOOLEAN
  ;

type
  : TYPE
  | 'list'
  | 'list(' type ')'
  | 'map(' type ')'
  | 'object' '(' object ')'
  ;

object
  : '{' '}'
  | '{' (complexField|field)+ '}'
  ;

field
  : ('type'|'description'|IDENTIFIER) '=' expression
  ;

complexField
  : ('type'|'description'|IDENTIFIER) object
  ;

variableDescription
  : 'description' '=' STRING
  ;

variableDefault
  : 'default' '=' expression
  ;

variableValidation
  : 'validation' validation
  ;

validation
  : '{' 'condition' '=' condition+
        'error_message' '=' STRING '}'
  ;

condition
  : STRING
  | NUMBER
  | BOOLEAN
  | BOOLEANOP
  | functionCall
  ;

expression
  : STRING
  | NUMBER
  | BOOLEAN
  | array
  | object
  | complexExpression
  ;

functionCall
  : IDENTIFIER '(' expression ( ',' expression )* ','? ')'
  ;

complexExpression
  : IDENTIFIER
  | complexExpression '.' complexExpression // attribute access
  | complexExpression '[' index ']' // indexed array access
  | complexExpression '.' index // indexed attribute access
  | '<<EOF' (IDENTIFIER|'-')* 'EOF'
  | functionCall
  ;

array
  : '[' ']'
  | '[' expression ( ',' expression )* ','? ']'
  ;

index
  : NUMBER
  | '*'
  ;

BOOLEANOP
  : '&'
  | '|'
  | '>'
  | '<'
  | '='
  | '=='
  | '*'
  | '-'
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
    : [a-zA-Z$_] // these are the "java letters" below 0x7F
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