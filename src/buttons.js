// import { step } from './visual';
import { update } from './update.js';
// import { formattedData } from './visual.js'

// console.log(formattedData);

let i = 0;

// ================================= Play ======================================

let interval;

const playButton = document.getElementById("play-button");

export const play = (data) => {


  playButton.addEventListener("click", (e) => {

    if (playButton.textContent === "Play") {
      playButton.textContent = "Pause";
      interval = setInterval(() => step(data), 100);

    } else if (playButton.textContent === "Pause") {
      playButton.textContent = "Play";
      clearInterval(interval);
    }
  });

};

const step = (data) => {
  i = (i < 214) ? i + 1 : 214;
  update(data[i], i);
};


// ================================= Select ====================================

const selector = document.getElementById("continent-select");

export const select = (data) => {

  let continent = selector.value;

  data = data.filter(d => {
    if (continent === "all") {
      return true;
    } else {
      return d.continent === continent;
    }
  });

  return data;
};

export const updateSelect = (data) => {
  selector.addEventListener("change", () => {
    update(data[i], i);
  });
};


// ============================= Country Select ================================

const countrySelector = document.getElementById("country-select");

export const createOptions = (countries) => {

  countries.forEach( country => {
    let opt = document.createElement("option");
    opt.appendChild( document.createTextNode(`${country}`))
    opt.value = `${country}`;

    countrySelector.appendChild(opt);
  });
};

export const selectCountry = (data) => {

  let country = countrySelector.value;

  data = data.filter(d => {
    if (country === "all") {
      return true;
    } else {
      return d.country === country;
    }
  });

  return data;
}

export const updateCountry = (data) => {
  countrySelector.addEventListener("change", () => {
    update(data[i], i);
  });
};

// ================================ Reset ======================================

const resetButton = document.getElementById("reset-button");

export const reset = (data) => {

  resetButton.addEventListener("click", (e) => {
    i = 0;
    playButton.textContent = "Play";
    clearInterval(interval);
    countrySelector.value= "all";
    selector.value = "all";
    update(data[0], 0);
  });

};


// ============================== Check Boxes ==================================

// country-radio

const checkBoxForm = document.getElementById("country-radio");

export const createCheckBoxes = (countries) => {
  let x = '';
  countries.forEach( (country, i) => {
    let label = document.createElement("label");
    x = document.createElement("input");
    x.setAttribute("type", "checkbox")
    x.setAttribute("name", `countries-check`)
    x.setAttribute("value", `${country}`)
    // x.value = `${country}`;
    label.appendChild(x);
    label.innerHTML += "<span>" + country + "</span><br>"

    checkBoxForm.appendChild(label);
  })
};

export const checkCountry = (data) => {
  
  let checkedBoxes = document.querySelectorAll('input[name=countries-check]:checked');
  let selectedCountries = [];
  
  checkedBoxes.forEach((obj) => {
    // console.log(obj.value);
    selectedCountries.push(obj.value)
    // console.log(selectedCountries)
  })

  data = data.filter( d => {

    if (selectedCountries.length === 0) {
      return true;
    } else {
      return selectedCountries.includes(d.country)
    }
  })

  return data;
}

const checkboxButton = document.getElementById("country-checkoxes")
const allBoxes = document.getElementsByName("countries-check")


export const updateSelectedCountry = (data) => {

  checkboxButton.addEventListener('click', (e) =>  {
    e.preventDefault()
    update(data[i], i);
  })
};