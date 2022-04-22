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
                            required_resource(r, r.objects.value, a).forEach( e => {
                                errors.push(e)
                            })
                        }
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
                errors.push('Wrong type for resource ' + r.name + ' type : ' + r.value.type + ', expected : ' + attribute.resourceType)
            }
        }
    })

    return errors;
}

function required_resource(resource, resourceAttributes, attribute) {
    let errors = []
    let find = false

    resourceAttributes.forEach( r => {
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
        errors.push('Resource ' + attribute.variableName + ' required in ' + resource.name + " type : " + resource.type)
    }  
    
    return errors;
}