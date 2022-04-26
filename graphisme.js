import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import get_datas from './launcher-terraform.js'
import { select } from 'd3';
import { writeFileSync } from 'fs';

const dom = new JSDOM(`<!DOCTYPE html><body></body>`);

const datas = get_datas('./tests/tf', './tests');
let widthMin = 200;
let heightMin = 40;
let widthMax = 1900;
let heightMax = 900;
let recourceHeigthMax = 10;
let widthResource = 10;
let heightResource = 10;
let x = widthMin;
let y = heightMin;
let containers = []
let content
let cox
let coy

datas.resources.forEach( r => {
    if(r.representation == 'container') {
        r.contains = []
        r.containers = []
        containers.push(r)
    }
})

datas.resources.forEach( r => {
    x = 30;
    y = 15;
    if(r.representation != 'container') {
        if(r.resourcesObject.length > 0) {
            r.resourcesObject.forEach( ro => {
                containers.forEach( c => {
                    if(c.name == ro.value.name && ro.representation == 'contained') {
                        c.contains.push(r)
                    }
                    if(c.name == ro.value.name && ro.representation == 'containedInOtherContainer') {                        
                        c.containers.push(r)
                    }
                })
            })
        }
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

x = 10;
y = 10;
containers.forEach( c => {
    c.width = widthMin * c.contains.length + 15 * c.contains.length
    c.height = heightMin * c.contains.length + 15 * c.contains.length
    c.x = x
    c.y = y
    
    x = x + c.width + 50;
    if(x >= widthMax - c.width) {
        c.x = 10
        c.y = y + 150 + 50
    }     
    cox = c.x + 10
    coy = c.y + 50

    c.contains.forEach( co => { 
        co.width = widthMin
        co.height = heightMin        
        co.x = cox
        co.y = coy
        
        cox = cox + co.width + 15;
        if(cox >= c.width + c.x - co.width) {
            cox = c.x + 10
            coy = coy + co.height + 15
        }     
    })
})

let body = select(dom.window.document.querySelector("body"))
let svg = body.append('svg').attr('width', widthMax).attr('height', heightMax).attr('xmlns', 'http://www.w3.org/2000/svg');
let rect = svg.selectAll("rect")
            .data(containers)
            .enter();
rect.append("rect")
    .attr("x", function(d){ return d.x;})
    .attr("y", function(d){ return d.y;})
    .attr("width", function(d){ return d.width;})
    .attr("height", function(d){ return d.height;})
    .style("fill", "orange");
rect.append("text")
       .style("fill", "black")
       .style("font-size", "14px")
       .attr("dy", ".35em")
       .attr("x", function (d) { return d.x + 10; })
       .attr("y", function (d) { return d.y + 10; })
       .style("style", "label")
       .text(function (d) { return 'type : ' + d.type; });       
rect.append("text")
    .style("fill", "black")
    .style("font-size", "14px")
    .attr("dy", ".35em")
    .attr("x", function (d) { return d.x + 10; })
    .attr("y", function (d) { return d.y + 30; })
    .style("style", "label")
    .text(function (d) { return 'name : ' + d.name; });

containers.forEach( c => {
    content = svg.selectAll("content")
            .data(c.contains)
            .enter();
    content.append("rect")
        .attr("x", function(d){ return d.x;})
        .attr("y", function(d){ return d.y;})
        .attr("width", function(d){ return d.width;})
        .attr("height", function(d){ return d.height;})
        .style("fill", "red");
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
        .text(function (d) { return 'name : ' + d.name; });
})
// containers.forEach( c => {
//     let size = calculate_size(widthMax, heightMax, containers.length)
//     widthResource = size.width
//     heightResource = size.height
//     svg.append("rect")
//         .attr("x", x)
//         .attr("y", y)
//         .attr("width", c.width)
//         .attr("height", c.height)
//         .style("fill", "orange");    
//     x = x + c.width + 50;
//     if(x >= widthMax - c.width) {
//         x = widthMin
//         y = y + c.height + 50
//     }
// })

writeFileSync('svg/out.svg', body.html());

function calculate_size(widthMax, heightMax, elems) {
    let sqrt = Math.sqrt(elems);
    let ent = Math.trunc(sqrt);
    let width = widthMax / ent - 50
    let height = heightMax / (ent+1) - 50
    return {width : width, height : height}
}