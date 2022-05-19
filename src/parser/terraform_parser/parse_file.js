import { TerraformProg } from '../../model/prog.js';
import parse_file from './prog_init.js';

export function parse(src) {
    let filePath = src.split("/")
    let fileName = filePath[filePath.length - 1]
    let prog = new TerraformProg(fileName)
    parse_file(src, "", "", null, prog)
    return prog
}