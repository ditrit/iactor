// Generated from hcl.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import file from './file.js'
import field from './field.js'
import directive from './directive.js'
import terraform_directive from './terraform_directive.js'
import ressource_directive from './ressource_directive.js'
import output_directive from './output_directive.js'
import variable_directive from './variable_directive.js'
import variable_description from './variable_description.js'
import variable_type from './variable_type.js'
import variable_block from './variable_block.js'
import variable_default from './variable_default.js'
import provider_directive from './provider_directive.js'
import expression from './expression.js';
import object from './object.js';

// This class defines a complete listener for a parse tree produced by hclParser.
export default class hclListener extends antlr4.tree.ParseTreeListener {
	
	constructor(prog) { 
		super()
		this.prog = prog
        this.errors = []
    }

	// Enter a parse tree produced by hclParser#file.
	enterFile(ctx) {
	}

	// Exit a parse tree produced by hclParser#file.
	exitFile(ctx) {
		file.exit_file({ctx : ctx, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#directive.
	enterDirective(ctx) {
	}

	// Exit a parse tree produced by hclParser#directive.
	exitDirective(ctx) {
		directive.exit_direcrive({ctx : ctx, prog: this.prog})
	}


	// Enter a parse tree produced by hclParser#providerDirective.
	enterProviderDirective(ctx) {
	}

	// Exit a parse tree produced by hclParser#providerDirective.
	exitProviderDirective(ctx) {
		provider_directive.exit_provider_directive({ctx : ctx, prog: this.prog})
	}


	// Enter a parse tree produced by hclParser#terraformDirective.
	enterTerraformDirective(ctx) {
	}

	// Exit a parse tree produced by hclParser#terraformDirective.
	exitTerraformDirective(ctx) {
		terraform_directive.exit_terraform_directive({ctx : ctx, prog: this.prog})
	}


	// Enter a parse tree produced by hclParser#resourceDirective.
	enterResourceDirective(ctx) {
	}

	// Exit a parse tree produced by hclParser#resourceDirective.
	exitResourceDirective(ctx) {
		ressource_directive.exit_ressource_directive({ctx : ctx, prog: this.prog})
	}


	// Enter a parse tree produced by hclParser#variableDirective.
	enterVariableDirective(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableDirective.
	exitVariableDirective(ctx) {
		variable_directive.exit_variable_directive({ctx : ctx, prog: this.prog})
	}


	// Enter a parse tree produced by hclParser#variableBlock.
	enterVariableBlock(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableBlock.
	exitVariableBlock(ctx) {
		variable_block.exit_variable_block({ctx : ctx, prog: this.prog})
	}


	// Enter a parse tree produced by hclParser#outputDirective.
	enterOutputDirective(ctx) {
	}

	// Exit a parse tree produced by hclParser#outputDirective.
	exitOutputDirective(ctx) {
		output_directive.exit_output_directive({ctx : ctx, prog: this.prog})
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
		variable_type.exit_variable_type({ctx : ctx, prog: this.prog})
	}


	// Enter a parse tree produced by hclParser#type.
	enterType(ctx) {
	}

	// Exit a parse tree produced by hclParser#type.
	exitType(ctx) {
	}


	// Enter a parse tree produced by hclParser#object.
	enterObject(ctx) {
		object.exit_object({ctx : ctx, prog: this.prog})
	}

	// Exit a parse tree produced by hclParser#object.
	exitObject(ctx) {
	}


	// Enter a parse tree produced by hclParser#field.
	enterField(ctx) {
	}

	// Exit a parse tree produced by hclParser#field.1
	exitField(ctx) {
		field.exit_field({ctx : ctx, prog: this.prog})
	}


	// Enter a parse tree produced by hclParser#variableDescription.
	enterVariableDescription(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableDescription.
	exitVariableDescription(ctx) {
		variable_description.exit_variable_description({ctx : ctx, prog: this.prog})
	}


	// Enter a parse tree produced by hclParser#variableDefault.
	enterVariableDefault(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableDefault.
	exitVariableDefault(ctx) {
		variable_default.exit_variable_default({ctx : ctx, prog: this.prog})
	}


	// Enter a parse tree produced by hclParser#expression.
	enterExpression(ctx) {
	}

	// Exit a parse tree produced by hclParser#expression.
	exitExpression(ctx) {
		expression.exit_expression({ctx : ctx, prog: this.prog})
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