// import { step } from './visual';
import { update } from './update.js';
// import { formattedData } from './visual.js'
let selectedCountries;
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

// ================================ Reset ======================================

const resetButton = document.getElementById("reset-button");

export const reset = (data) => {

  resetButton.addEventListener("click", (e) => {
    i = 0;
    playButton.textContent = "Play";
    clearInterval(interval);
    // countrySelector.value= "all";
    selectedCountries = [];
    selector.value = "all";
    clearBoxes();
    update(data[0], 0);
  });

};


// ============================== Check Boxes ==================================

// country-radio

const checkBoxForm = document.getElementById("country-radio");

export const createCheckBoxes = (countries) => {
  let x = '';
  countries.forEach( (country, i) => {
    let container = document.createElement("div");
    container.setAttribute("class", "checkboxes")

    let label = document.createElement("label");

    x = document.createElement("input");
    x.setAttribute("type", "checkbox");
    x.setAttribute("name", `countries-check`);
    x.setAttribute("value", `${country}`);
    // console.log(x);
    label.appendChild(x);
    label.innerHTML += "<span>" + country + "</span>";

    container.appendChild(label);
    checkBoxForm.appendChild(container);
  });
};

export const checkCountry = (data) => {
  let checked;

  let checkedBoxes = document.querySelectorAll('input[name=countries-check]:checked');
  selectedCountries = [];
  
  checkedBoxes.forEach((obj) => {
    // console.log(obj.value);
    selectedCountries.push(obj.value)
    // console.log(selectedCountries)
  })

  data = data.filter( d => {

    if (selectedCountries.length === 0) {
      checked = false;
      return true;
    } else {
      checked = true;
      return selectedCountries.includes(d.country)
    }
  })

  return [data, checked];
}

const allBoxes = document.getElementsByName("countries-check")

export const clearBoxes = () => {
  allBoxes.forEach( box => {
    if (box.type === 'checkbox') {
      box.checked = false;
    }
  })
}

const clearChecks = document.getElementById("clear-checks");

export const clearAllChecks = data => {
  clearChecks.addEventListener('click', e => {
    clearBoxes();
    update(data[i], i);
  })
}

export const checkListener = data => {
  allBoxes.forEach ( box => {
    box.addEventListener('change', () => {
      update(data[i], i);
    })
  })
}
