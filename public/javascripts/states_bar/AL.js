// Turnout 
(function(){
        var margin = { top: 0, right: 20, bottom: 0, left: 10 };
        var width = 240 - margin.left - margin.right,
            height = 115 - margin.top - margin.bottom;

        //start CSV for bar charts
        var dataCSV = "../data/bars/dataALTurnout.csv";

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
            var svg = d3.select("#barTurnout").append("svg").attr("width", width + margin.left + margin.right)
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

// Registration 
(function(){
        var margin = { top: 0, right: 20, bottom: 0, left: 10 };
        var width = 240 - margin.left - margin.right,
            height = 115 - margin.top - margin.bottom;

        //start CSV for bar charts
        var dataCSV = "../data/bars/dataALRegistration.csv";

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
            var svg = d3.select("#barRegistration").append("svg").attr("width", width + margin.left + margin.right)
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

// Contact
(function(){
        var margin = { top: 0, right: 20, bottom: 0, left: 10 };
        var width = 240 - margin.left - margin.right,
            height = 115 - margin.top - margin.bottom;

        //start CSV for bar charts
        var dataCSV = "../data/bars/dataALContact.csv";

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
            var svg = d3.select("#barContact").append("svg").attr("width", width + margin.left + margin.right)
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

// Boycot
(function(){
        var margin = { top: 0, right: 20, bottom: 0, left: 10 };
        var width = 240 - margin.left - margin.right,
            height = 115 - margin.top - margin.bottom;

        //start CSV for bar charts
        var dataCSV = "../data/bars/dataALBoycot.csv";

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
            var svg = d3.select("#barBoycot").append("svg").attr("width", width + margin.left + margin.right)
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

// Group
(function(){
        var margin = { top: 0, right: 20, bottom: 0, left: 10 };
        var width = 240 - margin.left - margin.right,
            height = 115 - margin.top - margin.bottom;

        //start CSV for bar charts
        var dataCSV = "../data/bars/dataALGroup.csv";

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
            var svg = d3.select("#barGroup").append("svg").attr("width", width + margin.left + margin.right)
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

// Volunteer
(function(){
        var margin = { top: 0, right: 20, bottom: 0, left: 10 };
        var width = 240 - margin.left - margin.right,
            height = 115 - margin.top - margin.bottom;

        //start CSV for bar charts
        var dataCSV = "../data/bars/dataALVolunteer.csv";

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

// Meeting
(function(){
        var margin = { top: 0, right: 20, bottom: 0, left: 10 };
        var width = 240 - margin.left - margin.right,
            height = 115 - margin.top - margin.bottom;

        //start CSV for bar charts
        var dataCSV = "../data/bars/dataALMeeting.csv";

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

// Neighbor
(function(){
        var margin = { top: 0, right: 20, bottom: 0, left: 10 };
        var width = 240 - margin.left - margin.right,
            height = 115 - margin.top - margin.bottom;

        //start CSV for bar charts
        var dataCSV = "../data/bars/dataALNeighbor.csv";

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

// Donate
(function(){
        var margin = { top: 0, right: 20, bottom: 0, left: 10 };
        var width = 240 - margin.left - margin.right,
            height = 115 - margin.top - margin.bottom;

        //start CSV for bar charts
        var dataCSV = "../data/bars/dataALDonate.csv";

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