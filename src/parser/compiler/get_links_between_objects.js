import { TerraformComplexField } from "../../model/complex_field.js";

export function get_names(objects, isModule) {
  const variables = [];
  const resources = [];
  const datas = [];
  const modules = [];

  objects.forEach((e) => {
    if (e instanceof TerraformComplexField) {
      const result = get_names(e.objects);
      result.variables.forEach((variable) => {
        variables.push(variable);
      });
      result.resources.forEach((resource) => {
        resources.push(resource);
      });
      result.datas.forEach((data) => {
        datas.push(data);
      });
      result.modules.forEach((module) => {
        modules.push(module);
      });
    } else {
      let variableName = '';
      let resource = '';
      let data = '';
      let module = '';
      const values = e.split('=');
      if (values[1] != undefined) {
        const variableValue = values[1].split('.');
        variableName = get_variable_name(values);
        if (variableName.length == 0) {
          resource = get_resource_name(values, variableValue);
        }
        if (resource.length == 0) {
          data = get_data_name(values, variableValue);
        }
        if (data.length == 0) {
          module = get_module_name(values, variableValue);
        }
        if (variableName != '') {
          let find = false;
          variableName.forEach((variable) => {
            variables.forEach((v) => {
              if (v.var == variable.var && v.name == variable.name) { find = true; }
            });
            if (!find) { variables.push(variable); } else { find = false; }
          });
        }
        if (resource != '' && !resources.includes(resource)) {
          if (Array.isArray(resource)) {
            resource.forEach((r) => {
              resources.push(r);
            });
          } else {
            resources.push(resource);
          }
        }
        if (data != '' && !datas.includes(data)) {
          datas.push(data);
        }
        if (isModule && module != '' && !modules.includes(module)) {
          modules.push(module);
        }
      }
    }
  });

  return {
    variables, resources, datas, modules,
  };
}

export function get_objects(array, result, isModule) {
  array.forEach((rd) => {
    get_items(rd.variablesName, result.variables).forEach((e) => {
      rd.variablesObject.push(e);
    });

    compare_array_differences(rd.variablesName, rd.variablesObject).forEach((e) => {
      result.errors.push(e);
    });

    get_items(rd.resourcesName, result.resources).forEach((e) => {
      rd.resourcesObject.push(e);
    });

    compare_array_differences(rd.resourcesName, rd.resourcesObject).forEach((e) => {
      result.errors.push(e);
    });

    get_items(rd.datasName, result.datas).forEach((e) => {
      rd.datasObject.push(e);
    });

    compare_array_differences(rd.datasName, rd.datasObject).forEach((e) => {
      result.errors.push(e);
    });

    if (isModule) {
      get_items(rd.modulesName, result.modules).forEach((e) => {
        rd.modulesObject.push(e);
      });

      compare_array_differences(rd.modulesName, rd.modulesObject).forEach((e) => {
        result.errors.push(e);
      });
    }
  });

  return result;
}

function get_items(arrayNames, items) {
  const arrayObjects = [];
  if (arrayNames.length > 0) {
    arrayNames.forEach((rv) => {
      items.forEach((v) => {
        if (rv.type == v.type && rv.name == v.name) {
          arrayObjects.push({ name: rv.var, value: v });
        } else if (!rv.type && rv.name == v.name) {
          arrayObjects.push({ name: rv.var, value: v });
        }
      });
    });
  }
  return arrayObjects;
}

function compare_array_differences(arrayNames, arrayObjects) {
  const errors = [];
  if (arrayNames.length != arrayObjects.length) {
    let find = false;
    arrayNames.forEach((rn) => {
      arrayObjects.forEach((ro) => {
        if (ro.type && rn.type == ro.type && rn.name == ro.name) {
          find = true;
        } else if (!ro.type && rn.name == ro.name) {
          find = true;
        }
      });
    });
  }
  return errors;
}

function get_variable_name(values) {
  const variableName = [];
  let variableValue;
  let value = '';
  values.forEach((v) => {
    variableValue = v.split('.');
    if (variableValue[0] == 'var') {
      value = { var: values[0], name: variableValue[1] };
      if (!variableName.includes(value)) variableName.push(value);
    } else if (variableValue[0].substring(3) == 'var') {
      if (variableValue[1][variableValue.length - 1] != '"') {
        value = { var: values[0].split('{')[0], name: variableValue[1].split('}')[0] };
        if (!variableName.includes(value)) variableName.push(value);
      } else {
        value = { var: values[0].split('{')[0], name: variableValue[1].slice(0, -2) };
        if (!variableName.includes(value)) variableName.push(value);
      }
    } else if (variableValue[0].substring(0, 5) == '<<EOF' && variableValue[0].slice(-3) == 'var') {
      const script = variableValue[1].split('\r');
      value = { var: values[0], name: script[0].slice(0, -2) };
      if (!variableName.includes(value)) variableName.push(value);
    }
  });
  return variableName;
}

function get_resource_name(values, variableValue) {
  let resource = '';
  if (variableValue[0].substring(0, 3) == '"${' && variableValue.length === 3) {
    resource = { var: values[0], type: variableValue[0].substring(3), name: variableValue[1] };
  } else if (variableValue[0].substring(0, 1) == '[' && variableValue.length >= 2) {
    const array = values[1].split(',');
    resource = [];
    for (let i = 0; i < array.length; i++) {
      const explode = array[i].split('.');
      if (i == 0) {
        if (explode[0].substring(0, 4) == '["${') {
          resource.push({ var: values[0], type: explode[0].substring(4), name: explode[1] });
        }
      } else if (explode[0].substring(0, 3) == '"${') {
        resource.push({ var: values[0], type: explode[0].substring(3), name: explode[1] });
      } else if (explode.length === 3) {
        resource.push({ var: values[0], type: explode[0], name: explode[1] });
      }
    }
  } else if(variableValue.length === 3) {
    resource = { var: values[0], type: variableValue[0], name: variableValue[1] };
  }
  return resource;
}

function get_data_name(values, variableValue) {
  let data = '';
  if (variableValue[0] == 'data') {
    data = { var: values[0], type: variableValue[1], name: variableValue[2] };
  } else if (variableValue[0].substring(0, 3) == '"${' && variableValue[0].substring(3, 7) == 'data') {
    data = { var: values[0], type: variableValue[1], name: variableValue[2] };
  }
  return data;
}

function get_module_name(values, variableValue) {
  let module = '';
  if (variableValue[0] == 'module') {
    module = { var: values[0], name: variableValue[1] };
  } else if (variableValue[0].substring(0, 3) == '"${' && variableValue[0].substring(3, 7) == 'module') {
    module = { var: values[0], name: variableValue[1] };
  }
  return module;
}
