import { g } from './chart-area.js';
import { width, height } from './chart-area.js';
import { africaColor, asiaColor, europeColor, americaColor } from './scales.js';
// import { africa } from './visual'

const all = { 
  "africa": 
    ["Zambia", "Uganda", "Tunisia", "Togo", "Tanzania", "Swaziland", "South Sudan", 
    "South Africa", "Senegal", "Sao Tome and Principe", "Rwanda", "Somalia", 
    "Gabon", "Egypt", "Algeria", "Cote d'Ivoire", "Liberia", "Sierra Leone", 
    "Congo, Rep.", "Congo, Dem. Rep.", "Gambia", "Benin", "Namibia", "Eritrea", 
    "Djibouti", "Cape Verde", "Sudan", "Central African Republic", "Guinea", 
    "Equatorial Guinea", "Lesotho", "Chad", "Burundi", "Ghana", "Burkina Faso", 
    "Angola", "Morocco", "Cameroon", "Niger", "Botswana", "Kenya", "Zimbabwe", 
    "Libya", "Guinea-Bissau", "Madagascar", "Malawi", "Mauritania", "Mauritius", 
    "Mozambique", "Nigeria", "Seychelles", "Mali", "Comoros", "Ethiopia"],
  "asia": 
    ["Vanuatu", "Uzbekistan", "Vietnam", "Turkmenistan", "Tonga", "Timor-Leste", 
    "Thailand", "Tajikistan", "Taiwan", "Syria", "Yemen", "South Korea", 
    "Solomon Islands", "Singapore", "Saudi Arabia", "Samoa", "Qatar", "Maldives", 
    "Myanmar", "Bhutan", "Fiji", "United Arab Emirates", "Macao, China", "Nepal", 
    "Cambodia", "New Zealand", "Kazakhstan", "Philippines", "Afghanistan", 
    "Pakistan", "Kiribati", "India", "Mongolia", "Bahrain", "Bangladesh", 
    "Oman", "Japan", "Micronesia, Fed. Sts.", "North Korea", "Hong Kong, China", 
    "China", "Iraq", "Iran", "Jordan", "Kuwait", "Kyrgyz Republic", "Lao", 
    "Israel", "Australia", "Malaysia", "Indonesia", "Sri Lanka", "Palestine", 
    "Lebanon", "Papua New Guinea", "Brunei"
  ],
  "americas": 
    ["Venezuela", "Uruguay", "United States", "Suriname", "Bahamas", 
    "St. Vincent and the Grenadines", 
    "Argentina", "Bolivia", "Cuba", "Haiti", "Colombia", "Chile", "El Salvador", 
    "Costa Rica", "Brazil", "Aruba", "Antigua and Barbuda", "Ecuador", "Mexico", 
    "St. Lucia", "Grenada", "Dominican Republic", "Jamaica", "Belize", "Canada", 
    "Guatemala", "Guyana", "Paraguay", "Puerto Rico", "Trinidad and Tobago", 
    "Barbados", "Nicaragua", "Panama", "Honduras", "Peru"],
  "europe": 
    ["United Kingdom", "Ukraine", "Turkey", "Sweden", "Slovenia", "Portugal", 
    "Georgia", "Finland", "Germany", "Slovak Republic", "Estonia", "Cyprus", 
    "Belgium", "Denmark", "France", "Austria", "Switzerland", "Montenegro", 
    "Czech Republic", "Greenland", "Greece", "Azerbaijan", "Hungary", "Romania", 
    "Armenia", "Spain", "Albania", "Russia", "Poland", "Serbia", "Moldova", 
    "Bosnia and Herzegovina", "Bulgaria", "Latvia", "Belarus", "Ireland", 
    "Italy", "Lithuania", "Luxembourg", "Macedonia, FYR", "Malta", "Norway", 
    "Netherlands", "Iceland"],
  "all": []
};

export let contLegend = g.append("g")
  .attr("transform", "translate(" + 40 + "," + (height + 60) + ")")

export const createContLegend = (continent) => {
  contLegend.remove();

  contLegend = g.append("g")
    .attr("transform", "translate(" + 40 + "," + (height + 60) + ")");
  
  if (continent === "all") {
    contLegend.append("text")
      .attr("x", width/2 - 40)
      .attr("y", 40)
      .attr("text-anchor", "middle")
      .attr("font-size", "16px")
      .attr("fill", "rgb(216, 216, 216)")
      .text("Select a continent to see it's list of countries here");
  }

  let countries = all[continent];
  
  countries.forEach((country, i) => {

    let c = 5;   // number of columns
    let h = 15;  // legend entry height
    let w = 150; // legend entry width (so we can position the next column) 
    let tx = 2; // tx/ty are essentially margin values
    let ty = 2;
    let x = i % c * w + tx;
    let y = Math.floor(i / c) * h + ty;

      let legendRow = contLegend.append("g")
        .attr("transform",
          "translate(" + x + "," + y + ")")

    legendRow.append("rect")
      .attr("width", 7)
      .attr("height", 7)

    console.log(continent);
    if (continent === "asia") {
      legendRow.attr("fill", asiaColor(country));
    } else if (continent === "europe") {
      legendRow.attr("fill", europeColor(country));
    } else if (continent === "americas") {
      legendRow.attr("fill", americaColor(country));
    } else {
      legendRow.attr("fill", africaColor(country));
    }

      legendRow.append("text")
        .attr("x", -2)
        .attr("y", 7)
        .attr("text-anchor", "end")
        .attr("font-size", "9px")
        .style("text-transform", "capitalize")
        .text(country);

  });
}


