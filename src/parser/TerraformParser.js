import antlr4 from 'antlr4';
import Lexer from '../antlr/terraformLexer';
import Parser from '../antlr/terraformParser';
import TerraformListener from './TerraformListener';

/**
 * Class that used for Terraform parsing.
 */
class TerraformParser {
  /**
   * Convert the content of a Terraform file into a TerraformFile's object.
   * @param {String} input Content of a file to parse.
   * @returns {TerraformFile} TerraformFile's object.
   */
  parse(definitions, inputs) {
    const listener = new TerraformListener(definitions);
    inputs.forEach((input) => {
      const stream = new antlr4.InputStream(input);
      const lexer = new Lexer(stream);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new Parser(tokens);
      parser.buildParseTrees = true;
      const tree = parser.file();
      antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    });
    listener.components.forEach((component, index) => {
      component.id = `${index}`;
    });
    return {
      components: listener.components,
      links: [],
      errors: listener.errors,
    };
  }
}
export default TerraformParser;
