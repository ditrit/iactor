import { parse } from './parse_file.js';
import { get_objects } from './get_links_between_objects.js';

export function parse_directories(filesPath) {
  let result = parse_directory(filesPath);
  for (let i = 0; i < result.modules.length; i++) {
    const source = result.modules[i].moduleSource.value.split('=');
    let path = source[1];
    path = path.replaceAll('"', '');
    const filesPathExplode = filesPath.split('/');
    let modulePath = '';
    for (let i = 0; i < filesPathExplode.length - 1; i++) {
      modulePath += `${filesPathExplode[i]}/`;
    }
    if (path.includes('..')) { result = parse_directory(path.replace('..', modulePath), result, result.modules[i].name); } else if (path.includes('.')) { result = parse_directory(path.replace('.', modulePath), result, result.modules[i].name); } else { result = parse_directory(modulePath + path, result, result.modules[i].name); }
  }
  result = get_all_objects(result);

  return result;
}

function get_all_objects(result) {
  result = get_objects(result.resources, result);
  result = get_objects(result.modules, result, true);
  result = get_objects(result.outputs, result);

  return result;
}

export function get_module_attribute(result, module) {
  result.forEach((v) => {
    if (v.moduleName) {
      if (module.name == v.moduleName) {
        module.resources.push(v);
      }
    }
  });
}

function parse_directory(filePath, result, moduleName) {
  let value;
  if (result) { value = result; } else {
    value = {
      provider: [],
      resources: [],
      outputs: [],
      variables: [],
      modules: [],
      datas: [],
      terraform: [],
      errors: [],
    };
  }

  // var stats = fs.statSync(filePath);
  // var files;
  const res = [];

  // if(stats.isDirectory()) {
  //     files = fs.readdirSync(filePath);
  //     files.forEach(e => {
  //         res.push(parse(filePath + '/' + e, 'UTF-8'))
  //     })
  // } else {
  //     res.push(parse(filePath, 'UTF-8'))
  // }
  res.push(parse(filePath, 'UTF-8'));

  res.forEach((r) => {
    r.files.forEach((st) => {
      st.provider_directive.forEach((v) => {
        v.fileName = r.fileName;
        if (moduleName) v.moduleName = moduleName;
        value.provider.push(v);
      });
      st.resource_directive.forEach((v) => {
        v.fileName = r.fileName;
        if (moduleName) v.moduleName = moduleName;
        value.resources.push(v);
      });
      st.output_directive.forEach((v) => {
        v.fileName = r.fileName;
        if (moduleName) v.moduleName = moduleName;
        value.outputs.push(v);
      });
      st.variable_directive.forEach((v) => {
        v.fileName = r.fileName;
        if (moduleName) v.moduleName = moduleName;
        value.variables.push(v);
      });
      st.data_directive.forEach((v) => {
        v.fileName = r.fileName;
        if (moduleName) v.moduleName = moduleName;
        value.datas.push(v);
      });
      st.module_directive.forEach((v) => {
        v.fileName = r.fileName;
        if (moduleName) v.moduleName = moduleName;
        value.modules.push(v);
      });
      st.terraform_directive.forEach((v) => {
        v.fileName = r.fileName;
        if (moduleName) v.moduleName = moduleName;
        value.terraform.push(v);
      });
    });
    r.errors.forEach((e) => {
      value.errors.push(e);
    });
  });
  return value;
}
