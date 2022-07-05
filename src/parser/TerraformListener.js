/* eslint class-methods-use-this: 0 */
import antlr4 from 'antlr4';
import TerraformFile from '../models/TerraformFile';
import TerraformResource from '../models/TerraformResource';
import TerraformData from '../models/TerraformData';
import TerraformModule from '../models/TerraformModule';
import TerraformProvider from '../models/TerraformProvider';
import TerraformVariable from '../models/TerraformVariable';

const getText = (ctx) => ctx.getText().replaceAll('"', '').trim();

class TerraformListener extends antlr4.tree.ParseTreeListener {
  constructor() {
    super();
    this.terraformFile = new TerraformFile();
    this.currentTerraformBlock = null;
    this.currentField = null;
    this.currentComplexeField = null;
  }

  // Enter a parse tree produced by terraformParser#file.
  enterFile() {
  }

  // Exit a parse tree produced by terraformParser#file.
  exitFile() {
  }

  // Enter a parse tree produced by terraformParser#directive.
  enterDirective() {
  }

  // Exit a parse tree produced by terraformParser#directive.
  exitDirective() {
  }

  // Enter a parse tree produced by terraformParser#dataDirective.
  enterDataDirective() {
    this.currentTerraformBlock = new TerraformData();
  }

  // Exit a parse tree produced by terraformParser#dataDirective.
  exitDataDirective() {
    this.terraformFile.blocks.push(this.currentTerraformBlock);
    this.currentTerraformBlock = null;
  }

  // Enter a parse tree produced by terraformParser#moduleDirective.
  enterModuleDirective() {
    this.currentTerraformBlock = new TerraformModule();
  }

  // Exit a parse tree produced by terraformParser#moduleDirective.
  exitModuleDirective() {
    this.terraformFile.blocks.push(this.currentTerraformBlock);
    this.currentTerraformBlock = null;
  }

  // Enter a parse tree produced by terraformParser#moduleSource.
  enterModuleSource() {
  }

  // Exit a parse tree produced by terraformParser#moduleSource.
  exitModuleSource(ctx) {
    this.currentTerraformBlock.variables.push(new TerraformVariable('string', 'source', getText(ctx.STRING())));
  }

  // Enter a parse tree produced by terraformParser#providerDirective.
  enterProviderDirective() {
    this.currentTerraformBlock = new TerraformProvider();
  }

  // Exit a parse tree produced by terraformParser#providerDirective.
  exitProviderDirective() {
    this.terraformFile.blocks.push(this.currentTerraformBlock);
    this.currentTerraformBlock = null;
  }

  // Enter a parse tree produced by terraformParser#terraformDirective.
  enterTerraformDirective() {
  }

  // Exit a parse tree produced by terraformParser#terraformDirective.
  exitTerraformDirective() {
  }

  // Enter a parse tree produced by terraformParser#resourceDirective.
  enterResourceDirective() {
    this.currentTerraformBlock = new TerraformResource();
  }

  // Exit a parse tree produced by terraformParser#resourceDirective.
  exitResourceDirective() {
    this.terraformFile.blocks.push(this.currentTerraformBlock);
    this.currentTerraformBlock = null;
  }

  // Enter a parse tree produced by terraformParser#variableDirective.
  enterVariableDirective() {
  }

  // Exit a parse tree produced by terraformParser#variableDirective.
  exitVariableDirective() {
  }

  // Enter a parse tree produced by terraformParser#outputDirective.
  enterOutputDirective() {
  }

  // Exit a parse tree produced by terraformParser#outputDirective.
  exitOutputDirective() {
  }

  // Enter a parse tree produced by terraformParser#name.
  enterName() {
  }

  // Exit a parse tree produced by terraformParser#name.
  exitName(ctx) {
    this.currentTerraformBlock.name = getText(ctx);
  }

  // Enter a parse tree produced by terraformParser#resourceType.
  enterProviderType() {
  }

  // Exit a parse tree produced by terraformParser#resourceType.
  exitProviderType(ctx) {
    this.currentTerraformBlock.type = getText(ctx);
  }

  // Enter a parse tree produced by terraformParser#type.
  enterType() {
  }

  // Exit a parse tree produced by terraformParser#type.
  exitType() {
  }

  // Enter a parse tree produced by terraformParser#object.
  enterObject() {
  }

  // Exit a parse tree produced by terraformParser#object.
  exitObject() {
  }

  // Enter a parse tree produced by terraformParser#field.
  enterField() {
  }

  // Exit a parse tree produced by terraformParser#field.1
  exitField(ctx) {
    if (!this.currentField) {
      if (ctx.expression().BOOLEAN()) {
        this.currentField = new TerraformVariable(
          'boolean',
          null,
          ctx.expression().BOOLEAN().getText() === 'true',
        );
      } else if (ctx.expression().NUMBER()) {
        this.currentField = new TerraformVariable(
          'number',
          null,
          parseFloat(ctx.expression().NUMBER().getText()),
        );
      } else {
        this.currentField = new TerraformVariable(
          'string',
          null,
          ctx.expression().getText() === 'null' ? null : getText(ctx.expression()),
        );
      }
    }
    this.currentField.name = getText(ctx.IDENTIFIER());
    if (this.currentComplexeField) {
      this.currentComplexeField.value.push(this.currentField);
    } else {
      this.currentTerraformBlock.variables
        .push(this.currentField);
    }
    this.currentField = null;
  }

  // Enter a parse tree produced by terraformParser#complexField.
  enterComplexField() {
    this.currentComplexeField = new TerraformVariable('map', null, []);
  }

  // Exit a parse tree produced by terraformParser#complexField.
  exitComplexField(ctx) {
    this.currentComplexeField.name = getText(ctx.IDENTIFIER());
    this.currentTerraformBlock.variables
      .push(this.currentComplexeField);
    this.currentComplexeField = null;
  }

  // Enter a parse tree produced by terraformParser#validation.
  enterValidation() {
  }

  // Exit a parse tree produced by terraformParser#validation.
  exitValidation() {
  }

  // Enter a parse tree produced by terraformParser#condition.
  enterCondition() {
  }

  // Exit a parse tree produced by terraformParser#condition.
  exitCondition() {
  }

  // Enter a parse tree produced by terraformParser#expression.
  enterExpression() {
  }

  // Exit a parse tree produced by terraformParser#expression.
  exitExpression() {
  }

  // Enter a parse tree produced by terraformParser#functionCall.
  enterFunctionCall() {
  }

  // Exit a parse tree produced by terraformParser#functionCall.
  exitFunctionCall() {
  }

  // Enter a parse tree produced by terraformParser#complexExpression.
  enterComplexExpression() {
  }

  // Exit a parse tree produced by terraformParser#complexExpression.
  exitComplexExpression() {
  }

  // Enter a parse tree produced by terraformParser#array.
  enterArray() {
    this.currentField = new TerraformVariable('array');
  }

  // Exit a parse tree produced by terraformParser#array.
  exitArray(ctx) {
    this.currentField.value = ctx.children
      .map((value) => getText(value))
      .filter((value) => value !== '[' && value !== ']' && value !== ',');
  }

  // Enter a parse tree produced by terraformParser#index.
  enterIndex() {
  }

  // Exit a parse tree produced by terraformParser#index.
  exitIndex() {
  }
}

export default TerraformListener;
