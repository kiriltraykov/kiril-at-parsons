 var year = 2014;
 var FIPS = null; 
 var FIPSclicked = null;
 
  var color = d3.scale.linear()
    .range(["hsl(120,60%,50%)", "hsl(120,100%,25%)"])
    .interpolate(d3.interpolateHcl)
    .domain([0,d3.quantile([0,552.8], .25)])

    d3.selection.prototype.moveToFront = function(){
    return this.each(function(){
      this.parentNode.appendChild(this);
    });
  };

  function debounce(func, wait){
  wait = wait || 0
  var timeout
    return function() {
   
    var later = function(){
      timeout = null
      func(arguments)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

 //Chropleth graph

 function chart1 () {
 	
 var container = d3.select("#choropleth")

 var formatPercent = d3.format(".1%");

 var svg = container.append("svg")
	

 tooltip = d3.select("body").append("div").attr("class", "tooltip")
	.style("opacity", 0);

 var geodata, cW, aspect, width, height, mscale, projection, path;
 var illnessdata;

 var states, statepaths;
  
 queue()
	.defer(d3.csv, "food-illnesses-state.csv")
	.defer(d3.json, "us.json")
	.await(ready);


function ready(error, data, us) {
illnessdata = data;
geodata = us;

states = topojson.feature(geodata, geodata.objects.states).features;
 
 var lookup = {}
  
  illnessdata.forEach(function(d){
    lookup[+d.FIPS] = d
  })
 
  states.forEach(function(d){
    d.properties.data = +d.id in lookup ? lookup[+d.id] : {}
  })

initMap(geodata);

}
      
  function sizeMap(){
    cW = container.node().getBoundingClientRect().width
    aspect = 0.6
    width = cW
    height = cW*aspect
    mscale = 1100 * (width / 900)
    projection = d3.geo.albersUsa()
      .scale( mscale )
      .translate([ width*0.5, height*0.5])
    path = d3.geo.path()
      .projection(projection)

    svg.attr("width", width)
      .attr("height", height)

  }
  
  sizeMap()

  function initMap(geodata){

    statepaths = svg.append("g")
        .attr("class", "state")
      .selectAll("path")
        .data(states)
      .enter().append("path")
        .attr("class", "statepath") 
        .attr("fill", "white")


    statepaths.on('mouseenter', showToolTip)
      .on('mouseleave', hideToolTip)
      .on('click', toggleState)

    function toggleState(d){
      var sel = d3.select(this)
      var test = sel.classed('clicked')

      if(test){
        sel.classed('clicked', false)
        FIPSclicked = null 
      } 
      else
      {
        FIPSclicked = +d.properties.data.FIPS
        statepaths.classed('clicked', false)
        sel.classed('clicked', true).moveToFront()
      }

      console.log('FIPSclicked', FIPSclicked)
      packCircles1(year, FIPSclicked)
       
    }

    function showToolTip(d,i){
      FIPS = +d.properties.data.FIPS 
      d3.selectAll("#linegraph .line").classed("highlight", function (d) {
        return FIPS == d.values[0].FIPS
      })
      d3.select("#linegraph .line.highlight").moveToFront();

      tooltip.style("opacity", 1)
      tooltip.html(d.properties.data.State + ": " +d.properties.data[year] + " per million")
      var thisBRC = this.getBoundingClientRect()

      var ttBCR = tooltip.node().getBoundingClientRect()
      var topPosition = ( thisBRC.top - ttBCR.height + pageYOffset )
      var leftPosition = ( thisBRC.left - ttBCR.width*0.5 + thisBRC.width*0.5 )
      
      tooltip
        .style({
          top: topPosition+'px', 
          left: leftPosition+'px'
        })
         }

    function hideToolTip(d,i){
      FIPS = null
      tooltip.style("opacity", 0)
      d3.selectAll("#linegraph .line").classed("highlight", false)
    }

    renderMap()


}


    function renderMap(){
         statepaths.attr("d", path)
    	    .transition().duration(500)
    	    .attr("fill", function (d) {
    		var yearvalue = +d.properties.data[year]
    		    		return yearvalue == 0 ? "rgb(205,205,193)" : color(yearvalue);
    	})
     }

    var redrawGraphic = debounce(redrawMap, 250)
    d3.select(window).on('resize.chart1', redrawGraphic)

    function redrawMap(){
    sizeMap()
    renderMap()
  }

}

chart1 ();

//Line graph

function chart2 () {

var margin2 = {top: 50, right: 20, bottom: 70, left: 50},
    width2 = 500 - margin2.left - margin2.right,
    height2 = 350 - margin2.top - margin2.bottom;

var parseDate = d3.time.format("%Y").parse;

var x = d3.time.scale().range([0, width2]);
var y = d3.scale.linear().range([height2, 0]);

var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(5);

var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(5);

var illnessline = d3.svg.line() 
    .x(function(d) { return x(d.year2); })
    .y(function(d) { return y(d.number); });
    
var container2 = d3.select("#linegraph")
    .append("svg")
        .attr("width", width2 + margin2.left + margin2.right)
        .attr("height", height2 + margin2.top + margin2.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin2.left + "," + margin2.top + ")");

d3.csv("year-trend.csv", function(error, data) {
    data.forEach(function(d) {
    d.year2 = parseDate(d.year2);
    d.number = +d.number;
    d.FIPS = +d.FIPS;
    });

     x.domain(d3.extent(data, function(d) { return d.year2; }));
     y.domain([0, 250]);

        var dataNest = d3.nest()
        .key(function(d) {return d.state})
        .entries(data);

    var linecolor = "rgb(220,220,220)";   // set the colour scale

    legendSpace = width2/dataNest.length; // spacing for the legend

       dataNest.forEach(function(d,i) { 

        container2.append("path")
            .attr("class", "line")
            .style("stroke", function () {
             this.__data__ = d
             return d.key == "USA Average" ? "blue" : linecolor
            })
            .attr("id", 'tag'+d.key.replace(/\s+/g, '')) // assign ID
            .attr("d", illnessline(d.values))
            .moveToFront();

        // Add the Legend
        if ( d.key == "USA Average") {
        container2.append("text")
            .attr("x", width2)  // space legend
            .attr("y", 0)
            .attr("class", "legend")    // style the legend
            .style("fill", "blue")
            .on("click", function(){
                // Determine if current line is visible 
                var active   = d.active ? false : true,
                newOpacity = active ? 0 : 1; 
                // Hide or show the elements based on the ID
                d3.select("#tag"+d.key.replace(/\s+/g, ''))
                    .transition().duration(100) 
                    .style("opacity", newOpacity); 
                // Update whether or not the elements are active
                d.active = active;
                })  
            .text(d.key); 
          }

    });

    // Add the X Axis
    container2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height2 + ")")
        .call(xAxis);

    // Add the Y Axis
    container2.append("g")
        .attr("class", "y axis")
        .call(yAxis);

});

}

chart2 ();

//Circle-Packing Diagram

function chart3 () {

   queue()
        .defer(d3.csv, "circle-diagram-data.csv")
        .await(saveData) //on load call saveData

        var margin3 = 20
          , container = d3.select('#circlepacking')
          , cBCR = container.node().getBoundingClientRect()
          , diameter = cBCR.width
          , foodata = [] //make foodata global in the scope of the chart3 function 

        var color3 = d3.scale.linear()
          .domain([-1, 5])
          .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
          .interpolate(d3.interpolateHcl)

       var pack = d3.layout.pack()
         .padding(2)
         .children(function(d) {
            return d.values  // accessor for children based on d3.nest
          })
         .size([diameter - margin3, diameter - margin3])
         // .value(function(d) { return d.size }) // the size attribute was hardcoded in the flare.json data
         .value(function(d) {
            return d.values  // accessor for values based on d3.nest
          })

      var container3 = d3.select("#circlepacking").append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
        .append("g")
  
  function saveData(err, foodataload){
    if (err) throw error;
    foodata = foodataload //save the loaded data to the global
    packCircles(year, FIPSclicked) //call packCircles() — the old init()
  }

  var packCircles = function(_year, _FIPS){ //Localizing year and FIPS, so they don't change mid function
      console.log('start')
      container3.remove()
      container3 = d3.select("#circlepacking svg").append("g")
        .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
      
      var yearsdata = []
      yearsdata = foodata.filter(function(d){
            var test1 = d.Year == _year 
            var test2 = _FIPS == null ? true : d.FIPS == _FIPS
            return test1 && test2
        });
      
      console.log(_year, _FIPS, foodata.length, yearsdata.length)

      if(yearsdata.length<1) return

            
        var foodnest = d3.nest()
            .key(function(d){ return d['Level 1'] })
            .key(function(d){ return d['Level 2'] })
            .key(function(d){ return d['Level 3'] })
            .rollup(function(leaves){ 
              var illnesses_weighted = leaves.map(function(d){return +d.IllnessesWeighted})
              return d3.sum(illnesses_weighted)
            })
            .entries(yearsdata)

      //D3.nest returns an array, but like flare.json, 
      //the pack layout wants the data wrapped in a "root node",
      //essentially an object that containes the nested data array
      foodnest = {key: 'root', values: foodnest}  

      var focus = foodnest,
          nodes = pack.nodes(foodnest),
          view;

      

  var circle = container3.selectAll("circle")
      .data(nodes)
    .enter().append("circle")
      .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
      .attr("fill", function(d) { return d.values ? color3(d.depth) : null; })
      .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

  var text = container3.selectAll("text")
      .data(nodes)
    .enter().append("text")
      .attr("class", "label")
      .style("fill-opacity", function(d) { return d.parent === foodnest ? 1 : 0; })
      .style("display", function(d) { return d.parent === foodnest ? "inline" : "none"; })
      .text(function(d) { return d.key }) // d3.nest uses 'key', not 'name' 

  var node = container3.selectAll("circle,text");

  d3.select("#circlepacking")
      .on("click", function() { zoom(foodnest); });

  zoomTo([foodnest.x, foodnest.y, foodnest.r * 2 + margin3]);

  function zoom(d) {
    var focus0 = focus; focus = d;

    var transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin3]);
          return function(t) { zoomTo(i(t)); };
        });

    transition.selectAll("#circlepacking text")
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
        .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
        .each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

  function zoomTo(v) {
    var k = diameter / v[2]; view = v;
    node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
    circle.attr("r", function(d) { return d.r * k; });
  }

d3.select(self.frameElement).style("height", diameter + "px");
console.log('end')
console.log('----------------')
}

return packCircles //return the rendering function so it can be used outside of this scope
}

var packCircles1 = chart3()

//Donut Chart

function chart4 () {

var width4 = 500,
    height4 = 300,
    radius4 = Math.min(width4, height4) / 2;

var color4 = d3.scale.ordinal()
    .range(["#FFC125", "#d95f02", "#7570b3", "#1b9e77", "#66a61e", "#CD3700", "#a6761d"]);

var arc4 = d3.svg.arc()
    .outerRadius(radius4 - 10)
    .innerRadius(radius4 - 70);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.cumulative; });

var container4 = d3.select("#location").append("svg")
    .attr("width", width4)
    .attr("height", height4)
  .append("g")
    .attr("transform", "translate(" + width4 / 2 + "," + height4 / 2 + ")");

d3.csv("place-illness.csv", type, function(error, data) {
  if (error) throw error;

  var g4 = container4.selectAll(".arc4")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc4");

  g4.append("path")
      .attr("d", arc4)
      .style("fill", function(d) { return color4(d.data.place); });

  var donutPiece = d3.scale.linear().range([0, 100]).domain([0, 3440]);
  var f = d3.format(".0%");
  
  g4.append("text")
      .attr("transform", function(d) { return "translate(" + arc4.centroid(d) + ")"; })
      .attr("dy", ".15em")
      .attr("class", "z-class")
      .text(function(d) {return d.data.place + " " + f(donutPiece(d.data.cumulative)); });
      
});

function type(d) {
  d.cumulative = +d.cumulative;
  return d;
}

}

chart4 ();

 