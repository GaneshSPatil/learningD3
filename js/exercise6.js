var HEIGHT = 100;
var WIDTH = 100;
var MARGIN = 50;

var drawCircle = function(container, stroke, translate){
    container.append('circle')
      .attr("cx", WIDTH/2)
      .attr("cy", HEIGHT/2)
      .attr("r", WIDTH/2)
      .attr("stroke", stroke)
      .attr("stroke-width", 2)
      .attr('transform', 'translate('+ translate+')')
      .attr("fill", "none");

};

var drawLine = function(container, stroke, translate){
  container.append('line')
    .attr("x1", 0)
    .attr("y1", HEIGHT)
    .attr("x2", WIDTH)
    .attr("y2", 0)
    .attr('transform', 'translate('+ translate+')')
    .attr("stroke", stroke)
    .attr("stroke-width", 2);
};

var drawSquare= function(container, stroke, translate){
  container.append('rect')
    .attr("x", 0)
    .attr("y", 0)
    .attr("rx", 15)
    .attr("ry", 15)
    .attr("width", WIDTH)
    .attr("height", HEIGHT)
    .attr('transform', 'translate('+ translate+')')
    .attr("stroke", stroke)
    .attr("stroke-width", 2)
    .attr("fill", "none");
};

var drawTriangle = function(container, stroke, translate){
  var points = '0,' + HEIGHT + ' ' + WIDTH + ',' + HEIGHT + ' ' + WIDTH/2 + ',0';
  container.append('polygon')
    .attr('points', points)
    .attr('transform', 'translate('+ translate+')')
    .attr("stroke", 'green')
    .attr("stroke-width", 2)
    .attr("fill", "none");
};

var foo = function(){
  svg = d3.select('body').append('svg')
    .attr('width', 1400)
    .attr('height', 850);

  var translateValue = 0;
  var shapes = [drawLine, drawCircle, drawSquare, drawTriangle];
  var shapes = [
    { shape: 'line', stroke: 'brown', fn: drawLine},
    { shape: 'circle', stroke: 'red', fn: drawCircle},
    { shape: 'square', stroke: 'steelblue', fn: drawSquare},
    { shape: 'triangle', stroke: 'green', fn: drawTriangle},
    { shape: 'circle', stroke: 'red', fn: drawCircle}
  ];

  shapes.forEach(function(shape){
    shape.fn(svg, shape.stroke, translateValue);
    translateValue += WIDTH + MARGIN;
  });
};

window.onload = foo;
