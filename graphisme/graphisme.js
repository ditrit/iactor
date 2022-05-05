import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import get_datas from '../launcher-terraform.js'
import { select } from 'd3';
import { writeFileSync } from 'fs';
import { calcul_attributes_objects } from './calcul_attributes_objects.js';
import fs from 'fs';
import { cos, evaluate } from "mathjs";

const dom = new JSDOM(`<!DOCTYPE html><body></body>`);

const datas = get_datas('../tests/tf', '../tests');
let results = calcul_attributes_objects(datas)
let noRelations = results.noRelations
let resources = results.resources
let content

let body = select(dom.window.document.querySelector("body"))
let svg = body.append('svg').attr('id', 'svg0');

const res = fs.readFileSync('../svg/resource.svg').toString()

// svg.append('svg:defs')
//     .append('svg:marker')
//     .attr('id', 'arrow')
//     .attr('viewBox', [0, 0, 12, 12])
//     .attr('refX', 6)
//     .attr('refY', 6)
//     .attr('markerWidth', 12)
//     .attr('markerHeight', 12)
//     .attr('orient', 'auto-start-reverse')
//     .append('svg:path')
//         .attr('d', "M2,2 L10,6 L2,10 L6,6 L2,2")
//         .attr('stroke', 'black');

drawSVG(noRelations, svg, "svg0")
drawSVG(resources, svg, "svg0")

writeFileSync('../svg/out.svg', body.html());

function drawSVG(datas, svgGlobal, parent, content) {
    let translationX = 0
    let translationY = 0
    let initTranslationY
    let currentX = 0
    let xContent = 20
    let yContent = 50
    let widthBefore = 0
    let heightBefore = 0
    let firstItem = true
    datas.forEach( d => {
        let data = { logopath: 'logos/' + d.icon,  width: d.width, height: d.height, name: d.name, type: d.type, id : d.name + "_" + d.type };
        const svgDom = SVGinstanciate(res, data, dom);
        body.select("#"+parent).node().append(svgDom.documentElement);
        var model = dom.window.document.getElementById(d.name + "_" + d.type)
        if(content) {
            svgGlobal.querySelector("g").appendChild(model)
            model.setAttribute('x', xContent)
            model.setAttribute('y', yContent)
            xContent += (d.width > 0) ? d.width + 30 : 190
        } else {
            dom.window.document.getElementById(parent).appendChild(model)
            if(d.newY) {    
                translationY+=heightBefore
                translationX=-widthBefore
            }       
            let index = datas.indexOf(d)
            let nextWidth = (datas.length > index + 1) ? ((datas[index + 1].width > 0) ? datas[index + 1].width + 30 : 190) : -1
            if(nextWidth != -1 && currentX + nextWidth >= 1920) {
                if(!d.newY) {
                    translationX = ((datas[index - 1].width > 0) ? datas[index- 1].width + 30 : 190)
                    if(firstItem) {
                        let x = 0
                        let heightMax = 74
                        let i = 0
                        while(i < datas.length && x < 1920) {
                            if(datas[i].height > 74) {
                                heightMax = datas[i].height
                            }
                            x += (d.width > 0) ? d.width + 30 : 190
                        }
                        initTranslationY =  translationY
                        translationY -= heightMax - 26
                        widthBefore = 0
                    }                        
                    firstItem = false
                } else {
                    currentX = 0
                    translationX = 0
                    widthBefore = 0
                    firstItem = true
                }                
            } else if(currentX >= 1920) {
                currentX = 0
                translationX = -widthBefore
                translationY = initTranslationY
                widthBefore = 0
            }
            model.style.transform = "translateX("+translationX+"px) translateY("+translationY+"px)"     
            currentX += (d.width > 0) ? d.width + 30 : 190
        }
        if(d.contains) {
            drawSVG(d.contains, model, d.name + "_" + d.type, true)  
        }       
        widthBefore += parseInt(model.getAttribute("width")) 
        heightBefore = 90


        
        //let data = { logopath: 'logos/' + d.icon,  width: d.width, height: d.height, name: d.name, type: d.type };
        // const svgDom = SVGinstanciate(res, data, dom);
        // svgGlobal.node().append(svgDom.documentElement);
        // let container = svgGlobal.select("#content_"+d.name);
        // if(d.contains) {
        //     drawSVG("test", d.contains, "test", container)  
        // }
    })
    /*content = svg.selectAll(nameObjects)
            .data(datas)
            .enter();
    content.append("rect")
        .attr("x", function(d){ return d.x;})
        .attr("y", function(d){ return d.y;})
        .attr("width", function(d){ return d.width;})
        .attr("height", function(d){ return d.height;})
        .style("fill", color);
    content.append("text")
       .style("fill", "black")
       .style("font-size", "14px")
       .attr("dy", ".35em")
       .attr("x", function (d) { return d.x + 10; })
       .attr("y", function (d) { return d.y + 10; })
       .style("style", "label")
       .text(function (d) { return 'type : ' + d.type; });
    content.append("text")
        .style("fill", "black")
        .style("font-size", "14px")
        .attr("dy", ".35em")
        .attr("x", function (d) { return d.x + 10; })
        .attr("y", function (d) { return d.y + 30; })
        .style("style", "label")
        .text(function (d) { return 'name : ' + d.name; });*/
    // datas.forEach( d => {
    //     if(d.link) {
    //         d.link.forEach( l => {
    //             let x1Line, y1Line, x2Line, y2Line;
    //             let endX1 = d.x + d.width
    //             let endX2 = l.x + l.width
    //             let endY1 = d.y + d.height
    //             let endY2 = l.y + l.height
    //             if(l.y == d.y) {
    //                 y1Line = d.y + d.height/2
    //                 y2Line = l.y + l.height/2
    //                 if(l.x > d.x) {
    //                     x1Line = endX1
    //                     x2Line = l.x
    //                 } else {
    //                     x1Line = d.x
    //                     x2Line = endX2
    //                 }
    //             } else if(l.x == d.x){
    //                 x1Line = d.x + d.width/2
    //                 x2Line = l.x + l.width/2
    //                 if(l.y > d.y) {
    //                     y1Line = endY1
    //                     y2Line = l.y
    //                 } else {
    //                     y1Line = d.y
    //                     y2Line = endY2
    //                 }
    //             } else { 
    //                 if(d.width > l.x && d.width > endX2) {
    //                     x1Line = d.x + d.width/2
    //                     x2Line = l.x + l.width/2
    //                     y1Line = endY1
    //                     y2Line = l.y
    //                 } else if(endX2 > endX1 && endY2 > endY1) {
    //                     x1Line = endX1
    //                     x2Line = l.x + l.width/2
    //                     y1Line = d.y + d.height/2 + 10
    //                     y2Line = l.y + l.height/2
    //                 } else if(endX2 > endX1 && endY2 < endY1) {
    //                     x1Line = endX1
    //                     x2Line = l.x + l.width/2
    //                     y1Line = d.y + d.height/2 - 10
    //                     y2Line = endY2
    //                 } else if(endX2 < endX1 && endY2 < endY1) {
    //                     x1Line = d.x + d.width/2 - 20
    //                     x2Line = endX2
    //                     y1Line = d.y
    //                     y2Line = l.y + l.height/2 - 15
    //                 } else {
    //                     x1Line = d.x
    //                     x2Line = l.x + l.width/2
    //                     y1Line = d.y + d.height/2
    //                     y2Line = l.y
    //                 }
    //             }
    //             svg.append("line")
    //                 .attr("x1",x1Line)  
    //                 .attr("y1",y1Line)  
    //                 .attr("x2",x2Line)  
    //                 .attr("y2",y2Line)  
    //                 .attr("stroke","black")  
    //                 .attr("stroke-width",2)  
    //                 .attr("marker-start","url(#arrow)");
    //         })
    //     }    
    // })
}

function SVGmatch(text, data) {
    function matchTxt(m, op, found, s) {
      return op == "N"
        ? evaluate(found, data)
        : found
            .split(",")
            .map((x) => (data[x] ? data[x] : x))
            .join("");
    }

    return text.replace(/([TN]){{([^}]*)}}/g, matchTxt);
}

function SVGinstanciate(svgVars, data, dom) {
    const domParser = new dom.window.DOMParser();
    const svgTxt = SVGmatch(svgVars, data);
    return domParser.parseFromString(svgTxt, "image/svg+xml");
}
