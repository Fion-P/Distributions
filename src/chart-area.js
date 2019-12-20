const margin = { left: 80, right: 20, top: 50, bottom: 100 };

export const width = 800 - margin.left - margin.right;
export const height = 500 - margin.top - margin.bottom;

export const g = d3.select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left
    + ", " + margin.top + ")");

const line = g.append("line")
  .attr("x1", width)
  .attr("y1", 0)
  .attr("x2", 0)
  .attr("y2", height)
  .attr("stroke", "gray")
  .attr("stroke-width", "1px");