import { g } from './chart-area.js';
import { width, height } from './chart-area.js';
import { continentColor } from './scales.js';

const continents = ["europe", "asia", "americas", "africa"];

export const legend = g.append("g")
  .attr("transform", "translate(" + (width - 10) + "," + (height - 125) + ")");
// shift to bottom of visualization

continents.forEach((continent, i) => {
  let legendRow = legend.append("g")
    .attr("transform", "translate(0," + (i * 20) + ")");
  // using the index "i" so that each row are seperated by 20px in the y direction
  // create the squares of colors
  legendRow.append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("fill", continentColor(continent));

  // create the labels
  legendRow.append("text")
    .attr("x", -10)
    // puts the texts -10px aka 10px to the left
    .attr("y", 10)
    // y-val of 10 so that the texts lines up vertically
    .attr("text-anchor", "end")
    // text anchor end so text gets appended from the end of the texts
    .style("text-transform", "capitalize")
    // fomrats the texts 
    .text(continent);

});