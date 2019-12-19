const margin = { left: 80, right: 20, top: 50, bottom: 100 };

const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;
let time = 0;

export const g = d3.select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left
    + ", " + margin.top + ")");