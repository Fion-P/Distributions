import { g } from './chart-area.js';
import { x, y, area, continentColor } from './scales.js';
import { timeLabel, xAxisCall, yAxisCall } from './labels+axes.js';

export const update = (data, time) => {
  // console.log(data);
  console.log(time)
  const circles = g.selectAll("circle")
    .data(data, d => {
      return d.country;
    });

  console.log(circles.enter());
  circles.enter()
    .append("circle")
      .attr("fill", function (d) { return continentColor(d.continent); })
      .attr("cy", d => { return y(d.life_exp) })
      .attr("cx", d => { return x(d.income) })
      .attr("r", d => {
        return Math.sqrt(area(d.population) / Math.PI);
      });

  // timeLabel.text(+(time + 1800))
};