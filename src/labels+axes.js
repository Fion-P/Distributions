import { g } from './chart-area.js';
import { x, y } from './scales.js';
import { width, height } from './chart-area.js';

// ============================= Labels ===================================

const xLabel = g.append("text")
  .attr("y", height + 45)
  .attr("x", width / 2)
  .attr("font-size", "17px")
  .attr("text-anchor", "middle")
  .attr("font-weight", "600")
  // .attr("fill", "rgb(170, 170, 170)")
  .text("GDP Per Capita ($)");
const yLabel = g.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", -40)
  .attr("x", - height/2)
  .attr("font-size", "17px")
  .attr("text-anchor", "middle")
  .attr("font-weight", "600")
  // .attr("fill", "rgb(170, 170, 170)")
  .text("Life Expectancy (Years)");
export const timeLabel = g.append("text")
  .attr("y", height - 10)
  .attr("x", width - 45)
  .attr("font-size", "40px")
  .attr("opacity", "0.9")
  .attr("fill", "rgb(170, 170, 170)")
  .attr("text-anchor", "middle")
  .attr("class", "time-label")
  .text("1800");


// ============================= Axes ===================================

// X Axis
export const xAxisCall = d3.axisBottom(x)
  .tickValues([400, 4000, 40000])
  .tickFormat(d3.format("$"));
g.append("g")
  .attr("class", "x-axis")
  .attr("transform", "translate(0, " + height + ")")
  .attr("stroke-width", "1.5px")
  .call(xAxisCall);

// Y Axis
export const yAxisCall = d3.axisLeft(y)
  .ticks(10)
  .tickFormat(d => { return + d; });
g.append("g")
  .attr("class", "y-axis")
  .attr("stroke-width", "1.5px")
  .call(yAxisCall);


// ============================= Linear Line ===================================

const line = g.append("line")
  .attr("x1", width)
  .attr("y1", 0)
  .attr("x2", 1)
  .attr("y2", height - 1)
  .attr("stroke", "#E0DEDE")
  .attr("stroke-width", "1px");