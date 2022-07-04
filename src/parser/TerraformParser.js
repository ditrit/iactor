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
  static parse(input) {
    const listener = new TerraformListener();
    const stream = new antlr4.InputStream(input);
    const lexer = new Lexer(stream);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new Parser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.file();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    return listener.terraformFile;
  }
}
export default TerraformParser;
