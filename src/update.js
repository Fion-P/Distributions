import { g } from './chart-area.js';
import { x, y, area, continentColor } from './scales.js';
import { timeLabel, xAxisCall, yAxisCall } from './labels+axes.js';
import { tip } from './tooltip.js';
import { select, selectCountry, checkCountry } from './buttons.js';
// import { formattedData } from './visual.js'

export const update = (data, time) => {
  const t = d3.transition().duration(100);

  data = select(data);

  // console.log(data);
  data = selectCountry(data);

  data = checkCountry(data);
  // console.log(checkCountry(data));

  // let countries = [];

  // data.forEach(r => {
  //   // console.log(r)
  //   countries.push(r.country)
  //   // countries.push(r.country);
  // });

  // countries.sort();

  // console.log(countries);

  // createRadios(countries);

  const circles = g.selectAll("circle")
    .data(data, d => {
      // console.log(d);
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
          // console.log(d);
          return Math.sqrt(area(d.population) / Math.PI);
        })
        .attr("stroke", "black")
        .attr("stroke-width", "1px");

      // .append("text")
    
  // const labels = g.selectAll("text")
  //   .data(data, d => {
  //     // console.log(d);
  //     return d.country;
  //   });

  // labels.exit().remove();

  // labels.enter()
  //   .append("text")
  //   .merge(labels)
  //   .attr("y", d => { return y(d.life_exp) })
  //   .attr("x", d => { return x(d.income) })
  //   .attr("font-size", "8px")
  //   .text(d=>{return d.country})

  timeLabel.text(+(time + 1800));
};