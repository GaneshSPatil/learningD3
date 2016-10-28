var data = [10,20,30,40,50,60,70,80,90,100];
var container, colors;

var drawChart = function(){
  const WIDTH = 1000;
  const HEIGHT = 550;

  colors = d3.scaleLinear()
    .domain([0, 100])
    .range(['lightsteelblue', '#0000ff'])

  container = d3.select('body').append('div')
    .attr('class', 'container')
    .attr('width', WIDTH + 'px')
    .attr('height', HEIGHT + 'px');

  container.selectAll(".bar")
    .data(data)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('background-color', function(d){return colors(d);})
    .style('width', function(d){ return d * 10 + 'px'; })
    .text(function(d){ return d;});

  container.selectAll('.bar').data(data, function(d){ return d;})
    .exit().remove();
};

var updateChart = function(){
  container.selectAll('.bar')
    .data(data)
    .style('width', function(d){ return d * 10 + 'px'; })
    .style('background-color', function(d){return colors(d);})
    .text(function(d){ return d});
}

var redraw = function(){
  data.shift()
  data.push(Math.round(Math.random()*100));
  updateChart();
}

setInterval(redraw, 2000);
window.onload = drawChart;
