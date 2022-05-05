export function calcul_attributes_objects(datas) {
    let widthMin = 200;
    let heightMin = 40;
    let recourceWidthMax = 1000;
    let recourceHeightMax = 0   
    let xCurrent = 10;
    let yCurrent = 10;
    let containers = []
    let vpc = []
    let route53 = []
    let blocks = []
    let security_group = []
    let instance = []
    let elb = []
    let db_instance = []
    let noRelations = []

    datas.resources.forEach( r => {
        if(r.representation == 'container') {
            r.contains = []
            r.link = []
            r.containers = []
            if(r.type == 'aws_vpc') vpc.push(r)
            if(r.type == 'aws_route53_zone') route53.push(r)
            containers.push(r)
        }
    })

    datas.modules.forEach( m => {
        if(m.representation == 'container') {
            m.contains = []
            m.containers = []
            containers.push(m)
        }
    })

    datas.resources.forEach( r => {
        if(r.representation != 'container') {
            if(r.resourcesObject.length > 0) {
                r.resourcesObject.forEach( ro => {
                    containers.forEach( c => {
                        if(c.name == ro.value.name && ro.representation == 'contained') {
                            c.contains.push(r)
                        } else if(c.name == ro.value.name && ro.representation == 'containedInOtherContainer') {                        
                            c.containers.push(r)
                        } else if(c.name == ro.value.name && ro.representation == 'link') {                        
                            c.link.push(r)
                        } 
                    })
                })
            }
        }
    })

    datas.resources.forEach( r => {
        if(r.resourcesObject.length > 0) {
            r.resourcesObject.forEach( ro => {
                datas.resources.forEach( c => {
                    if(c.name == ro.value.name && c.type == ro.value.type && ro.representation == 'link') {                        
                        if(c.link && !c.link.includes(r)) {
                            c.link.push(r)
                        } else {
                            c.link = [r]
                        }
                    } else if(c.name == ro.value.name && c.type == ro.value.type && ro.representation == 'inverseLink') {                        
                        if(r.link && !r.link.includes(c)) {
                            r.link.push(c)
                        } else {
                            r.link = [c]
                        }
                    } 
                })
            })
        }
    })

    datas.resources.forEach( r => {
        let find = false
        if(r.representation != 'container') {
            containers.forEach( c => {
                if(c.contains.includes(r)) {
                    find = true
                } else if(c.containers.includes(r)) {
                    find = true
                } else if(c.attributes && c.attributes.includes(r)) {
                    find = true
                } 
            })
            if(!find && !blocks.includes(r)) {
                if(r.type == 'aws_security_group') {
                    security_group.push(r)
                } else if(r.type == 'aws_elb') {
                    elb.push(r)
                } else if(r.type == 'aws_instance' || r.type == 'aws_db_instance') {
                    instance.push(r)
                } else if(r.type == 'aws_db_instance') {
                    db_instance.push(r)
                }   
                blocks.push(r)
            }
        }
    })

    datas.resources.forEach( r => {
        let find = false
        if(r.representation != 'container') {
            containers.forEach( c => {
                if(c.contains.includes(r)) {
                    find = true
                } else if(c.containers.includes(r)) {
                    find = true
                } else if(c.link && c.link.includes(r)) {
                    find = true
                }
            })
            datas.resources.forEach( c => {
                if(c.link && c.link.includes(r)) {
                    find = true
                }
            })
            if(r.link) {
                find = true
            }
            if(!find && !noRelations.includes(r)) {
                noRelations.push(r)
                let index
                index = security_group.indexOf(r)
                if(index != -1) security_group.splice(index,1)
                index = elb.indexOf(r)
                if(index != -1) elb.splice(index,1)
                index = db_instance.indexOf(r)
                if(index != -1) db_instance.splice(index,1)
                index = instance.indexOf(r)
                if(index != -1) instance.splice(index,1)
                index = blocks.indexOf(r)
                if(index != -1) blocks.splice(index,1)
            }
        }
    })

    containers.forEach( c => {
        if(c.type == 'module') {
            let externLink = false
            c.attributes.forEach( a => {
                if(a.link) {
                    let find = false
                    a.link.forEach( l => {    
                        c.attributes.forEach( a => {
                            if(a.name == l.name && a.type == l.type) {
                                find = true
                            }
                        })
                    }) 
                    if(!find) {
                        externLink = true
                    }                                
                }
            })
            if(!externLink) noRelations.push(c)
        }
    })

    containers.forEach( c => {
        c.resourcesObject.forEach( ro => {
            if(ro.representation == 'contained') {
                c.width += widthMin + 15
                c.height += heightMin + 15
                c.contains.push(ro.value)
            }
        })
    })

    containers.forEach( c => {
        if(c.attributes) {
            c.attributes.forEach( a => {
                if(a.representation == 'contained') {
                    c.width += widthMin + 15
                    c.height += heightMin + 15
                    c.contains.push(a)
                }
            })
        }
    })

    containers.forEach( c => {
        c.containers.forEach( cn => {
            containers.forEach( cs => {
                cs.contains.forEach( ctn => {
                    if(cn.name == ctn.name) {
                        if(!c.contains.includes(cs)) {
                            cs.inContainer = true
                            c.contains.push(cs)
                        }                        
                    }
                })
            })
        })
    })


    noRelations.forEach( b => {
        let dimensions = calcul_dimensions(b, 0, 0, recourceHeightMax)
        b.width = 0
        b.height = 0
        recourceHeightMax = dimensions.recourceHeightMax
    })

    blocks.forEach( b => {
        let dimensions = calcul_dimensions(b, 0, 0, recourceHeightMax)
        b.width = 0
        b.height = 0
        recourceHeightMax = dimensions.recourceHeightMax
    })

    containers.forEach( c => {
        let dimensions = calcul_dimensions(c, 0, recourceWidthMax, recourceHeightMax)
        if(c.contains.length == 0) {
            c.width = 0
            c.height = 0
        } else {
            c.width = dimensions.width
            c.height = dimensions.height
        }        
        recourceHeightMax = dimensions.recourceHeightMax
    })
    let resources = []

    let heightFirstLineMax = 0;
    noRelations.forEach( b => {
        //resources.push(b)
        let xy = calcul_xy_container(b, xCurrent, yCurrent)
        if(xy.x != -1 && xy.y != -1) {
            xCurrent = xy.x
            yCurrent = xy.y 
            recourceHeightMax = xy.recourceHeightMax 
        }
        if(b.height > heightFirstLineMax) heightFirstLineMax = b.height
    })

    yCurrent = yCurrent + heightFirstLineMax + 50
    xCurrent = 10
    vpc[0].newY = true

    vpc.forEach( c => {
        resources.push(c)
        let xy = calcul_xy_container(c, xCurrent, yCurrent)
        if(xy.x != -1 && xy.y != -1) {
            xCurrent = xy.x
            yCurrent = xy.y  
            recourceHeightMax = xy.recourceHeightMax 
        }
        yCurrent = yCurrent + c.height + 50
        xCurrent = 10
    })

    elb[0].newY = true
    elb.forEach( b => {
        resources.push(b)
        let xy = calcul_xy_container(b, xCurrent, yCurrent)
        if(xy.x != -1 && xy.y != -1) {
            xCurrent = xy.x
            yCurrent = xy.y  
            recourceHeightMax = xy.recourceHeightMax 
        }
    })

    yCurrent = yCurrent + heightMin + 50
    xCurrent = 10

    /*db_instance[0].newY = true
    db_instance.forEach( b => {
        blocks.push(b)
        let xy = calcul_xy_container(b, xCurrent, yCurrent)
        if(xy.x != -1 && xy.y != -1) {
            xCurrent = xy.x
            yCurrent = xy.y  
            recourceHeightMax = xy.recourceHeightMax 
        }
    })*/

    security_group[0].newY = true
    security_group.forEach( b => {
        resources.push(b)
        let xy = calcul_xy_container(b, xCurrent, yCurrent)
        if(xy.x != -1 && xy.y != -1) {
            xCurrent = xy.x
            yCurrent = xy.y  
            recourceHeightMax = xy.recourceHeightMax 
        }
    })

    yCurrent = yCurrent + heightMin + 50
    xCurrent = 10

    instance[0].newY = true
    instance.forEach( b => {
        resources.push(b)
        let xy = calcul_xy_container(b, xCurrent, yCurrent)
        if(xy.x != -1 && xy.y != -1) {
            xCurrent = xy.x
            yCurrent = xy.y  
            recourceHeightMax = xy.recourceHeightMax 
        }
    })

    yCurrent = yCurrent + heightMin + 50
    xCurrent = 10

    route53[0].newY = true
    route53.forEach( c => {
        resources.push(c)
        let xy = calcul_xy_container(c, xCurrent, yCurrent)
        if(xy.x != -1 && xy.y != -1) {
            xCurrent = xy.x
            yCurrent = xy.y  
            recourceHeightMax = xy.recourceHeightMax 
        }
        yCurrent = yCurrent + c.height + 50
        xCurrent = 10
    })

    /*containers.forEach( c => {
        if(!route53.includes(c) && !vpc.includes(c) && !noRelations.includes(c)) {
            let xy = calcul_xy_container(c, xCurrent, yCurrent)
            if(xy.x != -1 && xy.y != -1) {
                xCurrent = xy.x
                yCurrent = xy.y  
                recourceHeightMax = xy.recourceHeightMax 
            }
            yCurrent = yCurrent + c.height + 50
            xCurrent = 10
        }
    })*/

    noRelations.forEach( nr => {
        if(containers.includes(nr)) {
            let index = containers.indexOf(nr)
            if(index != -1)
                containers.splice(index,1)
        }
    })

    return {containers : containers, blocks : blocks, noRelations : noRelations, resources : resources}
}



function calcul_dimensions(container, width, widthMax, recourceHeightMax) { 
    let height
    let widthMin = 190;
    let heightMin = 70;
    if(container.contains && container.contains.length > 0) {  
        height = heightMin + 20
        container.contains.forEach( c => {
            if(c.representation != 'container') {
                if(width + widthMin + 15 >= widthMax) {
                    height += heightMin + 15
                } else {
                    width += widthMin + 15
                }            
            } else {
                if(c.contains.length > 0) {
                    if(!c.width && !c.height) {
                        let dimensions = calcul_dimensions(c, width, height)
                        width += dimensions.width
                        height += dimensions.height
                    } else {    
                        if(c.height >= height) {
                            height += c.height - heightMin
                        }            
                        if(width + c.width >= widthMax) {
                            height += c.height + 40
                            width += 10
                        } else {
                            height += 40
                            width += c.width + 10
                        }      
                    }
                }
            }
        })
    } else {
        width = widthMin
        height = heightMin
    }
    if(height > recourceHeightMax) {
        recourceHeightMax = height
    }
    return {width : width, height : height, recourceHeightMax : recourceHeightMax}
}

function calcul_xy(object, x, y, container, recourceHeightMax) { 
    if(object.representation != 'container') {
        object.width = 0
        object.height = 0 
    }     

    let returnY = -1
    let xMax = x + object.width;
    if(xMax >= ((container) ? (container.width + container.x) : widthMax)) {
        x = ((container) ? container.x : 0) + 10
        xMax = x + object.width
        returnY = (!container) ? (y + recourceHeightMax + 15) : (y + 30 + 15)
        if(!container) {
            recourceHeightMax = returnY + recourceHeightMax
        }        
    }
    object.x = x
    object.y = (returnY != -1) ? returnY : y
    x = xMax + 15

    return {x : x, y : (returnY != -1) ? returnY : y, recourceHeightMax : recourceHeightMax}
}

function calcul_xy_container(container, x, y, content, recourceHeightMax) {
    let newX = -1
    let newY = -1
    if(!container.inContainer || content) {
        let xy = calcul_xy(container, x, y, true, recourceHeightMax)
        newX = xy.x
        newY = xy.y 
        recourceHeightMax = xy.recourceHeightMax
        
        if(container.contains && container.contains.length > 0) {
            let cox = container.x + 10
            let coy = container.y + 50

            container.contains.forEach( co => {  
                let xy = calcul_xy_container(co, cox, coy, true, recourceHeightMax)
                cox = xy.x
                coy = xy.y 
                recourceHeightMax = xy.recourceHeightMax
            })
        } 
    }
    return {x : newX, y : newY, recourceHeightMax : recourceHeightMax}
}