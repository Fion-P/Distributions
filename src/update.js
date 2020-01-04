import { g } from './chart-area.js';
import { x, y, area, continentColor, africaColor, asiaColor, europeColor, americaColor } from './scales.js';
import { timeLabel, xAxisCall, yAxisCall } from './labels+axes.js';
import { tip } from './tooltip.js';
import { select, checkCountry, createCheckBoxes } from './buttons.js';
import { createContLegend, contLegend } from './continent_legends.js';
// import { formattedData } from './visual.js'

const labelColor = d3.scaleOrdinal()
  .domain(["europe", "asia", "americas", "africa"])
  .range(["#4e0016", "#294041", "rgb(156, 112, 74)", "#557057"]);

export const update = (data, time) => {
  const t = d3.transition().duration(100);

  data = select(data)[0];

  // let countries = [];

  // data.forEach(r => {
  //   // console.log(r)
  //   countries.push(r.country);
  //   // countries.push(r.country);
  // });
  // countries.sort();
  // createCheckBoxes(countries);

  
  let checked = checkCountry(data)[1];
  
  data = checkCountry(data)[0];
  // let allChecked = checkCountry(data)[0];
  
  let selected = select(data)[1];

  // if (!selected) {
  //   data = checkCountry(data)[0];
  // } 
    
  let continent = select(data)[2];

  // contLegend.remove();
  
  contLegend;
  createContLegend(continent);


  let color = (
    d => { return continentColor(d.continent);}
  );

  if (selected && (continent === "africa")) {
    color = (
      d => { return africaColor(d.country); }
    );
  } else if (selected && (continent === "asia")) {
    color = (
      d => { return asiaColor(d.country); }
    );
  } else if (selected && (continent === "europe")) {
    color = (
      d => { return europeColor(d.country); }
    );
  } else if (selected && (continent === "americas")) {
    color = (
      d => { return americaColor(d.country); }
    );
  }

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
        // .attr("fill", (d) => { return continentColor(d.continent); })
        .attr("fill", color)
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
    // labelData = allChecked;
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