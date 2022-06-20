export function analyse_resources(resources, metadatas) {
  const errors = [];
  resources.forEach((r) => {
    metadatas.forEach((m) => {
      if (r.type == m.resourceType) {
        if (m.attributes != undefined) {
          m.attributes.forEach((a) => {
            resource_type(r.resourcesObject, a).forEach((e) => {
              errors.push(e);
            });
            if (a.required) {
              required_resource(r, a).forEach((e) => {
                errors.push(e);
              });
            }
          });
          r.attributes = m.attributes;
        }
        r.representation = m.representation;
        r.icon = m.icon;
      }
      if (m.resourceType == 'default' && r.icon == undefined) {
        r.representation = m.representation;
        r.icon = m.icon;
      }
    });
  });
  return errors;
}

export function analyse_modules(modules, metadatas) {
  const errors = [];
  modules.forEach((mod) => {
    mod.attributes.forEach((a) => {
      if (a.constructor.name == metadatas.resources.resourceType) {
        a.representation = metadatas.resources.representation;
      }
    });
    if (!mod.source) {
      errors.push('Source expected in module');
    }
    mod.representation = metadatas.representation;
    mod.icon = metadatas.icon;
  });
  return errors;
}

function resource_type(resources, attribute) {
  const errors = [];

  resources.forEach((r) => {
    if (attribute.variableName == r.name) {
      if(!attribute.resourceType || r.value.type == attribute.resourceType) {
        r.representation = attribute.representation;
      } else {
        errors.push(`TERRAFORM ERROR in file : ${r.value.fileName} wrong type for resource ${r.name} type : ${r.value.type}, expected : ${attribute.resourceType}`);
      }
    }
  });

  return errors;
}

function required_resource(resource, attribute) {
  const errors = [];
  let find = false;

  if (resource.objects.value) {
    resource.objects.value.forEach((object) => {
      if (object instanceof Object) {
        if (attribute.variableName == object.name) {
          find = true;
          if (attribute.attributes != undefined) {
            attribute.attributes.forEach((att) => {
              required_resource(object, att).forEach((error) => {
                errors.push(error);
              });
            });
          }
        }
      } else if (attribute.variableName == object.split('=')[0] || attribute.variableName == object.split('{')[0]) {
        find = true;
      }
    });
  } else {
    resource.objects.forEach((object) => {
      if (attribute.variableName == object.split('=')[0] || attribute.variableName == object.split('{')[0]) {
        find = true;
      }
    });
  }
  if (!find) {
    errors.push(`TERRAFORM ERROR in file : ${resource.fileName} resource ${attribute.variableName} required in ${resource.name} type : ${resource.type}`);
  }

  return errors;
}