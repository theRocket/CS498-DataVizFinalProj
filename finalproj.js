d3.select("body")
  .style("background-color", "black")
  .transition()
  .duration(1000)
  .style("background-color", "white");

var circles = d3.select("#firstgraphic").selectAll("circle").data([4, 8, 15, 16, 23, 42]);

circles.enter().append("circle").merge(circles)
  .transition()
  .duration(750)
  .delay(function(d, i) { return i * 10; })
  .attr("cx",function(d,i) {return d*i;})
  .attr("cy",function(d,i) {return d*i;})
  .attr("r", function(d) {return Math.sqrt(d);})
  .style("fill", function(d, i) {return "hsl("+ Math.random() * 360 +",100%,50%)"});
