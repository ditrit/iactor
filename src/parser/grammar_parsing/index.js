import antlr4 from 'antlr4';
import fs from 'fs';
import hclParser from './terraformParser.js';
import hclLexer from './terraformLexer.js';

export function parse(src) {
  const input = src.src_data
  const chars = new antlr4.InputStream(input);
  const lexer = new hclLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new hclParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.file();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(src.listener, tree);
  return src.listener;
}
