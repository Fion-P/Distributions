import { g } from './chart-area.js';

export const tip = d3.tip().attr('class', 'd3-tip') // class to match css
  // set html with a function
  .html(d => {
    let text = "<strong>Country:</strong> <span style='color: #903436'>" + d.country + "</span><br>";
    text += "<strong>Continent:</strong> <span style='color: #903436; text-transform: capitalize'>" + d.continent + "</span><br>";
    text += "<strong>Life Expectancy:</strong> <span style='color: #903436'>" + d3.format(".2f")(d.life_exp) + "</span><br>";
    text += "<strong>GDP Per Capita:</strong> <span style='color: #903436'>" + d3.format("($.2f")(d.income) + "</span><br>";
    text += "<strong>Population:</strong> <span style='color: #903436'>" + d3.format(",.0f")(d.population) + "</span><br>";

    return text;
  });
// #2E4B69
// use call method to set context
g.call(tip);
