// Generated from hcl.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';

import file from './file.js'
import field from './field.js'
import expression from './expression.js'
import complex_field from './complex_field.js'
import object from './object.js';
import name from './name.js';
import resource_type from './resource_type.js';
import module_directive from './module_directive.js';

import terraform_directive from './terraform_directive.js'
import terraform_block from './terraform_block.js'
import terraform_cloud from './terraform_cloud.js'
import terraform_backend from './terraform_backend.js'
import terraform_providers from './terraform_providers.js'
import terraform_version from './terraform_version.js'

import resource_directive from './resource_directive.js'

import output_directive from './output_directive.js'
import output_block from './output_block.js'
import output_sensitive from './output_sensitive.js'
import output_value from './output_value.js'
import output_description from './output_description.js'

import variable_directive from './variable_directive.js'
import variable_description from './variable_description.js'
import variable_type from './variable_type.js'
import variable_block from './variable_block.js'
import variable_default from './variable_default.js'

import provider_directive from './provider_directive.js'

// This class defines a complete listener for a parse tree produced by hclParser.
export default class hclListener extends antlr4.tree.ParseTreeListener {
	
	constructor(prog) { 
		super()
		this.prog = prog
    }

	// Enter a parse tree produced by hclParser#file.
	enterFile(ctx) {
	}

	// Exit a parse tree produced by hclParser#file.
	exitFile(ctx) {
		file.exit_file({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#directive.
	enterDirective(ctx) {
	}

	// Exit a parse tree produced by hclParser#directive.
	exitDirective(ctx) {
	}
	
	// Enter a parse tree produced by hclParser#moduleDirective.
	enterModuleDirective(ctx) {
		module_directive.enter_module_directive({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Exit a parse tree produced by hclParser#moduleDirective.
	exitModuleDirective(ctx) {
		module_directive.exit_module_directive({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#providerDirective.
	enterProviderDirective(ctx) {
		provider_directive.enter_provider_directive({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Exit a parse tree produced by hclParser#providerDirective.
	exitProviderDirective(ctx) {
		provider_directive.exit_provider_directive({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#terraformDirective.
	enterTerraformDirective(ctx) {
		terraform_directive.enter_terraform_directive({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Exit a parse tree produced by hclParser#terraformDirective.
	exitTerraformDirective(ctx) {
		terraform_directive.exit_terraform_directive({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#terraformBlock.
	enterTerraformBlock(ctx) {
		terraform_block.enter_terraform_block({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Exit a parse tree produced by hclParser#terraformBlock.
	exitTerraformBlock(ctx) {
		terraform_block.exit_terraform_block({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#terraformCloud.
	enterTerraformCloud(ctx) {
	}

	// Exit a parse tree produced by hclParser#terraformCloud.
	exitTerraformCloud(ctx) {
		terraform_cloud.exit_terraform_cloud({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#terraformBackEnd.
	enterTerraformBackEnd(ctx) {
	}

	// Exit a parse tree produced by hclParser#terraformBackEnd.
	exitTerraformBackEnd(ctx) {
		terraform_backend.exit_terraform_backend({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#terraformVersion.
	enterTerraformVersion(ctx) {
	}

	// Exit a parse tree produced by hclParser#terraformVersion.
	exitTerraformVersion(ctx) {
		terraform_version.exit_terraform_version({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#terraformProviders.
	enterTerraformProviders(ctx) {
	}

	// Exit a parse tree produced by hclParser#terraformProviders.
	exitTerraformProviders(ctx) {
		terraform_providers.exit_terraform_providers({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#resourceDirective.
	enterResourceDirective(ctx) {
		resource_directive.enter_resource_directive({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Exit a parse tree produced by hclParser#resourceDirective.
	exitResourceDirective(ctx) {
		resource_directive.exit_resource_directive({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}


	// Enter a parse tree produced by hclParser#variableDirective.
	enterVariableDirective(ctx) {
		variable_directive.enter_variable_directive({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Exit a parse tree produced by hclParser#variableDirective.
	exitVariableDirective(ctx) {
		variable_directive.exit_variable_directive({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}


	// Enter a parse tree produced by hclParser#variableBlock.
	enterVariableBlock(ctx) {
		variable_block.enter_variable_block({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Exit a parse tree produced by hclParser#variableBlock.
	exitVariableBlock(ctx) {
		variable_block.exit_variable_block({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#outputDirective.
	enterOutputDirective(ctx) {
		output_directive.enter_output_directive({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Exit a parse tree produced by hclParser#outputDirective.
	exitOutputDirective(ctx) {
		output_directive.exit_output_directive({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}
	
	// Enter a parse tree produced by hclParser#name.
	enterName(ctx) {
	}

	// Exit a parse tree produced by hclParser#name.
	exitName(ctx) {
		name.exit_name({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#resourceType.
	enterResourceType(ctx) {
	}

	// Exit a parse tree produced by hclParser#resourceType.
	exitResourceType(ctx) {
		resource_type.exit_resource_type({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#outputBlock.
	enterOutputBlock(ctx) {
		output_block.enter_output_block({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Exit a parse tree produced by hclParser#outputBlock.
	exitOutputBlock(ctx) {
		output_block.exit_output_block({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#outputValue.
	enterOutputValue(ctx) {
	}

	// Exit a parse tree produced by hclParser#outputValue.
	exitOutputValue(ctx) {
		output_value.exit_output_value({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#outputDescription.
	enterOutputDescription(ctx) {
	}

	// Exit a parse tree produced by hclParser#outputDescription.
	exitOutputDescription(ctx) {
		output_description.exit_output_description({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#outputDependsOn.
	enterOutputDependsOn(ctx) {
	}

	// Exit a parse tree produced by hclParser#outputDependsOn.
	exitOutputDependsOn(ctx) {
	}

	// Enter a parse tree produced by hclParser#outputSensitive.
	enterOutputSensitive(ctx) {
	}

	// Exit a parse tree produced by hclParser#outputSensitive.
	exitOutputSensitive(ctx) {
		output_sensitive.exit_output_sensitive({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}
	
	// Enter a parse tree produced by hclParser#variableSensitive.
	enterVariableSensitive(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableSensitive.
	exitVariableSensitive(ctx) {
	}

	// Enter a parse tree produced by hclParser#variableType.
	enterVariableType(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableType.
	exitVariableType(ctx) {
		variable_type.exit_variable_type({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#variableNullabl.
	enterVariableNullabl(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableNullabl.
	exitVariableNullabl(ctx) {
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
		object.exit_object({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#field.
	enterField(ctx) {
	}

	// Exit a parse tree produced by hclParser#field.1
	exitField(ctx) {
		field.exit_field({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}	

	// Enter a parse tree produced by hclParser#complexField.
	enterComplexField(ctx) {
		complex_field.enter_complex_field({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Exit a parse tree produced by hclParser#complexField.
	exitComplexField(ctx) {
		complex_field.exit_complex_field({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#variableDescription.
	enterVariableDescription(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableDescription.
	exitVariableDescription(ctx) {
		variable_description.exit_variable_description({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#variableDefault.
	enterVariableDefault(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableDefault.
	exitVariableDefault(ctx) {
		variable_default.exit_variable_default({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
	}

	// Enter a parse tree produced by hclParser#variableValidation.
	enterVariableValidation(ctx) {
	}

	// Exit a parse tree produced by hclParser#variableValidation.
	exitVariableValidation(ctx) {
	}

	// Enter a parse tree produced by hclParser#validation.
	enterValidation(ctx) {
	}

	// Exit a parse tree produced by hclParser#validation.
	exitValidation(ctx) {
	}

	// Enter a parse tree produced by hclParser#condition.
	enterCondition(ctx) {
	}

	// Exit a parse tree produced by hclParser#condition.
	exitCondition(ctx) {
	}

	// Enter a parse tree produced by hclParser#expression.
	enterExpression(ctx) {
	}

	// Exit a parse tree produced by hclParser#expression.
	exitExpression(ctx) {
		expression.exit_expression({ctx :{ctx, errors: this.prog.errors}, prog: this.prog})
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