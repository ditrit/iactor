import { TerraformProg } from '../model/prog.js';
import parse_file from './prog_init.js';

export function parse(src) {
  const filePath = src.split('/');
  const fileName = filePath[filePath.length - 1];
  const prog = new TerraformProg(fileName);
  parse_file(src, '', '', null, prog);
  return prog;
}
