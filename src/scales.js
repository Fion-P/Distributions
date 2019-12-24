import { width, height } from './chart-area.js';

// X Scale
export const x = d3.scaleLog()
  .domain([142, 150000])
  .range([0, width])
  .base(10);

// Y Scale
export const y = d3.scaleLinear()
  .range([height, 0])
  .domain([0, 90]);

// Area Scale
export const area = d3.scaleLinear()
  .range([25 * Math.PI, 1500 * Math.PI])
  .domain([2000, 1400000000]);
// scale by population

// Color Scale
export const continentColor = d3.scaleOrdinal().range(["#65001c", "#335152", "#B58254", "#678869"] );

export const americaColor = d3.scaleOrdinal().range(["rgb(49, 32, 17)", "rgb(85, 68, 52)", "rgb(131, 97, 66)", "rgb(153, 118, 85)", "rgb(195, 156, 119)"] );
export const africaColor = d3.scaleOrdinal().range(["#172918", "#2e4d30", "#48724b", "#609063", "#81c585"]);

export const europeColor = d3.scaleOrdinal().range(["#2a0c14", "#551929", "#792a3f", "#a84963", "#c07388"]);
export const asiaColor = d3.scaleOrdinal().range(["#192525", "#406162", "#557c7e", "#4098a0", "#6fb7bd"]);