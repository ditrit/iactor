import { TerraformProg } from '../model/prog.js';
import parse_file from './prog_init.js';

export function parse(src) {
    let fileName = src.split("/")[3]
    let prog = new TerraformProg(fileName)
    parse_file(src, "", "", null, prog)
    return prog
}