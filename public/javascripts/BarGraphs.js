var margin = { top: 5, right: 10, bottom: 0, left: 10 };
var width = 410 - margin.left - margin.right;
var height = 150 - margin.top - margin.bottom;

// Turnout 
(function(){
        //start CSV for bar charts
        var dataCSV = "../data/bars/"+config.state+"/dataTurnout.csv";

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

            //place the left graph
            var svg = d3.select("#barTurnout").append("svg")
                .attr("width", width + margin.left + margin.right + 70)
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

            // TEXT added            
            svg.selectAll("span.red#voterState")
                .data(data)
                .enter()
                    .append("text")
                    .attr("class", "barText")
                    .attr("fill", "black")
                    .attr("y", function (d) { return yBarScale(d.id)-7; })
                    .attr("x", function (d, i) { return width + 10; })
                    .text(function (d) { return " " + d.percent + "%"; });

        });

}());



// Registration 
(function(){

        //start CSV for bar charts
        var dataCSV = "../data/bars/"+config.state+"/dataRegistration.csv";

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

            //place the left graph
            var svg = d3.select("#barRegistration")
                .append("svg").attr("width", width + margin.left + margin.right + 70)
                .attr("height", height + margin.top + margin.bottom)
                .attr("class", "noPadding")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                

            var animationDur2 = 3000;

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

            // TEXT added            
            svg.selectAll("span.red#voterState")
                .data(data)
                .enter()
                    .append("text")
                    .attr("class", "barText")
                    .attr("fill", "black")
                    .attr("y", function (d) { return yBarScale(d.id)-7; })
                    .attr("x", function (d, i) { return width + 10; })
                    .text(function (d) { return " " + d.percent + "%"; });

        });
}());

// Contact
(function(){

        //start CSV for bar charts
        var dataCSV = "../data/bars/"+config.state+"/dataContact.csv";

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

            //place the left graph
            var svg = d3.select("#barContact").append("svg")
                .attr("width", width + margin.left + margin.right + 70)
                .attr("height", height + margin.top + margin.bottom)
                .attr("class", "noPadding")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                

            var animationDur2 = 3500;

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

                        // TEXT added            
            svg.selectAll("span.red#voterState")
                .data(data)
                .enter()
                    .append("text")
                    .attr("class", "barText")
                    .attr("fill", "black")
                    .attr("y", function (d) { return yBarScale(d.id)-7; })
                    .attr("x", function (d, i) { return width + 10; })
                    .text(function (d) { return " " + d.percent + "%"; });

        });
}());

// Boycot
(function(){

        //start CSV for bar charts
        var dataCSV = "../data/bars/"+config.state+"/dataBoycot.csv";

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

            //place the left graph
            var svg = d3.select("#barBoycot").append("svg")
                .attr("width", width + margin.left + margin.right + 70)
                .attr("height", height + margin.top + margin.bottom)
                .attr("class", "noPadding")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                

            var animationDur2 = 4000;

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

            // TEXT added            
            svg.selectAll("span.red#voterState")
                .data(data)
                .enter()
                    .append("text")
                    .attr("class", "barText")
                    .attr("fill", "black")
                    .attr("y", function (d) { return yBarScale(d.id)-7; })
                    .attr("x", function (d, i) { return width + 10; })
                    .text(function (d) { return " " + d.percent + "%"; });

        });
}());

// Group
(function(){

        //start CSV for bar charts
        var dataCSV = "../data/bars/"+config.state+"/dataGroup.csv";

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

            //place the left graph
            var svg = d3.select("#barGroup").append("svg")
                .attr("width", width + margin.left + margin.right + 70)
                .attr("height", height + margin.top + margin.bottom)
                .attr("class", "noPadding")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                

            var animationDur2 = 4500;

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

            // TEXT added            
            svg.selectAll("span.red#voterState")
                .data(data)
                .enter()
                    .append("text")
                    .attr("class", "barText")
                    .attr("fill", "black")
                    .attr("y", function (d) { return yBarScale(d.id)-7; })
                    .attr("x", function (d, i) { return width + 10; })
                    .text(function (d) { return " " + d.percent + "%"; });

        });
}());

// Volunteer
(function(){

        //start CSV for bar charts
        var dataCSV = "../data/bars/"+config.state+"/dataVolunteer.csv";

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

            //place the left graph
            var svg = d3.select("#barVolunteer").append("svg")
                .attr("width", width + margin.left + margin.right + 70)
                .attr("height", height + margin.top + margin.bottom)
                .attr("class", "noPadding")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                

            var animationDur2 = 5000;

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

            // TEXT added            
            svg.selectAll("span.red#voterState")
                .data(data)
                .enter()
                    .append("text")
                    .attr("class", "barText")
                    .attr("fill", "black")
                    .attr("y", function (d) { return yBarScale(d.id)-7; })
                    .attr("x", function (d, i) { return width + 10; })
                    .text(function (d) { return " " + d.percent + "%"; });


        });
}());

// Meeting
(function(){

        //start CSV for bar charts
        var dataCSV = "../data/bars/"+config.state+"/dataMeeting.csv";

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

            //place the left graph
            var svg = d3.select("#barMeeting").append("svg")
                .attr("width", width + margin.left + margin.right + 70)
                .attr("height", height + margin.top + margin.bottom)
                .attr("class", "noPadding")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                

            var animationDur2 = 5500;

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


            // TEXT added            
            svg.selectAll("span.red#voterState")
                .data(data)
                .enter()
                    .append("text")
                    .attr("class", "barText")
                    .attr("fill", "black")
                    .attr("y", function (d) { return yBarScale(d.id)-7; })
                    .attr("x", function (d, i) { return width + 10; })
                    .text(function (d) { return " " + d.percent + "%"; });

        });
}());

// Neighbor
(function(){

        //start CSV for bar charts
        var dataCSV = "../data/bars/"+config.state+"/dataNeighbor.csv";

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

            //place the left graph
            var svg = d3.select("#barNeighbor").append("svg")
                .attr("width", width + margin.left + margin.right + 70)
                .attr("height", height + margin.top + margin.bottom)
                .attr("class", "noPadding")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                

            var animationDur2 = 6000;

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


            // TEXT added            
            svg.selectAll("span.red#voterState")
                .data(data)
                .enter()
                    .append("text")
                    .attr("class", "barText")
                    .attr("fill", "black")
                    .attr("y", function (d) { return yBarScale(d.id)-7; })
                    .attr("x", function (d, i) { return width + 10; })
                    .text(function (d) { return " " + d.percent + "%"; });

        });
}());

// Donate
(function(){

        //start CSV for bar charts
        var dataCSV = "../data/bars/"+config.state+"/dataDonate.csv";

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

            //place the left graph
            var svg = d3.select("#barDonate").append("svg")
                .attr("width", width + margin.left + margin.right + 70)
                .attr("height", height + margin.top + margin.bottom)
                .attr("class", "noPadding")
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                

            var animationDur2 = 6500;

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


            // TEXT added            
            svg.selectAll("span.red#voterState")
                .data(data)
                .enter()
                    .append("text")
                    .attr("class", "barText")
                    .attr("fill", "black")
                    .attr("y", function (d) { return yBarScale(d.id)-7; })
                    .attr("x", function (d, i) { return width + 10; })
                    .text(function (d) { return " " + d.percent + "%"; });
                    
        });
}());