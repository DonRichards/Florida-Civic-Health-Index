// Donut
(function(){
  var width = 200,
      height = 200,
      τ = 2 * Math.PI;

  var arc = d3.svg.arc()
      .innerRadius(40)
      .outerRadius(80)
      .startAngle(0);

  var svg = d3.select("#easy-as-pie-chart").append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

  var background = svg.append("path")
      .datum({endAngle: τ})
      .style("fill", "#1F77B4") /*  Background Color Blue */
      .attr("d", arc);

  var foreground = svg.append("path")
      .datum({endAngle: .127 * τ})
      .style("fill", "orange")
      .attr("d", arc);

  setInterval(function() {
    foreground.transition()
        .duration(1750)
        .call(arcTween, Math.random() * τ);
  }, 2500);

  function arcTween(transition, newAngle) {
    transition.attrTween("d", function(d) {
      var interpolate = d3.interpolate(d.endAngle, newAngle);
      return function(t) {
        d.endAngle = interpolate(t);
        return arc(d);
      };
    });
  }
}());

// Random Line Graph 
(function(){
  var margin = {top: 280, right: 90, bottom: 80, left: 20},
      width = 900 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

  var parse = d3.time.format("%b %Y").parse;

  // Scales and axes. Note the inverted domain for the y-scale: bigger is up!
  var x = d3.time.scale().range([0, width]),
      y = d3.scale.linear().range([height, 0]),
      xAxis = d3.svg.axis().scale(x).tickSize(-height).tickSubdivide(true),
      yAxis = d3.svg.axis().scale(y).ticks(4).orient("right");

  // An area generator, for the light fill.
  var area = d3.svg.area()
      .interpolate("monotone")
      .x(function(d) { return x(d.date); })
      .y0(height)
      .y1(function(d) { return y(d.price); });

  // A line generator, for the dark stroke.
  var line = d3.svg.line()
      .interpolate("monotone")
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.price); });

  d3.csv("/data/dataIndexDemoBar.csv", type, function(error, data) {

    // Filter to one symbol; the S&P 500.
    var values = data.filter(function(d) {
      return d.symbol == "AMZN";;
    });

    var msft = data.filter(function(d) {
      return d.symbol == "MSFT";
    });

    var ibm = data.filter(function(d) {
      return d.symbol == 'IBM';
    });

    // Compute the minimum and maximum date, and the maximum price.
    x.domain([values[0].date, values[values.length - 1].date]);
    y.domain([0, d3.max(values, function(d) { return d.price; })]).nice();

    // Add an SVG element with the desired dimensions and margin.
    var svg = d3.select("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    // Add the clip path.
    svg.append("clipPath")
        .attr("id", "clip")
      .append("rect")
        .attr("width", width)
        .attr("height", height);

    // Add the x-axis.
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the y-axis.
    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + width + ",0)")
        .call(yAxis);


    var colors = d3.scale.category10();
    svg.selectAll('.line')
      .data([values, msft, ibm])
      .enter()
        .append('path')
          .attr('class', 'line')
          .style('stroke', function(d) {
            return colors(Math.random() * 50);
          })
          .attr('clip-path', 'url(#clip)')
          .attr('d', function(d) {
            return line(d);
          })

    /* Add 'curtain' rectangle to hide entire graph */
    var curtain = svg.append('rect')
      .attr('x', -1 * width)
      .attr('y', -1 * height)
      .attr('height', height)
      .attr('width', width)
      .attr('class', 'curtain')
      .attr('transform', 'rotate(180)')
      .style('fill', 'none')

    /* Optionally add a guideline */
    var guideline = svg.append('line')
      .attr('stroke', '#333')
      .attr('stroke-width', 0)
      .attr('class', 'guide')
      .attr('x1', 1)
      .attr('y1', 1)
      .attr('x2', 1)
      .attr('y2', height)

    /* Create a shared transition for anything we're animating */
    var t = svg.transition()
      .delay(750)
      .duration(6000)
      .ease('linear')
      .each('end', function() {
        d3.select('line.guide')
          .transition()
          .style('opacity', 0)
          .remove()
      });

    t.select('rect.curtain')
      .attr('width', 0);
    t.select('line.guide')
      .attr('transform', 'translate(' + width + ', 0)')

    d3.select("#easy-as-bar-chart").on("change", function(e) {
      guideline.attr('stroke-width', this.checked ? 1 : 0);
      curtain.attr("opacity", this.checked ? 0.75 : 1);
    })

  });

  // Parse dates and numbers. We assume values are sorted by date.
  function type(d) {
    d.date = parse(d.date);
    d.price = +d.price;
    return d;
  }
}());