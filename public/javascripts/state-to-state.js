function GetWidth() {
    var x = 0;
    if (self.innerHeight) {
        x = self.innerWidth;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        x = document.documentElement.clientWidth;
    } else if (document.body) {
        x = document.body.clientWidth;
    }
    return x;
}
var Width = GetWidth();
// "/javascripts/us.json"

var width = Width,
    height = 500,
    active = d3.select(null);

var projection = d3.geo.albersUsa()
    .scale(1000)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("map").append("svg") /* Adds map to <map></map> */
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height)
    .on("click", reset);

var g = svg.append("g")
    .attr("width", width)
    .style("stroke-width", "1.5px");

d3.json("/javascripts/us.json", function(error, us) {
    g.selectAll("path")
      .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
      .attr("d", path)
      .attr("class", "feature")
      .on("click", clicked);

  g.append("path")
      .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
      .attr("class", "mesh")
      .attr("d", path);
});

function clicked(d) {
    removeDiv();
    // Incase Florida's menu is still visable 
    while (document.getElementById("selectionCities")) {
        document.getElementById("selectionCities").remove();
        }
    if (document.getElementById("currentState")) {
        document.getElementById("currentState").remove();
    }
    while (document.getElementById("borders")) {
        document.getElementById("borders").remove();
    }
    
    width = Width; /* Function sets new size, this will force a proper reset */
    height = 500; /* Function sets new size, this will force a proper reset */
    
    if (active.node() === this) return reset();
    
    active.classed("active", false);
    active = d3.select(this).classed("active", true);

    var bounds = path.bounds(d),
        dx = bounds[1][0] - bounds[0][0],
        dy = bounds[1][1] - bounds[0][1],
        x = (bounds[0][0] + bounds[1][0]) / 2,
        y = (bounds[0][1] + bounds[1][1]) / 2,
        scale = .9 / Math.max(dx / width, dy / height),
        translate = [width / 2 - scale * x, height / 2 - scale * y];

    g.transition()
        .duration(750)
        .style("stroke-width", 1.5 / scale + "px")
        .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
    createDiv(dx, bounds);
}

function reset() {
    while (document.getElementById("borders")) {
        document.getElementById("borders").remove();
        }
  active.classed("active", false);
  active = d3.select(null);

  g.transition()
      .duration(750)
      .style("stroke-width", "1.5px")
      .attr("transform", "");
    
}
var page;
function createDiv(dx, bounds) {
    var dxL = dx.toFixed(3); /* Rounds to 3rd decimal */
    switch (dxL) {
        case ("53.207"):
            page = "Alabama";
            break;
        case ("200.511"):
            page = "Alaska";
            break;
        case ("94.097"):
            page = "Arizona";
            break;
        case ("69.753"):
            page = "Arkansas";
            break;
        case ("110.982"):
            page = "California";
            break;
        case ("100.514"):
            page = "Colorado";
            break;
        case ("23.897"):
            page = "Connecticut";
            break;
        case ("14.496"):
            page = "Delaware";
            break;
        case ("125.631"):
            page = "Florida";
            break;
        case ("74.148"):
            page = "Georgia";
            break;
        case ("88.918"):
            page = "Hawaii";
            break;
        case ("82.436"):
            page = "Idaho";
            break;
        case ("55.143"):
            page = "Illinois";
            break;
        case ("42.734"):
            page = "Indiana";
            break;
        case ("83.375"):
            page = "Iowa";
            break;
        case ("102.444"):
            page = "Kansas";
            break;
        case ("101.890"):
            page = "Kentucky";
            break;
        case ("76.835"):
            page = "Louisiana";
            break;
        case ("50.953"):
            page = "Maine";
            break;
        case ("62.628"):
            page = "Maryland";
            break;
        case ("48.050"):
            page = "Massachusetts";
            break;
        case ("104.708"):
            page = "Michigan";
            break;
        case ("90.000"):
            page = "Minnesota";
            break;
        case ("49.561"):
            page = "Mississippi";
            break;
        case ("92.149"):
            page = "Missouri";
            break;
        case ("141.231"):
            page = "Montana";
            break;
        case ("114.244"):
            page = "Nebraska";
            break;
        case ("88.039"):
            page = "Nevada";
            break;
        case ("22.734"):
            page = "New%20Hampshire";
            break;
        case ("18.364"):
            page = "New%20Jersey";
            break;
        case ("96.654"):
            page = "New%20Mexico";
            break;
        case ("104.266"):
            page = "New%20York";
            break;
        case ("121.993"):
            page = "North%20Carolina";
            break;
        case ("90.855"):
            page = "North%20Dakota";
            break;
        case ("57.919"):
            page = "Ohio";
            break;
        case ("119.350"):
            page = "Oklahoma";
            break;
        case ("111.228"):
            page = "Oregon";
            break;
        case ("80.403"):
            page = "Pennsylvania";
            break;
        case ("10.788"):
            page = "Rhode%20Island";
            break;
        case ("70.196"):
            page = "South%20Carolina";
            break;
        case ("96.540"):
            page = "South%20Dakota";
            break;
        case ("117.794"):
            page = "Tennessee";
            break;
        case ("193.742"):
            page = "Texas";
            break;
        case ("77.749"):
            page = "Utah";
            break;
        case ("23.473"):
            page = "Vermont";
            break;
        case ("109.787"):
            page = "Virginia";
            break;
        case ("92.771"):
            page = "Washington";
            break;
        case ("62.097"):
            page = "West%20Virginia";
            break;
        case ("72.473"):
            page = "Wisconsin";
            break;
        case ("96.552"):
            page = "Wyoming";
            break;
        case ("2.918"):
            page = "DC";
            break;
        default:
            page = "404"; /* Outside Params = 404 page for security reasons */
            break;
        }
    var divTag = document.createElement("div"); /* Creates DIV and places State's page into it */
    divTag.id = "currentState"; /* Add #currentState example: Florida.jade is loaded here */
    divTag.className = 'compare';
    divTag.setAttribute('style', 'text-align:center');
    divTag.innerHTML = page;
    par = document.getElementById('ht');
    par.insertBefore(divTag, par.firstChild);
    document.title = page + " vs Florida"; /* Page Title */
    $('#currentState').load('/' + page); /* Add Content to Div with jquery */
    cities(page, bounds);
}

function cities(page, bounds) {
    if (page == "Florida") {
        Array.prototype.getRandom= function(cut){
            var i= Math.floor(Math.random()*this.length);
            if(cut && i in this){
                return this.splice(i, 1)[0];
            }
            return this[i];
        }

        var colors= ['#40C8FF', 'blue', '#006DCC', 'green', 
            'lime', 'maroon', 'navy', 'olive', '#8814CC', '#cf0200', 
            'teal'];

        var canvas  = d3.select("svg")
            .attr("width", width)
            .attr("height", height);


        var x = (bounds[0][0] + bounds[1][0]) / 2,
            y = (bounds[0][1] + bounds[1][1]) / 2;
        // Click Function
        
        function HandleClick(selection, x)  {          
             $('#cities option[value="' + x + '"]').prop('selected', true);
             if(x == 'reset') {
                clicked(1);
                }
                else { 
                    selectCity(x);
                    }
            }

        // Boundries
        var cape = canvas.append("polygon")
            .style("stroke", "")
            .style("fill", colors.getRandom())
            .style("opacity", 0.0)
            .attr("id", "borders")
            .attr("title", "Cape")
            .attr("cursor", "pointer")
            .attr("points", 
                (x-55)+","+(y-72)+","+ 
                (x-20)+","+(y-75)+","+ 
                (x-13)+","+(y-48)+","+ 
                (x-21)+","+(y-48)+","+ 
                (x-21)+","+(y-39)+","+ 
                (x-32)+","+(y-39)+","+ 
                (x-35)+","+(y-45)+","+ 
                (x-40)+","+(y-50)+","+ 
                (x-50)+","+(y-50))
            .on("mouseover", function(){
                d3.select(this).style("opacity", ".8");
                d3.select("h2#name").remove();
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Cape Coral - Fort Myers');
                })
            .on("mousemove", function(){
                })            
            .on("mouseout", function(){
                d3.select(this).style("opacity", ".5");
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Select a Metropolitan Area');
                })
            .on("mousedown", function(){d3.select(this).style("opacity", "1");})
            .on("click", function(d,i) { 
                    HandleClick(d3.select(this), "Cape"); 
                });

        cape.transition()
            .delay(1000)
            .style("opacity", 0.5) 

        var sarasota = canvas.append("polygon")
            .style("stroke", "")
            .style("fill", colors.getRandom())
            .style("opacity", 0.0)
            .attr("id", "borders")
            .attr("cursor", "pointer")
            .attr("points", 
                (x-100)+","+(y-135)+","+ 
                (x-64)+","+(y-142)+","+ 
                (x-57)+","+(y-93)+","+ 
                (x-75)+","+(y-90)+","+ 
                (x-80)+","+(y-82)+","+ 
                (x-98)+","+(y-116)+","+ 
                (x-105)+","+(y-120))

            .on("mouseover", function(){
                d3.select(this).style("opacity", ".8");
                d3.select("h2#name").remove();
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Sarasota - Bradenton - Venice');
                })
            .on("mousemove", function(){
                })            
            .on("mouseout", function(){
                d3.select(this).style("opacity", ".5");
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Select a Metropolitan Area');
                })
            .on("mousedown", function(){d3.select(this).style("opacity", "1");})
            .on("click", function(d,i) { 
                    HandleClick(d3.select(this), "Sarasota"); 
                });

        sarasota.transition()
            .delay(1200)
            .style("opacity", 0.5) 

        var tampa = canvas.append("polygon")
            .style("stroke", "")
            .style("fill", colors.getRandom())
            .style("opacity", 0.0)
            .attr("id", "borders")
            .attr("cursor", "pointer")
            .attr("points", 
                (x-100)+","+(y-136)+","+ 
                (x-66)+","+(y-142)+","+ 
                (x-71)+","+(y-184)+","+ 
                (x-122)+","+(y-176)+","+ 
                (x-123)+","+(y-148)+","+ 
                (x-108)+","+(y-138)+","+ 
                (x-108)+","+(y-153)+","+ 
                (x-115)+","+(y-156)+","+ 
                (x-110)+","+(y-163)+","+ 
                (x-90)+","+(y-153))
            .on("mouseover", function(){
                d3.select(this).style("opacity", ".8");
                d3.select("h2#name").remove();
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Tampa - St. Petersburg - Clearwater');
                })
            .on("mousemove", function(){
                })            
            .on("mouseout", function(){
                d3.select(this).style("opacity", ".5");
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Select a Metropolitan Area');
                })
            .on("mousedown", function(){d3.select(this).style("opacity", "1");})
            .on("click", function(d,i) { 
                    HandleClick(d3.select(this), "Tampa"); 
                });
        tampa.transition()
            .delay(1400)
            .style("opacity", 0.5) 

        var maimi = canvas.append("polygon")
            .style("stroke", "")
            .style("fill", colors.getRandom())
            .style("opacity", 0.0)
            .attr("id", "borders")
            .attr("cursor", "pointer")
            .attr("points", 
                (x+25)+","+(y-100)+","+ 
                (x+85)+","+(y-105)+","+
                (x+94)+","+(y-60)+","+ 
                (x+95)+","+(y-25) +","+ 
                (x+85)+","+(y+35)+","+ 
                (x+50)+","+(y+45))
            .on("mouseover", function(){
                d3.select(this).style("opacity", ".8");
                d3.select("h2#name").remove();
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Miami - Fort Lauderdale - Miami Beach');
                })
            .on("mousemove", function(){
                })            
            .on("mouseout", function(){
                d3.select(this).style("opacity", ".5");
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Select a Metropolitan Area');
                })
            .on("mousedown", function(){d3.select(this).style("opacity", "1");})
            .on("click", function(d,i) { 
                    HandleClick(d3.select(this), "Miami"); 
                });
        maimi.transition()
            .delay(1600)
            .style("opacity", 0.5) 

            // Lake comes after MIAMI to overlap it
        var lake = canvas.append("circle")
            .attr("cx", (x + 30))
            .attr("cy", (y - 100))
            .attr("r", 15)
            .style("fill", "white")
            .attr("id", "borders")
            .style("opacity", 0);
        lake.transition()
            .delay(1200)
            .style("opacity", 1)

        var lakeland = canvas.append("polygon")
            .style("stroke", "")
            .style("fill", colors.getRandom())
            .style("opacity", 0.0)
            .attr("id", "borders")
            .attr("cursor", "pointer")
            .attr("points", 
                (x-70)+","+(y-184)+","+
                (x-74)+","+(y-184)+","+
                (x-74)+","+(y-190)+","+
                (x-71)+","+(y-191)+","+
                (x-71)+","+(y-195)+","+
                (x-42)+","+(y-200)+","+
                (x+4)+","+(y-150)+","+
                (x-65)+","+(y-142))
            .on("mouseover", function(){
                d3.select(this).style("opacity", ".8");
                d3.select("h2#name").remove();
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Lakeland - Winter Haven');
                })
            .on("mousemove", function(){
                })            
            .on("mouseout", function(){
                d3.select(this).style("opacity", ".5");
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Select a Metropolitan Area');
                })
            .on("mousedown", function(){d3.select(this).style("opacity", "1");})
            .on("click", function(d,i) { 
                    HandleClick(d3.select(this), "Lakeland"); 
                });
        lakeland.transition()
            .delay(1800)
            .style("opacity", 0.5) 

        var orlando = canvas.append("polygon")
            .style("stroke", "")
            .style("fill", colors.getRandom())
            .style("opacity", 0.0)
            .attr("id", "borders")
            .attr("cursor", "pointer")
            .attr("points", 
                (x-66)+","+(y-197)+","+
                (x-41)+","+(y-200)+","+
                (x+5)+","+(y-150)+","+
                (x+20)+","+(y-153)+","+
                (x+10)+","+(y-213)+","+
                (x)+","+(y-230)+","+
                (x-8)+","+(y-245)+","+
                (x-28)+","+(y-246)+","+
                (x-53)+","+(y-274)+","+
                (x-53)+","+(y-250)+","+
                (x-70)+","+(y-247))
            .on("mouseover", function(){
                d3.select(this).style("opacity", ".8");
                d3.select("h2#name").remove();
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Orlando');
                })
            .on("mousemove", function(){
                })            
            .on("mouseout", function(){
                d3.select(this).style("opacity", ".5");
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Select a Metropolitan Area');
                })
            .on("mousedown", function(){d3.select(this).style("opacity", "1");})
            .on("click", function(d,i) { 
                    HandleClick(d3.select(this), "Orlando"); 
                });
        orlando.transition()
            .delay(2000)
            .style("opacity", 0.5)

        var melbourne = canvas.append("polygon")
            .style("stroke", "")
            .style("fill", colors.getRandom())
            .style("opacity", 0.0)
            .attr("id", "borders")
            .attr("cursor", "pointer")
            .attr("points", 
                (x+19)+","+(y-166)+","+
                (x+11)+","+(y-213)+","+
                (x)+","+(y-230)+","+
                (x+1)+","+(y-244)+","+
                (x+14)+","+(y-246)+","+
                (x+34)+","+(y-226)+","+
                (x+30)+","+(y-210)+","+
                (x+20)+","+(y-210)+","+
                (x+47)+","+(y-170))
            .on("mouseover", function(){
                d3.select(this).style("opacity", ".8");
                d3.select("h2#name").remove();
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Palm Bay - Melbourne - Titusville');
                })
            .on("mousemove", function(){
                })            
            .on("mouseout", function(){
                d3.select(this).style("opacity", ".5");
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Select a Metropolitan Area');
                })
            .on("mousedown", function(){d3.select(this).style("opacity", "1");})
            .on("click", function(d,i) { 
                    HandleClick(d3.select(this), "Titusville"); 
                });
        melbourne.transition()
            .delay(1500)
            .style("opacity", 0.5) 

        var daytona = canvas.append("polygon")
            .style("stroke", "")
            .style("fill", colors.getRandom())
            .style("opacity", 0.0)
            .attr("id", "borders")
            .attr("cursor", "pointer")
            .attr("points", 
                (x)+","+(y-231)+","+
                (x+1)+","+(y-245)+","+
                (x+14)+","+(y-247)+","+
                (x-10)+","+(y-277)+","+
                (x-18)+","+(y-293)+","+
                (x-24)+","+(y-293)+","+
                (x-18)+","+(y-280)+","+
                (x-38)+","+(y-275)+","+
                (x-38)+","+(y-288)+","+
                (x-54)+","+(y-276)+","+
                (x-27)+","+(y-247)+","+
                (x-10)+","+(y-247))
            .on("mouseover", function(){
                d3.select(this).style("opacity", ".8");
                d3.select("h2#name").remove();
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Deltona - Daytona Beach - Ormond Beach');
                })
            .on("mousemove", function(){
                })            
            .on("mouseout", function(){
                d3.select(this).style("opacity", ".5");
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Select a Metropolitan Area');
                })
            .on("mousedown", function(){d3.select(this).style("opacity", "1");})
            .on("click", function(d,i) { 
                    HandleClick(d3.select(this), "Daytona"); 
                });
        daytona.transition()
            .delay(2100)
            .style("opacity", 0.5) 

        var jacksonville = canvas.append("polygon")
            .style("stroke", "")
            .style("fill", colors.getRandom())
            .style("opacity", 0.0)
            .attr("id", "borders")
            .attr("cursor", "pointer")
            .attr("points", 
                (x-55)+","+(y-300)+","+
                (x-29)+","+(y-310)+","+
                (x-50)+","+(y-360)+","+
                (x-57)+","+(y-391)+","+
                (x-70)+","+(y-391)+","+
                (x-90)+","+(y-395)+","+
                (x-100)+","+(y-385)+","+
                (x-95)+","+(y-375)+","+
                (x-95)+","+(y-355)+","+
                (x-105)+","+(y-355)+","+
                (x-110)+","+(y-370)+","+
                (x-125)+","+(y-370)+","+
                (x-120)+","+(y-335)+","+
                (x-93)+","+(y-340)+","+
                (x-85)+","+(y-305)+","+
                (x-60)+","+(y-320))
            .on("mouseover", function(){
                d3.select(this).style("opacity", ".8");
                d3.select("h2#name").remove();
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Jacksonville');
                })
            .on("mousemove", function(){
                })            
            .on("mouseout", function(){
                d3.select(this).style("opacity", ".5");
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Select a Metropolitan Area');
                })
            .on("mousedown", function(){d3.select(this).style("opacity", "1");})
            .on("click", function(d,i) { 
                    HandleClick(d3.select(this), "Jacksonville"); 
                });
        jacksonville.transition()
            .delay(1300)
            .style("opacity", 0.5) 

        var pensacola = canvas.append("polygon")
            .style("stroke", "")
            .style("fill", colors.getRandom())
            .style("opacity", 0.0)
            .attr("id", "borders")
            .attr("cursor", "pointer")
            .attr("points", 
                (x-470)+","+(y-310)+","+
                (x-470)+","+(y-338)+","+
                (x-486)+","+(y-352)+","+
                (x-484)+","+(y-363)+","+
                (x-428)+","+(y-368)+","+
                (x-428)+","+(y-320))
            .on("mouseover", function(){
                d3.select(this).style("opacity", ".8");
                d3.select("h2#name").remove();
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Pensacola - Ferry Pass - Brent');
                })
            .on("mousemove", function(){
                })            
            .on("mouseout", function(){
                d3.select(this).style("opacity", ".5");
                d3.select("h2").remove();
                d3.select("#metro").append('h2').text('Select a Metropolitan Area');
                })
            .on("mousedown", function(){d3.select(this).style("opacity", "1");})
            .on("click", function(d,i) { 
                    HandleClick(d3.select(this), "Pensacola"); 
                });
        pensacola.transition()
            .delay(1700)
            .style("opacity", 0.5) 

        // LINES 
        var miamiLines = canvas.append("polyline")
            .style("stroke", "white")  
            .style("fill", "none")
            .attr("id", "borders")
            .style("opacity", 0.0)
            .attr("points", 
                (x+95)+","+(y-25) +","+
                (x+38)+","+(y-23));
        miamiLines.transition()
            .delay(2200)
            .style("opacity", 1)

        var miamiLines2 = canvas.append("polyline")
            .style("stroke", "white")  
            .style("fill", "none")
            .attr("id", "borders")
            .style("opacity", 0.0)
            .attr("points", 
                (x+34)+","+(y-50)+","+
                (x+94)+","+(y-60));
        miamiLines2.transition()
            .delay(2200)
            .style("opacity", 1)

        var pensacolaLines = canvas.append("polyline")
            .style("stroke", "white")  
            .style("fill", "none")
            .attr("id", "borders")
            .style("opacity", 0)
            .attr("points", 
                (x-460)+","+(y-366)+","+
                (x-465)+","+(y-356)+","+
                (x-465)+","+(y-346)+","+
                (x-454)+","+(y-330));
        pensacolaLines.transition()
            .delay(2200)
            .style("opacity", 1)

        var jacksonvilleLines = canvas.append("polyline")
            .style("stroke", "white")  
            .style("fill", "none") 
            .attr("id", "borders")
            .style("opacity", 0)
            .attr("points", 
                (x-60)+","+(y-380)+","+
                (x-75)+","+(y-375)+","+
                (x-95)+","+(y-340)+","+
                (x-95)+","+(y-355)+","+
                (x-95)+","+(y-340)+","+
                (x-45)+","+(y-345));
        jacksonvilleLines.transition()
            .delay(2200)
            .style("opacity", 1)

        var orlandoLines = canvas.append("polyline")
            .style("stroke", "white")  
            .style("fill", "none") 
            .attr("id", "borders")
            .style("opacity", 0)
            .attr("points", 
                (x+10)+","+(y-207)+","+
                (x-47)+","+(y-199)+","+
                (x-47)+","+(y-235)+","+
                (x-32)+","+(y-235)+","+
                (x-26)+","+(y-245)+","+
                (x-32)+","+(y-235)+","+
                (x-32)+","+(y-225)+","+
                (x-25)+","+(y-225)+","+
                (x+1)+","+(y-227));
        orlandoLines.transition()
            .delay(2200)
            .style("opacity", 1)

        var tampaLines = canvas.append("polyline")
            .style("stroke", "white")  
            .style("fill", "none")
            .attr("id", "borders")
            .style("opacity", 0)
            .attr("points", 
                (x-110)+","+(y-178)+","+
                (x-110)+","+(y-162));
        tampaLines.transition()
            .delay(2200)
            .style("opacity", 1)
        
        var sarasodaLines = canvas.append("polyline")
            .style("stroke", "white")  
            .style("fill", "none")
            .attr("id", "borders")
            .style("opacity", 0)
            .attr("points", 
                (x-59)+","+(y-105)+","+
                (x-75)+","+(y-103)+","+
                (x-75)+","+(y-115)+","+
                (x-99)+","+(y-112));
        sarasodaLines.transition()
            .delay(2200)
            .style("opacity", 1)

        HandleClick("D3 ", "Cape"); 

         
        }
}

function removeDiv() {
    while (document.getElementById("currentCity")) { 
        var d = document.getElementById('mapHere');
        var olddiv = document.getElementById("currentCity");
        d.removeChild(olddiv); 
        }    
}


