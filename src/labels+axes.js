import { g } from './chart-area.js';
import { x, y } from './scales.js';
import { width, height } from './chart-area.js';

// ============================= Labels ===================================

const xLabel = g.append("text")
  .attr("y", height + 50)
  .attr("x", width / 2)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("GDP Per Capita ($)");
const yLabel = g.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", -40)
  .attr("x", -170)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("Life Expectancy (Years)")
export const timeLabel = g.append("text")
  .attr("y", height - 10)
  .attr("x", width - 40)
  .attr("font-size", "40px")
  .attr("opacity", "0.4")
  .attr("text-anchor", "middle")
  .text("1800");


// ============================= Axes ===================================

// X Axis
export const xAxisCall = d3.axisBottom(x)
  .tickValues([400, 4000, 40000])
  .tickFormat(d3.format("$"));
g.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0, " + height + ")")
  .call(xAxisCall);

// Y Axis
export const yAxisCall = d3.axisLeft(y)
  .ticks(10)
  .tickFormat(d => { return + d; });
g.append("g")
  .attr("class", "y-axis")
  .call(yAxisCall);
