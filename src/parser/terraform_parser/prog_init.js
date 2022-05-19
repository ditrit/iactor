import fs from 'fs';
import { TerraformFile } from '../../model/file.js';
import { parse as parse_terraform } from '../antlr_parser/index.js';
import hclListener from '../../listener/terraformListener.js';

export default function parse_file(file, namespace_uri, namespace_prefix, parent_file, prog) {
  let src_data; let res; let
    listener;
  if (typeof (file) === 'string') {
    if (file.slice(0, 4) == 'http') {
      try {
        src_data = request('GET', file).getBody().toString();
      } catch (error) {
        prog.errors.push(new Error('File error', 0, `Can not read file ${file}`));
        return null;
      }
    } else {
      try {
        src_data = fs.readFileSync(file, 'utf8');
      } catch (error) {
        prog.errors.push(new Error('File error', 0, `Can not read file ${file}`));
        return null;
      }
    }

    const current_file = new TerraformFile();
    current_file.origin_file = file;
    current_file.ns_uri = (namespace_uri) || '';
    current_file.ns_prefix = (namespace_prefix) || '';

    prog.current_parent_file = parent_file;
    prog.current_file = current_file;
    listener = new hclListener(prog);
    res = parse_terraform({
      src_data, listener, prog, file,
    });
    prog.files.push(current_file);
    prog.alreadyImported.push(file);
  } else {
    prog.errors.push(new Error('IMPORT_ERROR error', 0, `Can not read file ${src.file}`));
    console.log(prog.errors.map((x) => x.message));
  }
  return res;
}
