// Scale 
var margin = {top: 20, right: 20, bottom: 30, left: 20},
    width = 300 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], 0.1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

// PRINTING 
var svg = d3.select("barGraph").append("svg")
  .attr("id","container")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// create line of values
var valueline = d3.svg.line()
  .x(function(d) { return x(d.watershed); })
  .y(function(d) { return y(d.variable); });

var json 


d3.json("javascripts/Florida_Civic_Engagement_Indicators_data.json", function(error, result){
  json = result;
  var data = [];
        json.forEach(function(d){
            data.push({variable: +d['Turnout_presidential'], watershed: d['watershed']}); // Default to start
         });

  x.domain(data.map(function(d) { return d.watershed; }));
  y.domain([d3.min(data, function(d) { return d.variable-10; }), d3.max(data, function(d) { return d.variable+10; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("y", 26)
      .attr("dx", "50.71em")
      .style("text-anchor", "end")
      .text("Compare"); // Bottom of chart LABEL 
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Percentage"); // SIDE LABEL 
  
  svg.selectAll(".bar")
  .data(data)
  .enter().append("rect")
  .attr("class", "bar")
  .attr("x", function(d) { return x(d.watershed); })
  .attr("width", x.rangeBand())
  .attr("y", function(d) { return y(d.variable); })
  .attr("height", function(d) { return height - y(d.variable); });
  
});


//update data from combobox onChange
function updateData(value) {
        var data = [];
        json.forEach(function(d){
            data.push({variable: +d[value], watershed: d['watershed']});
         });
  x.domain(data.map(function(d) { return d.watershed; }));
  y.domain([d3.min(data, function(d) { return d.variable-10; }), d3.max(data, function(d) { return d.variable+10; })]);

    // Select the section we want to apply our changes to
    var trans = d3.select("body").transition();
    
    // Make the changes
    var transition = svg.transition().duration(750),
        delay = function(d, i) { return i * 50; };
    
   svg.selectAll(".bar")
     .data(data)
     .transition().duration(750)
     .attr("x", function(d) { return x(d.watershed); })
     .attr("y", function(d) { return y(d.variable); })
     .attr("height", function(d) { return height - y(d.variable); });
    
    transition.select(".y.axis") // change the y axis
      .call(yAxis);
    };
