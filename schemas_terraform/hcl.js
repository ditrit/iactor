import antlr4 from 'antlr4';
import fs from 'fs';
import hclParser from './hclParser.js';
import hclLexer from './hclLexer.js';

export function parse(src) {
  const input = fs.readFileSync(src.file, 'UTF-8');
  const chars = new antlr4.InputStream(input);
  const lexer = new hclLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new hclParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.file();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(src.listener, tree);
  return src.listener;
}
