// Generated from hcl.g4 by ANTLR 4.9.3
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

// This class defines a complete listener for a parse tree produced by hclParser.
export default class hclListener extends antlr4.tree.ParseTreeListener {
  constructor(prog) {
    super();
    this.prog = prog;
  }

  // Enter a parse tree produced by hclParser#file.
  enterFile(ctx) {
  }

  // Exit a parse tree produced by hclParser#file.
  exitFile(ctx) {
    file.exit_file({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by hclParser#directive.
  enterDirective(ctx) {
  }

  // Exit a parse tree produced by hclParser#directive.
  exitDirective(ctx) {
  }

  // Enter a parse tree produced by hclParser#dataDirective.
  enterDataDirective(ctx) {
    data_directive.enter_data_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by hclParser#dataDirective.
  exitDataDirective(ctx) {
    data_directive.exit_data_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by hclParser#moduleDirective.
  enterModuleDirective(ctx) {
    module_directive.enter_module_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by hclParser#moduleDirective.
  exitModuleDirective(ctx) {
    module_directive.exit_module_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by hclParser#moduleSource.
  enterModuleSource(ctx) {
  }

  // Exit a parse tree produced by hclParser#moduleSource.
  exitModuleSource(ctx) {
    module_source.exit_module_source({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by hclParser#providerDirective.
  enterProviderDirective(ctx) {
    provider_directive.enter_provider_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by hclParser#providerDirective.
  exitProviderDirective(ctx) {
    provider_directive.exit_provider_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by hclParser#terraformDirective.
  enterTerraformDirective(ctx) {
    terraform_directive.enter_terraform_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by hclParser#terraformDirective.
  exitTerraformDirective(ctx) {
    terraform_directive.exit_terraform_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by hclParser#resourceDirective.
  enterResourceDirective(ctx) {
    resource_directive.enter_resource_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by hclParser#resourceDirective.
  exitResourceDirective(ctx) {
    resource_directive.exit_resource_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by hclParser#variableDirective.
  enterVariableDirective(ctx) {
    variable_directive.enter_variable_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by hclParser#variableDirective.
  exitVariableDirective(ctx) {
    variable_directive.exit_variable_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by hclParser#outputDirective.
  enterOutputDirective(ctx) {
    output_directive.enter_output_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by hclParser#outputDirective.
  exitOutputDirective(ctx) {
    output_directive.exit_output_directive({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by hclParser#name.
  enterName(ctx) {
  }

  // Exit a parse tree produced by hclParser#name.
  exitName(ctx) {
    name.exit_name({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by hclParser#resourceType.
  enterProviderType(ctx) {
  }

  // Exit a parse tree produced by hclParser#resourceType.
  exitProviderType(ctx) {
    provider_type.exit_provider_type({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
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
    object.exit_object({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by hclParser#field.
  enterField(ctx) {
  }

  // Exit a parse tree produced by hclParser#field.1
  exitField(ctx) {
    field.exit_field({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Enter a parse tree produced by hclParser#complexField.
  enterComplexField(ctx) {
    complex_field.enter_complex_field({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
  }

  // Exit a parse tree produced by hclParser#complexField.
  exitComplexField(ctx) {
    complex_field.exit_complex_field({ ctx: { ctx, errors: this.prog.errors }, prog: this.prog });
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
