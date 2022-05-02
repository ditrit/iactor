import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import get_datas from '../launcher-terraform.js'
import { select, forceSimulation } from 'd3';
import { writeFileSync } from 'fs';
import { calcul_attributes_objects } from './calcul_attributes_objects.js';

const dom = new JSDOM(`<!DOCTYPE html><body></body>`);

const datas = get_datas('../tests/tf', '../tests');
let results = calcul_attributes_objects(datas)
let widthMax = 1900;
let heightMax = 900; 
let containers = results.containers
let blocks = results.blocks
let noRelations = results.noRelations
let content

let body = select(dom.window.document.querySelector("body"))
let svg = body.append('svg').attr('width', widthMax).attr('height', heightMax).attr('xmlns', 'http://www.w3.org/2000/svg');
svg.append('svg:defs')
    .append('svg:marker')
    .attr('id', 'arrow')
    .attr('viewBox', [0, 0, 12, 12])
    .attr('refX', 6)
    .attr('refY', 6)
    .attr('markerWidth', 12)
    .attr('markerHeight', 12)
    .attr('orient', 'auto-start-reverse')
    .append('svg:path')
        .attr('d', "M2,2 L10,6 L2,10 L6,6 L2,2")
        .attr('stroke', 'black');

draw("rect", containers, "orange")
draw("noRelation", noRelations, "purple")
draw("blocks", blocks, "red")

containers.forEach( c => {
    draw("content", c.contains, "red")
    c.contains.forEach( cn => {
        if(cn.contains && cn.contains.length > 0) {
            draw("container", cn.contains, "yellow")
        }
    })
})

writeFileSync('../svg/out.svg', body.html());

function draw(nameObjects, datas, color) {
    content = svg.selectAll(nameObjects)
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
        .text(function (d) { return 'name : ' + d.name; });
    datas.forEach( d => {
        if(d.link) {
            d.link.forEach( l => {
                let x1Line, y1Line, x2Line, y2Line;
                let endX1 = d.x + d.width
                let endX2 = l.x + l.width
                let endY1 = d.y + d.height
                let endY2 = l.y + l.height
                if(l.y == d.y) {
                    y1Line = d.y + d.height/2
                    y2Line = l.y + l.height/2
                    if(l.x > d.x) {
                        x1Line = endX1
                        x2Line = l.x
                    } else {
                        x1Line = d.x
                        x2Line = endX2
                    }
                } else if(l.x == d.x){
                    x1Line = d.x + d.width/2
                    x2Line = l.x + l.width/2
                    if(l.y > d.y) {
                        y1Line = endY1
                        y2Line = l.y
                    } else {
                        y1Line = d.y
                        y2Line = endY2
                    }
                } else { 
                    if(d.width > l.x && d.width > endX2) {
                        x1Line = d.x + d.width/2
                        x2Line = l.x + l.width/2
                        y1Line = endY1
                        y2Line = l.y
                    } else if(endX2 > endX1 && endY2 > endY1) {
                        x1Line = endX1
                        x2Line = l.x + l.width/2
                        y1Line = d.y + d.height/2 + 10
                        y2Line = l.y + l.height/2
                    } else if(endX2 > endX1 && endY2 < endY1) {
                        x1Line = endX1
                        x2Line = l.x + l.width/2
                        y1Line = d.y + d.height/2 - 10
                        y2Line = endY2
                    } else if(endX2 < endX1 && endY2 < endY1) {
                        x1Line = d.x + d.width/2 - 20
                        x2Line = endX2
                        y1Line = d.y
                        y2Line = l.y + l.height/2 - 15
                    } else {
                        x1Line = d.x
                        x2Line = l.x + l.width/2
                        y1Line = d.y + d.height/2
                        y2Line = l.y
                    }
                }
                svg.append("line")
                    .attr("x1",x1Line)  
                    .attr("y1",y1Line)  
                    .attr("x2",x2Line)  
                    .attr("y2",y2Line)  
                    .attr("stroke","black")  
                    .attr("stroke-width",2)  
                    .attr("marker-start","url(#arrow)");
            })
        }    
    })
}