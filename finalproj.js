<script>
  var width = 720;
  var height = 405;
	d3.select("body")
	  .style("background-color", "black")
	  .transition()
	  .duration(1000)
	  .style("background-color", "white");
	var scale = 300;
	var circles = d3.select("#firstgraphic").selectAll("circle").data([4, 8, 15, 16, 23, 42]);
	circles.enter().append("circle").merge(circles)
	  .transition()
	  .duration(750)
	  .delay(function(d, i) { return i * 10; })
	  .attr("cx",function(d) {return (width/2) + d;})
	  .attr("cy",function(d) {return (height/2) + d;})
	  .attr("r", function(d) { return Math.sqrt(d * scale); })
	  .style("fill", function(d, i) {return "hsl(" + i*360 + ",100%,50%)"});
</script>