parser grammar hclParser;

options { tokenVocab=hclLexer; }

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
  | 'list' '(' type ')'
  | 'map' '(' type ')'
  | 'object' '(' object ')'
  ;

object
  : '{' '}'
  | '{' (complexField|field)+ '}'
  ;

field
  : ('type'|'description'|IDENTIFIER) '=' expression+
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
  : NUMBER
  | BOOLEAN
  | array
  | object
  | complexExpression
  | STRING
  ;

functionCall
  : IDENTIFIER '(' expression ( ',' expression )* ','? ')'
  ;

complexExpression
  : IDENTIFIER
  | complexExpression '.' complexExpression // attribute access
  | complexExpression '[' index ']' // indexed array access
  | complexExpression '.' index // indexed attribute access
  | '<<EOF' (IDENTIFIERS|AUTRE|WSS+)+ 'EOF'
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