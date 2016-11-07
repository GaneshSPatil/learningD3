var generateTableData = function(numbers){
  var n = d3.scaleLinear()
    .domain(d3.extent(numbers))
    .range(d3.extent(numbers));

  var square = d3.scalePow()
    .exponent(2)
    .domain(d3.extent(numbers))
    .range(d3.extent(numbers).map(function(num){ return num * num; }));

  var logn = d3.scaleLog()
    .base(10)
    .domain(d3.extent(numbers))
    .range([0, 1]);

  var loground = d3.scaleLog()
    .base(10)
    .domain(d3.extent(numbers))
    .rangeRound([0, 1]);

  var operations = [
    { 'n'              : n },
    { 'n square'       : square },
    { 'log(n)'         : logn },
    { 'log(n) rounded' : loground }
  ];

  var tableData = [];
  operations.forEach(function(op){
    var row = {};
    var key = Object.keys(op)[0];
    row.title = key;
    numbers.forEach(function(num){
      row[num] = op[key](num);
    });
    tableData.push(row);
  });

  return tableData;
};

var drawChart = function(){
  var numbers = [1,2,3,4,5,6,7,8,9,10];
  var columns = ['title'].concat(numbers);
  var tableData = generateTableData(numbers);

  var container = d3.select('body').append('div')
    .attr('class', 'container')
    .attr('width', '1000px')
    .attr('height', '550px');

  var table = container.append('table');
  var thead = table.append('thead');
	var	tbody = table.append('tbody');

  thead.append('tr')
		.selectAll('th')
		.data(columns).enter()
		.append('th')
		.text(function (column) { return column; });

  var rows = tbody.selectAll('tr')
		  .data(tableData)
		  .enter()
		  .append('tr');

  rows.selectAll('td')
	.data(function (row) {
    return columns.map(function (column) {
      return {column: column, value: row[column]};
	  });
	})
	.enter()
	.append('td')
	.text(function (d) { return d.value; });
};

window.onload = drawChart;
