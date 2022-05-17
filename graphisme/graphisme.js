import jsdom from 'jsdom';
import { select } from 'd3';
import fs, { writeFileSync } from 'fs';
import { evaluate } from 'mathjs';
import { calcul_attributes_objects } from './calcul_attributes_objects.js';
import get_datas from '../launcher-terraform.js';

const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><body></body>');
// let arg = process.argv.slice(2).toString();
const datas = get_datas('./tests/tf');
const resources = calcul_attributes_objects(datas);

const body = select(dom.window.document.querySelector('body'));
const svg = body.append('svg').attr('id', 'svg0').attr('width', 2000).attr('height', 1000)
  .attr('xmlns', 'http://www.w3.org/2000/svg')
  .attr('xmlns:xlink', 'http://www.w3.org/1999/xlink');
svg.append('g');
const res = fs.readFileSync('./svg/resource.svg').toString();

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
  .attr('d', 'M2,2 L10,6 L2,10 L6,6 L2,2')
  .attr('stroke', 'black');

drawSVG(resources, [], svg, 'svg0');

writeFileSync('./svg/out.svg', body.html());

function drawSVG(datas, parentDatas, svgParent, parentName, content) {
  datas.forEach((d) => {
    const data = {
      logopath: `logos/${d.icon}`, width: d.width, height: d.height, name: d.name, type: d.type, id: `${d.name}_${d.type}`,
    };
    const svgDom = SVGinstanciate(res, data, dom);
    body.select(`#${parentName}`).node().append(svgDom.documentElement);
    const model = dom.window.document.getElementById(`${d.name}_${d.type}`);
    if (content) {
      svgParent.querySelector('g').appendChild(model);
      model.setAttribute('x', d.x);
      model.setAttribute('y', d.y);
      d.x = parentDatas.x + d.x;
      d.y = parentDatas.y + d.y;
    } else {
      dom.window.document.getElementById(parentName).querySelector('g').appendChild(model);
      model.setAttribute('x', d.x);
      model.setAttribute('y', d.y);
    }
    if (d.contains) {
      drawSVG(d.contains, d, model, `${d.name}_${d.type}`, true);
    }
  });

  datas.forEach((blockEnd) => {
    if (blockEnd.link) {
      blockEnd.link.forEach((blockBegin) => {
        let xEnd; let yEnd; let xBegin; let
          yBegin;
        const blockEndWidth = ((blockEnd.width > 0) ? blockEnd.width + 30 : 160);
        const blockBeginWidth = ((blockBegin.width > 0) ? blockBegin.width + 30 : 160);
        const blockEndHeight = ((blockEnd.height > 0) ? blockEnd.height + 30 : 44);
        const blockBeginHeight = ((blockBegin.height > 0) ? blockBegin.height + 30 : 44);
        const endX1 = blockEnd.x + blockEndWidth;
        const endX2 = blockBegin.x + blockBeginWidth;
        const endY1 = blockEnd.y + blockEndHeight;
        const endY2 = blockBegin.y + blockBeginHeight;
        if (blockBegin.y == blockEnd.y && blockBeginHeight == blockEndHeight) {
          yEnd = blockEnd.y + blockEndHeight / 2;
          yBegin = blockBegin.y + blockBeginHeight / 2;
          if (blockBegin.x > blockEnd.x) {
            yEnd += 10;
            yBegin += 10;
            xEnd = endX1 + 10;
            xBegin = blockBegin.x + 4;
          } else {
            yEnd -= 10;
            yBegin -= 10;
            xEnd = blockEnd.x;
            xBegin = endX2 + 4;
          }
        } else if (blockBegin.x == blockEnd.x && blockBeginWidth == blockEndWidth) {
          xEnd = blockEnd.x + blockEndWidth / 2;
          xBegin = blockBegin.x + blockBeginWidth / 2;
          if (blockBegin.y > blockEnd.y) {
            xEnd += 10;
            xBegin += 10;
            yEnd = endY1 + 10;
            yBegin = blockBegin.y + 4;
          } else {
            xEnd -= 10;
            xBegin -= 10;
            yEnd = blockEnd.y;
            yBegin = endY2 + 4;
          }
        } else if (blockEndWidth > blockBegin.x && blockEndWidth > endX2) {
          xEnd = blockEnd.x + blockEndWidth / 2 + 5 - 10;
          xBegin = blockBegin.x + blockBeginWidth / 2 + 10;
          yEnd = endY1 - 10;
          yBegin = blockBegin.y + 4;
        } else if (endX2 > endX1 && endY2 > endY1) {
          xEnd = endX1 + 8;
          xBegin = blockBegin.x + blockBeginWidth / 2 - 10;
          yEnd = blockEnd.y + blockEndHeight / 2 + 10;
          yBegin = blockBegin.y + 4;
        } else if (endX2 > endX1 && endY2 < endY1) {
          xEnd = endX1 + 8;
          xBegin = blockBegin.x + blockBeginWidth / 2 - 10;
          yEnd = blockEnd.y + blockEndHeight / 2 - 10;
          yBegin = endY2 + 4;
        } else if (endX2 < endX1 && endY2 < endY1) {
          xEnd = blockEnd.x + blockEndWidth / 2 - 10;
          xBegin = endX2 + 4;
          yEnd = blockEnd.y;
          yBegin = blockBegin.y + blockBeginHeight / 2 - 10;
        } else {
          xEnd = blockEnd.x;
          xBegin = blockBegin.x + blockBeginWidth / 2 + 10;
          yEnd = blockEnd.y + blockEndHeight / 2 + 10;
          yBegin = blockBegin.y + 4;
        }
        svg.append('line')
          .attr('x1', xEnd)
          .attr('y1', yEnd)
          .attr('x2', xBegin)
          .attr('y2', yBegin)
          .attr('stroke', 'black')
          .attr('stroke-width', 1)
          .attr('marker-start', 'url(#arrow)');
      });
    }
  });

  /* let svgs = body.selectAll('svg')
    svgs.on('click', function(d, i){
        this.append('rect')
            .attr('x',10)
            .attr('y',10)
            .attr('width',10)
            .attr('height',10)
            .attr('color','red')
    })   */
}

function SVGmatch(text, data) {
  function matchTxt(m, op, found, s) {
    return op == 'N'
      ? evaluate(found, data)
      : found
        .split(',')
        .map((x) => (data[x] ? data[x] : x))
        .join('');
  }

  return text.replace(/([TN]){{([^}]*)}}/g, matchTxt);
}

function SVGinstanciate(svgVars, data, dom) {
  const domParser = new dom.window.DOMParser();
  const svgTxt = SVGmatch(svgVars, data);
  return domParser.parseFromString(svgTxt, 'image/svg+xml');
}
