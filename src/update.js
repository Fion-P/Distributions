import { g } from './chart-area.js';
import { x, y, area, continentColor } from './scales.js';
import { timeLabel, xAxisCall, yAxisCall } from './labels+axes.js';
import { tip } from './tooltip.js';
import { select } from './buttons.js'

export const update = (data, time) => {
  const t = d3.transition().duration(150);

  data = select(data);

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
        .attr("cy", d => { return y(d.life_exp) })
        .attr("cx", d => { return x(d.income) })
        .attr("r", d => {
          return Math.sqrt(area(d.population) / Math.PI);
        })
        .attr("stroke", "black")
        .attr("stroke-width", "1px");

  timeLabel.text(+(time + 1800))
};