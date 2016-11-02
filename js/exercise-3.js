var data =   [
	{name:'ramesh',subject:'maths',score:87},
	{name:'suresh',subject:'maths',score:45},
	{name:'pokemon',subject:'english',score:65},
	{name:'mary',subject:'kannada',score:44},
	{name:'riya',subject:'science',score:72},
	{name:'katie',subject:'social studies',score:82},
	{name:'katie',subject:'maths',score:98},
	{name:'ramesh',subject:'bengali',score:25},
	{name:'suresh',subject:'science',score:55},
	{name:'riya',subject:'tamil',score:75},
	{name:'pokemon',subject:'sports',score:95},
	{name:'pokemon',subject:'social studies',score:32}
];

const WIDTH = 1000;
const HEIGHT = 550;
var getSubject = function(d){return d.subject;}
var subjects = _.map(_.uniqBy(data, getSubject), getSubject);

var sortBy = function(field){
  data = _.sortBy(data, function(d){ return d[field];})
  updateStudentsMark();
};

var updateStudentsMark = function(){
  d3.select('.scoreContainer').selectAll(".bar")
    .data(data)
    .style('width', function(d){ return d.score * 10 + 'px'; })
    .style('background-color', function(d){ return colors(d.subject); })
    .text(function(d){ return d.name + ' ' +d.score;});
}

var drawStudentMarks = function(){
  var container = d3.select('.container');
  var scoreContainer = container.append('div')
    .attr('class', 'scoreContainer');

  scoreContainer.selectAll(".bar")
    .data(data)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', function(d){ return d.score * 10 + 'px'; })
    .style('background-color', function(d){ return colors(d.subject); })
    .text(function(d){ return d.name + ' ' +d.score;});
}

var drawSubjects = function(){
  var subjectContainer = d3.select('.container').append('div')
    .attr('class', 'subjectContainer');
  subjectContainer.append('div')
    .classed('text', true)
    .text('Subjects:');

    subjectContainer.selectAll(".subjectBar")
      .data(subjects)
      .enter()
      .append('div')
      .classed('subjectBar', true)
      .style('background-color', function(d){ return colors(d); })
      .text(function(d){ return d;});
}

var drawButtons = function(){
  var buttonContainer = d3.select('.container').append('div').attr('class', 'buttonContainer');
    buttonContainer.append('div').classed('text', true).text('Sort By:');

    buttonContainer.append('button').text('Name').classed('buttonElement', true)
      .attr('onclick', 'sortBy("name")');

    buttonContainer.append('button').text('Subject').classed('buttonElement', true)
      .attr('onclick', 'sortBy("subject")');

    buttonContainer.append('button').text('Score').classed('buttonElement', true)
      .attr('onclick', 'sortBy("score")');
}

var drawChart = function(){
  colors = d3.scaleOrdinal(d3.schemeCategory10);

  var container = d3.select('body').append('div')
    .attr('class', 'container')
    .attr('width', WIDTH + 'px')
    .attr('height', HEIGHT + 'px');

  drawStudentMarks();
  drawButtons()
  drawSubjects();
}

window.onload = drawChart;
