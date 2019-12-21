// import { update } from './update.js';

// let selectedCountries;

// ============================= Country Select ================================

// const countrySelector = document.getElementById("country-select");

// export const createOptions = (countries) => {

//   countries.forEach( country => {
//     let opt = document.createElement("option");
//     opt.appendChild( document.createTextNode(`${country}`))
//     opt.value = `${country}`;

//     countrySelector.appendChild(opt);
//   });
// };

// export const selectCountry = (data) => {

//   let country = countrySelector.value;

//   data = data.filter(d => {
//     if (country === "all") {
//       return true;
//     } else {
//       return d.country === country;
//     }
//   });

//   return data;
// }

// export const updateCountry = (data) => {
//   countrySelector.addEventListener("change", () => {
//     update(data[i], i);
//   });
// };