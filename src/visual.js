import { update } from './update.js';
import { legend } from './legend.js';
import { play, reset, updateSelect, createCheckBoxes,
  clearAllChecks, checkListener, sliderListener } from './buttons.js';
import { contLegend } from './continent_legends.js';


export let formattedData;
// export let africa = [];

export const Visual = () => {
  legend;
  contLegend;

  d3.json("data/data.json").then((data) => {

    // changes data from string to integer
    data.forEach(d => {
      d.countries.forEach(c => {
        c.income = +c.income;
      });
      d.year = +d.year;
    });
    
    // formats data to get rid of null values
    formattedData = data.map(year => {
      return year["countries"].filter(country => {
        let dataExists = (country.income && country.life_exp);
        return dataExists;
      })
    });

    // buttons and selectors
    play(formattedData);
    reset(formattedData);
    updateSelect(formattedData);
    // updateCountry(formattedData);
    // updateSelectedCountry(formattedData);
    clearAllChecks(formattedData);
    sliderListener(formattedData);
    // formattedData = selectCountry(formattedData)
    
    let countries = [];
    
    formattedData[0].forEach( r => {
      // console.log(r)
      countries.push(r.country)
      // countries.push(r.country);
    });
    
    countries.sort();
  

    // createCheckBoxes(countries);
    checkListener(formattedData);
    update(formattedData[0], 0);
 
  });
};
