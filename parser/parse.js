import { TerraformProg } from '../model/prog.js';
import parse_file from './prog_init.js';

export function parse(src) {
    let prog = new TerraformProg()
    parse_file(src, "", "", null, prog)
    return prog
}