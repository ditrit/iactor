export function analyse_resources(resources, metadatas_resources) {
    let errors = []
    resources.forEach( r => {
        metadatas_resources.forEach( m => {
            if(r.type == '"' + m.resourceType + '"') {
                if(m.attributes != undefined) {
                    m.attributes.forEach( a => {
                        resource_type(r.resourcesObject, a).forEach( e => {
                            errors.push(e)
                        })
                        if(a.required) {
                            required_resource(r, a).forEach( e => {
                                errors.push(e)
                            })
                        }
                        representation_attributes(r, a)
                    })
                }
                r.representation = m.representation
            }
        })
    })
    return errors
}

function resource_type(resources, attribute) {
    let errors = []

    resources.forEach( r => {
        if(attribute.variableName == r.name && attribute.resourceType) {
            if(r.value.type != '"' + attribute.resourceType + '"') {
                errors.push('TERRAFORM ERROR in file : ' + r.value.fileName + ' wrong type for resource ' + r.name + ' type : ' + r.value.type + ', expected : ' + attribute.resourceType)
            }
        }
    })

    return errors;
}

function required_resource(resource, attribute) {
    let errors = []
    let find = false

    resource.objects.value.forEach( r => {
        if(attribute.variableName == r.split('=')[0] || attribute.variableName == r.split('{')[0]) {
            find = true     
            if(attribute.attributes != undefined) {
                attribute.attributes.forEach( a => {
                    if(!r.includes(a.variableName)) {
                        find = false
                    }
                })
            }                    
        }
    })
    if(!find) {
        errors.push('TERRAFORM ERROR in file : ' + resource.fileName + ' resource ' + attribute.variableName + ' required in ' + resource.name + " type : " + resource.type)
    }  
    
    return errors;
}

function representation_attributes(resource, attribute) {
    resource.resourcesObject.forEach( r => {
        if(attribute.variableName == r.name) {
            r.representation = attribute.representation                  
        }
    })
}