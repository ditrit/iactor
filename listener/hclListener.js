// Generated from hcl.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import file from './file.js'
import prog from './prog.js'
import directive from './directive.js'

// This class defines a complete listener for a parse tree produced by hclParser.
export default class hclListener extends antlr4.tree.ParseTreeListener {
	
	constructor(prog) { 
		super()
		this.prog = prog
        this.errors = []
    }

	visitTerminal(node) {
	}

	visitErrorNode(node) {
	}

	enterEveryRule(node) {
	}

	exitEveryRule(node) {
		this.exitDirective(this.prog)
	}

	exitMain(ctx) {
		prog.exit_main();
	}

	// Enter a parse tree produced by hclParser#file.
	enterFile(ctx) {
	}

	// Exit a parse tree produced by hclParser#file.
	exitFile(ctx) {
		file.exit_file(this.prog)
	}


	// Enter a parse tree produced by hclParser#directive.
	enterDirective(ctx) {
	}

	// Exit a parse tree produced by hclParser#directive.
	exitDirective(ctx) {
		directive.exit_direcrive(ctx)
	}


	// Enter a parse tree produced by hclParser#providerDirective.
	enterProviderDirective(ctx) {
	}

	// Exit a parse tree produced by hclParser#providerDirective.
	exitProviderDirective(ctx) {
	}


	// Enter a parse tree produced by hclParser#terraformDirective.
	enterTerraformDirective(ctx) {
	}

	// Exit a parse tree produced by hclParser#terraformDirective.
	exitTerraformDirective(ctx) {
	}


	// Enter a parse tree produced by hclParser#resourceDirective.
	enterResourceDirective(ctx) {
	}

	// Exit a parse tree produced by hclParser#resourceDirective.
	exitResourceDirective(ctx) {
	}


	// Enter a parse tree produced by hclParser#variableDirective.
	enterVariableDirective(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableDirective.
	exitVariableDirective(ctx) {
	}


	// Enter a parse tree produced by hclParser#variableBlock.
	enterVariableBlock(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableBlock.
	exitVariableBlock(ctx) {
	}


	// Enter a parse tree produced by hclParser#outputDirective.
	enterOutputDirective(ctx) {
	}

	// Exit a parse tree produced by hclParser#outputDirective.
	exitOutputDirective(ctx) {
	}


	// Enter a parse tree produced by hclParser#outputBlock.
	enterOutputBlock(ctx) {
	}

	// Exit a parse tree produced by hclParser#outputBlock.
	exitOutputBlock(ctx) {
	}


	// Enter a parse tree produced by hclParser#outputValue.
	enterOutputValue(ctx) {
	}

	// Exit a parse tree produced by hclParser#outputValue.
	exitOutputValue(ctx) {
	}


	// Enter a parse tree produced by hclParser#outputDescription.
	enterOutputDescription(ctx) {
	}

	// Exit a parse tree produced by hclParser#outputDescription.
	exitOutputDescription(ctx) {
	}


	// Enter a parse tree produced by hclParser#outputSensitive.
	enterOutputSensitive(ctx) {
	}

	// Exit a parse tree produced by hclParser#outputSensitive.
	exitOutputSensitive(ctx) {
	}


	// Enter a parse tree produced by hclParser#variableType.
	enterVariableType(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableType.
	exitVariableType(ctx) {
	}


	// Enter a parse tree produced by hclParser#type.
	enterType(ctx) {
	}

	// Exit a parse tree produced by hclParser#type.
	exitType(ctx) {
	}


	// Enter a parse tree produced by hclParser#object.
	enterObject(ctx) {
	}

	// Exit a parse tree produced by hclParser#object.
	exitObject(ctx) {
	}


	// Enter a parse tree produced by hclParser#field.
	enterField(ctx) {
	}

	// Exit a parse tree produced by hclParser#field.
	exitField(ctx) {
	}


	// Enter a parse tree produced by hclParser#variableDescription.
	enterVariableDescription(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableDescription.
	exitVariableDescription(ctx) {
	}


	// Enter a parse tree produced by hclParser#variableDefault.
	enterVariableDefault(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableDefault.
	exitVariableDefault(ctx) {
	}


	// Enter a parse tree produced by hclParser#expression.
	enterExpression(ctx) {
	}

	// Exit a parse tree produced by hclParser#expression.
	exitExpression(ctx) {
	}


	// Enter a parse tree produced by hclParser#functionCall.
	enterFunctionCall(ctx) {
	}

	// Exit a parse tree produced by hclParser#functionCall.
	exitFunctionCall(ctx) {
	}


	// Enter a parse tree produced by hclParser#complexExpression.
	enterComplexExpression(ctx) {
	}

	// Exit a parse tree produced by hclParser#complexExpression.
	exitComplexExpression(ctx) {
	}


	// Enter a parse tree produced by hclParser#array.
	enterArray(ctx) {
	}

	// Exit a parse tree produced by hclParser#array.
	exitArray(ctx) {
	}


	// Enter a parse tree produced by hclParser#index.
	enterIndex(ctx) {
	}

	// Exit a parse tree produced by hclParser#index.
	exitIndex(ctx) {
	}
}