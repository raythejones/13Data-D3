var svg = d3.select("svg");

var plot_data = function(){
    censusData = [31.4, 38.6, 50.2, 62.9, 76.0, 92.0, 105.7, 122.8, 131.4, 151.3, 179.3, 203.2, 226.5, 248.7, 281.4, 308.7];
    data = [];
    for (var i = 0; i < 16; i++){
        data.push([1860 + 10 * i, censusData[i]]);
    }
    
    dataPoints = svg.selectAll("circle").data(data).enter();
    dataPoints.append("circle")
    .attr("r", 5)
    .attr("fill", "blue")
    .attr("cx",
        function (d) { 
            return 5 * (d[0] - 1860) + 130;
        }
    )
    .attr("cy",
        function (d) { 
            //return 3 * (150 - d[1]) + 40;
            return 1.5 * (150 - d[1]) + 275;

        }
    );
    
    
    for (var i = 0; i < 16; i++){
        svg.append("text")
        .text(1860 + i * 10) // x-axis in years
        .attr("style", "text-anchor: middle")
        .attr("x", i * 50 + 130)
        .attr("y", 525);
        
        svg.append("text")
        .text(i * 20 + "mil    ----------------------------------------------------------------------------------------------------------------------------------------------------------") // y-axis in millions of people
        .attr("x", 70)
        .attr("y", 500 - i * 30);
    };
    svg.append("text")
    .text("Year")
    .attr("style", "font-color: red; text-anchor: middle; font-family: verdana; font-weight: bold;")
    .attr("x", 500)
    .attr("y", 560);
    
    svg.append("text")
    .text("Population")
    .attr("style", "color: red; text-anchor: middle; font-family: verdana; font-weight: bold; writing-mode: tb;")
    .attr("x", 25)
    .attr("y", 250);

};

plot_data();