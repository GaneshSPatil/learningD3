var drawChart = function(){
  var numbers = [0,1,2,3,4,5,6,7,8,9,10];

  var font = d3.scaleLinear()
    .domain(d3.extent(numbers))
    .range(['italic bold 12px/30px Georgia, serif','italic bold 120px/180px Georgia, serif']);

  container = d3.select('body').append('div')
    .attr('class', 'container')
    .attr('width', '1000px')
    .attr('height', '550px');

  container.selectAll(".rectangle")
    .data(numbers)
    .enter()
    .append('div')
    .classed('rectangle', true)
    .style('font', function(d){ return font(d);})
    .text(function(d){ return d;});
}

window.onload = drawChart;
