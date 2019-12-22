import { g } from './chart-area.js';
import { x, y, area, continentColor } from './scales.js';
import { timeLabel, xAxisCall, yAxisCall } from './labels+axes.js';
import { tip } from './tooltip.js';
import { select, checkCountry } from './buttons.js';
// import { formattedData } from './visual.js'

const labelColor = d3.scaleOrdinal()
  .domain(["europe", "asia", "americas", "africa"])
  .range(["#4e0016", "#294041", "rgb(156, 112, 74)", "#557057"]);

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
        .attr("fill", (d) => { return continentColor(d.continent); })
        .attr("cy", d => { return y(d.life_exp); })
        .attr("cx", d => { return x(d.income); })
        .attr("r", d => {
          return Math.sqrt(area(d.population) / Math.PI);
        })
        .attr("stroke", (d) => { return labelColor(d.continent); })
        .attr("stroke-width", "1px")
        .attr("opacity", "0.8");

  let labelData 

  if (checked) {
    labelData = data;
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
    .attr("fill", (d) => { return labelColor(d.continent); })
    .text(d => { return d.country; });

  timeLabel.text(+(time + 1800));
};