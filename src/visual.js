import { update } from './update.js';
import { legend } from './legend.js';

export const Visual = () => {
  legend;

  d3.json("data/data.json").then((data) => {

    // changes data from string to integer
    data.forEach(d => {
      d.countries.forEach(c => {
        c.income = +c.income;
      });
      d.year = +d.year;
    });

    // formats data to get rid of null values
    const formattedData = data.map(year => {
      return year["countries"].filter(country => {
        let dataExists = (country.income && country.life_exp);
        return dataExists;
      })
    });

    let i = 0

    d3.interval(() => {
      // At the end of our data, loop back
      i = (i < 214) ? i + 1 : 0;
      update(formattedData[i], i);
    }, 100);

    update(formattedData[0], 0);
 
  });
};