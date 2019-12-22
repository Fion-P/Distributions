import { g } from './chart-area.js';
import { x, y, area, continentColor } from './scales.js';

export const tip = d3.tip().attr('class', 'd3-tip') // class to match css
  // set html with a function
  .html(d => {
    let text = `<span>Country:</span> <span style='color: ${continentColor(d.continent)}'>` + d.country + "</span><br>";
    text += `<span>Continent:</span> <span style='color: ${continentColor(d.continent)}; text-transform: capitalize'>` + d.continent + "</span><br>";
    text += `<span>Life Expectancy:</span> <span style='color: ${continentColor(d.continent)}'>` + d3.format(".2f")(d.life_exp) + "</span><br>";
    text += `<span>GDP Per Capita:</span> <span style='color: ${continentColor(d.continent)}'>` + d3.format("($.2f")(d.income) + "</span><br>";
    text += `<span>Population:</span> <span style='color: ${continentColor(d.continent)}'>` + d3.format(",.0f")(d.population) + "</span><br>";

    return text;
  });
// #2E4B69
// use call method to set context
g.call(tip);
