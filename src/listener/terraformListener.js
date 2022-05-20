// Generated from terraformParser.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';

import file from './file.js';
import field from './field.js';
import complex_field from './complex_field.js';
import object from './object.js';
import name from './name.js';
import provider_type from './provider_type.js';

import module_directive from './module_directive.js';
import module_source from './module_source.js';
import terraform_directive from './terraform_directive.js';
import data_directive from './data_directive.js';
import resource_directive from './resource_directive.js';
import output_directive from './output_directive.js';
import variable_directive from './variable_directive.js';
import provider_directive from './provider_directive.js';

// This class defines a complete listener for a parse tree produced by terraformParser.
export default class terraformParserListener extends antlr4.tree.ParseTreeListener {
  constructor(prog) {
    super();
    this.prog = prog;
  }

  // Enter a parse tree produced by terraformParser#file.
  enterFile(ctx) {
  }

  // Exit a parse tree produced by terraformParser#file.
  exitFile(ctx) {
    file.exit_file({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#directive.
  enterDirective(ctx) {
  }

  // Exit a parse tree produced by terraformParser#directive.
  exitDirective(ctx) {
  }

  // Enter a parse tree produced by terraformParser#dataDirective.
  enterDataDirective(ctx) {
    data_directive.enter_data_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by terraformParser#dataDirective.
  exitDataDirective(ctx) {
    data_directive.exit_data_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#moduleDirective.
  enterModuleDirective(ctx) {
    module_directive.enter_module_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by terraformParser#moduleDirective.
  exitModuleDirective(ctx) {
    module_directive.exit_module_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#moduleSource.
  enterModuleSource(ctx) {
  }

  // Exit a parse tree produced by terraformParser#moduleSource.
  exitModuleSource(ctx) {
    module_source.exit_module_source({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#providerDirective.
  enterProviderDirective(ctx) {
    provider_directive.enter_provider_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by terraformParser#providerDirective.
  exitProviderDirective(ctx) {
    provider_directive.exit_provider_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#terraformDirective.
  enterTerraformDirective(ctx) {
    terraform_directive.enter_terraform_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by terraformParser#terraformDirective.
  exitTerraformDirective(ctx) {
    terraform_directive.exit_terraform_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#resourceDirective.
  enterResourceDirective(ctx) {
    resource_directive.enter_resource_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by terraformParser#resourceDirective.
  exitResourceDirective(ctx) {
    resource_directive.exit_resource_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#variableDirective.
  enterVariableDirective(ctx) {
    variable_directive.enter_variable_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by terraformParser#variableDirective.
  exitVariableDirective(ctx) {
    variable_directive.exit_variable_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#outputDirective.
  enterOutputDirective(ctx) {
    output_directive.enter_output_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by terraformParser#outputDirective.
  exitOutputDirective(ctx) {
    output_directive.exit_output_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#name.
  enterName(ctx) {
  }

  // Exit a parse tree produced by terraformParser#name.
  exitName(ctx) {
    name.exit_name({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#resourceType.
  enterProviderType(ctx) {
  }

  // Exit a parse tree produced by terraformParser#resourceType.
  exitProviderType(ctx) {
    provider_type.exit_provider_type({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#type.
  enterType(ctx) {
  }

  // Exit a parse tree produced by terraformParser#type.
  exitType(ctx) {
  }

  // Enter a parse tree produced by terraformParser#object.
  enterObject(ctx) {
  }

  // Exit a parse tree produced by terraformParser#object.
  exitObject(ctx) {
    object.exit_object({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#field.
  enterField(ctx) {
  }

  // Exit a parse tree produced by terraformParser#field.1
  exitField(ctx) {
    field.exit_field({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#complexField.
  enterComplexField(ctx) {
    complex_field.enter_complex_field({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by terraformParser#complexField.
  exitComplexField(ctx) {
    complex_field.exit_complex_field({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by terraformParser#validation.
  enterValidation(ctx) {
  }

  // Exit a parse tree produced by terraformParser#validation.
  exitValidation(ctx) {
  }

  // Enter a parse tree produced by terraformParser#condition.
  enterCondition(ctx) {
  }

  // Exit a parse tree produced by terraformParser#condition.
  exitCondition(ctx) {
  }

  // Enter a parse tree produced by terraformParser#expression.
  enterExpression(ctx) {
  }

  // Exit a parse tree produced by terraformParser#expression.
  exitExpression(ctx) {
  }

  // Enter a parse tree produced by terraformParser#functionCall.
  enterFunctionCall(ctx) {
  }

  // Exit a parse tree produced by terraformParser#functionCall.
  exitFunctionCall(ctx) {
  }

  // Enter a parse tree produced by terraformParser#complexExpression.
  enterComplexExpression(ctx) {
  }

  // Exit a parse tree produced by terraformParser#complexExpression.
  exitComplexExpression(ctx) {
  }

  // Enter a parse tree produced by terraformParser#array.
  enterArray(ctx) {
  }

  // Exit a parse tree produced by terraformParser#array.
  exitArray(ctx) {
  }

  // Enter a parse tree produced by terraformParser#index.
  enterIndex(ctx) {
  }

  // Exit a parse tree produced by terraformParser#index.
  exitIndex(ctx) {
  }
}
