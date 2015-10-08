var animationDur2 = 2000; /* Time for Animation in ms */

// Boycotted
// Large Bar Charts 1st
(function(){	
	var margin = {top: 20, right: 20, bottom: 30, left: 40},
			width = 960 - margin.left - margin.right,
			height = 375 - margin.top - margin.bottom,
			adjusted = margin.top - 10;

		var x0 = d3.scale.ordinal()
			.rangeRoundBands([0, width], .1);

		var x1 = d3.scale.ordinal();

		var y = d3.scale.linear()
			.range([height, 0]);

		var color = d3.scale.ordinal()
			.range(["#FFA500", "#40C8FF"]);

		var xAxis = d3.svg.axis()
			.scale(x0)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left")
			.tickFormat(d3.format(".2s"));

		var svg = d3.select("article").append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + adjusted + ")"); /* adjusted replaced margin.top to shift graph up by 10px */

		d3.csv("../data/dataCivicEngagment.csv", function(error, data) {
			var ageNames = d3.keys(data[0]).filter(function(key) { return key !== "State"; });

			data.forEach(function(d) {
				d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
		});

		x0.domain(data.map(function(d) { return d.State; }));
		x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
		y.domain([0, d3.max(data, function(d) { return 50 })]);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")") // Years Location 
			.call(xAxis);

		svg.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.text("Voter (%)");

		var state = svg.selectAll(".state")
			.data(data)
			.enter().append("g")
			.attr("class", "g")
			.attr("transform", function(d) { return "translate(" + x0(d.State) + ",0)"; });

		state.selectAll("rect")
			.data(function(d) { return d.ages; })
			.enter().append("rect")
			.attr("width", x1.rangeBand())
			.attr("x", function(d) { return x1(d.name); })
			.attr("y", function(d) { return y(d.value); })
			.attr("height", function(d) { return height - y(d.value); })
			.style("fill", function(d) { return color(d.name); });

		var legend = svg.selectAll(".legend")
			.data(ageNames.slice().reverse())
			.enter().append("g")
			.attr("class", "legend")
			.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

		legend.append("rect")
			.attr("x", width - 18)
			.attr("width", 18)
			.attr("height", 18)
			.style("fill", color);

		legend.append("text")
			.attr("x", width - 24)
			.attr("y", 9)
			.attr("dy", ".35em")
			.style("font-size","22px") /* Size of the Legend Text */ 
			.style("fill", "#fff") /* Color of the Legend Key */
			.style("text-anchor", "end")
			.text(function(d) { return d; });
			});
}());

// Bars Horizontal #1  
(function(){
        var margin = { top: 5, right: 10, bottom: 0, left: 10 };
        var width = 420 - margin.left - margin.right,
            height = 120 - margin.top - margin.bottom;

        //start CSV for bar charts
        var dataCSV = "../data/dataBoycotted.csv";

        d3.csv(dataCSV, function (error, data) {
            data.forEach(function (d) {
                d.id = +d.id;
                d.name = d.name
                d.percent = +d.percent;
            });

            var xBarScale = d3.scale.linear()
                .domain([0, 100])
                .range([0, width]);

            var yBarScale = d3.scale.linear()
                .domain([d3.max(data, function (d) { return d.id; }) + .5, 0])
                .range([height, 0]);

            var xAxis = d3.svg.axis()
                .scale(xBarScale)
                .orient("top");

            var yAxis = d3.svg.axis()
                .scale(yBarScale)
                .orient("left");

            //place the left graph
            var svg = d3.select(".barGraphs").append("svg").attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .attr("class", "noPadding")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                


            //load the status'
            svg.selectAll(".background")
                .data(data)
                .enter()
                    .append("rect")
                    .attr("class", "backgroundBar")
                    .attr("y", function (d) { return yBarScale(d.id)-25; })
                    .attr("width", width)
                    .attr("height", 20);
            
            var theStatus = svg.selectAll(".bar")
                .data(data)
                .enter()
                    .append("rect")
                    .attr("class", function (d) { return (d.status); })
                    .attr("width", 0)
                    .attr("height", 20);

            //animate the status
            theStatus.transition()
                .attr("width", function (d) { return xBarScale(d.percent); })
                .attr("y", function (d) { return yBarScale(d.id)-25; })
                .duration(animationDur2);                    
        });
}());



// Group Membership
// Large Bar Charts 2nd
(function(){	
	var margin = {top: 20, right: 20, bottom: 30, left: 40},
			width = 960 - margin.left - margin.right,
			height = 375 - margin.top - margin.bottom,
			adjusted = margin.top - 10;

		var x0 = d3.scale.ordinal()
			.rangeRoundBands([0, width], .1);

		var x1 = d3.scale.ordinal();

		var y = d3.scale.linear()
			.range([height, 0]);

		var color = d3.scale.ordinal()
			.range(["#FFA500", "#40C8FF"]);

		var xAxis = d3.svg.axis()
			.scale(x0)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left")
			.tickFormat(d3.format(".2s"));

		var svg = d3.select("article2").append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + adjusted + ")"); /* adjusted replaced margin.top to shift graph up by 10px */

		d3.csv("../data/dataCivicEngagment2.csv", function(error, data) {
			var ageNames = d3.keys(data[0]).filter(function(key) { return key !== "State"; });

			data.forEach(function(d) {
				d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
		});

		x0.domain(data.map(function(d) { return d.State; }));
		x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
		y.domain([0, d3.max(data, function(d) { return 50 })]);

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);

		svg.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.text("Voter (%)");

		var state = svg.selectAll(".state")
			.data(data)
			.enter().append("g")
			.attr("class", "g")
			.attr("transform", function(d) { return "translate(" + x0(d.State) + ",0)"; });

		state.selectAll("rect")
			.data(function(d) { return d.ages; })
			.enter().append("rect")
			.attr("width", x1.rangeBand())
			.attr("x", function(d) { return x1(d.name); })
			.attr("y", function(d) { return y(d.value); })
			.attr("height", function(d) { return height - y(d.value); })
			.style("fill", function(d) { return color(d.name); });

		var legend = svg.selectAll(".legend")
			.data(ageNames.slice().reverse())
			.enter().append("g")
			.attr("class", "legend")
			.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

		legend.append("rect")
			.attr("x", width - 18)
			.attr("width", 18)
			.attr("height", 18)
			.style("fill", color);

		legend.append("text")
			.attr("x", width - 24)
			.attr("y", 9)
			.attr("dy", ".35em")
			.style("font-size","22px") /* Size of the Legend Text */ 
			.style("fill", "#fff") /* Color of the Legend Key */
			.style("text-anchor", "end")
			.text(function(d) { return d; });
			});
}());

// 2nd Bars 
(function(){
        var margin = { top: 5, right: 10, bottom: 0, left: 10 };
        var width = 410 - margin.left - margin.right,
            height = 120 - margin.top - margin.bottom;

        /* start CSV for bar charts */
        var dataCSV = "../data/dataGroupMembership.csv";

        d3.csv(dataCSV, function (error, data) {
            data.forEach(function (d) {
                d.id = +d.id;
                d.name = d.name
                d.percent = +d.percent;
            });

            var xBarScale = d3.scale.linear()
                .domain([0, 100])
                .range([0, width]);

            var yBarScale = d3.scale.linear()
                .domain([d3.max(data, function (d) { return d.id; }) + .5, 0])
                .range([height, 0]);

            var xAxis = d3.svg.axis()
                .scale(xBarScale)
                .orient("top");

            var yAxis = d3.svg.axis()
                .scale(yBarScale)
                .orient("left");

            //place the left graph
            var svg = d3.select(".barGraphs2").append("svg").attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .attr("class", "noPadding")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                


            //load the status'
            svg.selectAll(".background")
                .data(data)
                .enter()
                    .append("rect")
                    .attr("class", "backgroundBar")
                    .attr("y", function (d) { return yBarScale(d.id)-25; })
                    .attr("width", width)
                    .attr("height", 20);
            
            var theStatus = svg.selectAll(".bar")
                .data(data)
                .enter()
                    .append("rect")
                    .attr("class", function (d) { return (d.status); })
                    .attr("width", 0)
                    .attr("height", 20);

            //animate the status
            theStatus.transition()
                .attr("width", function (d) { return xBarScale(d.percent); })
                .attr("y", function (d) { return yBarScale(d.id)-25; })
                .duration(animationDur2);               
        });
}());