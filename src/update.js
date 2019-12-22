import { g } from './chart-area.js';
import { x, y, area, continentColor } from './scales.js';
import { timeLabel, xAxisCall, yAxisCall } from './labels+axes.js';
import { tip } from './tooltip.js';
import { select, checkCountry } from './buttons.js';
// import { formattedData } from './visual.js'

export const update = (data, time) => {
  const t = d3.transition().duration(100);

  data = select(data)[0];

  data = checkCountry(data)[0];

  let checked = checkCountry(data)[1];
  let selected = select(data)[1];

  const circles = g.selectAll("circle")
    .data(data, d => {
      return d.country;
    });

  circles.exit().remove();

  circles.enter()
    .append("circle")
      .on("mouseover", tip.show)
      .on("mouseout", tip.hide)
      .merge(circles)
      .transition(t)
        .attr("fill", function (d) { return continentColor(d.continent); })
        .attr("cy", d => { return y(d.life_exp); })
        .attr("cx", d => { return x(d.income); })
        .attr("r", d => {
          return Math.sqrt(area(d.population) / Math.PI);
        })
        .attr("stroke", "rgb(231, 229, 229)")
        .attr("stroke-width", "1px")
        .attr("opacity", "0.8");

  let labelData 

  if (checked) {
    labelData = data;
  } else if (selected) {
    // labelData = data;
  } else {
    labelData =[];
  }

  const labels = g.selectAll("#labels")
    .data(labelData, d => {
      return d.country;
    });

  labels.exit().remove();

  labels.enter()
    .append("text")
    .attr("id", "labels")
    .merge(labels)
    .attr("y", d => { return y(d.life_exp) - (Math.sqrt(area(d.population) / (1.5 * Math.PI)))  ; })
    .attr("x", d => { return x(d.income) + (Math.sqrt(area(d.population) / (1.5 * Math.PI))); })
    .attr("font-size", "14px")
    .attr("font-weight", "bold")
    .attr("fill", "rgb(170, 170, 170)")
    .text(d => { return d.country; });

  timeLabel.text(+(time + 1800));
};