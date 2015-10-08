// Volunteer
    // Small
    (function(){
            var margin = { top: 5, right: 10, bottom: 0, left: 10 };
            var width = 410 - margin.left - margin.right,
                height = 100 - margin.top - margin.bottom;

            //start CSV for bar charts
            var dataCSV = "../data/dataVolunteer.csv";

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
                var svg = d3.select("#barVolunteer").append("svg").attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .attr("class", "noPadding")
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                

                var animationDur2 = 2000;

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
    // Large
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

            var svg = d3.select("Volunteered").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + adjusted + ")"); /* adjusted replaced margin.top to shift graph up by 10px */

            d3.csv("../data/dataVolunteered.csv", function(error, data) {
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

// Meeting
    // Small
    (function(){
            var margin = { top: 5, right: 10, bottom: 0, left: 10 };
            var width = 410 - margin.left - margin.right,
                height = 100 - margin.top - margin.bottom;

            //start CSV for bar charts
            var dataCSV = "../data/dataMeeting.csv";

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
                var svg = d3.select("#barMeeting").append("svg").attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .attr("class", "noPadding")
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                

                var animationDur2 = 2000;

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
    // Large
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

            var svg = d3.select("Meetings").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + adjusted + ")"); /* adjusted replaced margin.top to shift graph up by 10px */

            d3.csv("../data/dataMeetingL.csv", function(error, data) {
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

// Neighbor
    // Small
    (function(){
            var margin = { top: 5, right: 10, bottom: 0, left: 10 };
            var width = 410 - margin.left - margin.right,
                height = 100 - margin.top - margin.bottom;

            //start CSV for bar charts
            var dataCSV = "../data/dataNeighbor.csv";

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
                var svg = d3.select("#barNeighbor").append("svg").attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .attr("class", "noPadding")
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                

                var animationDur2 = 2000;

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
    // Large
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

            var svg = d3.select("Neighborhood").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + adjusted + ")"); /* adjusted replaced margin.top to shift graph up by 10px */

            d3.csv("../data/dataNeighborhood.csv", function(error, data) {
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

// Donate
    // Small
    (function(){
            var margin = { top: 5, right: 10, bottom: 0, left: 10 };
            var width = 410 - margin.left - margin.right,
                height = 100 - margin.top - margin.bottom;

            //start CSV for bar charts
            var dataCSV = "../data/dataDonate.csv";

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
                var svg = d3.select("#barDonate").append("svg").attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .attr("class", "noPadding")
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                

                var animationDur2 = 2000;

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
    // Large
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

            var svg = d3.select("Donated").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + adjusted + ")"); /* adjusted replaced margin.top to shift graph up by 10px */

            d3.csv("../data/dataDonatedL.csv", function(error, data) {
                var ageNames = d3.keys(data[0]).filter(function(key) { return key !== "State"; });

                data.forEach(function(d) {
                    d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
            });

            x0.domain(data.map(function(d) { return d.State; }));
            x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
            y.domain([0, d3.max(data, function(d) { return 100 })]);

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




