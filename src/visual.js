// ============================= Data ===================================

export const visual = d3.json("data/data.json").then((data) => {

  data.forEach(d => {
    d.countries.forEach(c => {
      c.income = +c.income;
    });
    d.year = +d.year;
  });
  // Does the same as the .map before

  const formattedData = data.map(year => {
    return year["countries"].filter(function (country) {
      let dataExists = (country.income && country.life_exp);
      return dataExists
    })
  });

});