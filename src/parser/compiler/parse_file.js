import { TerraformProg } from '../../model/prog.js';
import parse_file from './prog_init.js';

export function parse(src) {
  // let filePath = src.split("/")
  // let fileName = filePath[filePath.length - 1]
  const prog = new TerraformProg(src);
  parse_file(src, '', '', null, prog);
  return prog;
}
