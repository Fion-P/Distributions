import { update } from './update.js';

let selectedCountries;
let i = 0;
let interval;

// ================================= Play ======================================

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
  // i = (i < 214) ? i + 1 : 214;
  i = (i < 214) ? i + 1 : 0;
  rangeslider.value = 1800 + i;
  output.innerHTML = rangeslider.value;
  update(data[i], i);
};


// ================================= Select ====================================

const selector = document.getElementById("continent-select");

export const select = (data) => {

  let continent = selector.value;
  let selected;

  data = data.filter(d => {
    if (continent === "all") {
      selected = false;
      return true;
    } else {
      selected = true;
      return d.continent === continent;
    }
  });

  return [data, selected];
};

export const updateSelect = (data) => {
  selector.addEventListener("change", () => {
    selectedCountries = [];
    clearBoxes();
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
    rangeslider.value = 1800;
    output.innerHTML = rangeslider.value;
    update(data[0], 0);
  });

};

// ============================== Slider ==================================

let rangeslider = document.getElementById("sliderRange");
let output = document.getElementById("demo");

output.innerHTML = rangeslider.value;

export const sliderListener = data => {

  rangeslider.addEventListener('input', () => {
    clearInterval(interval);
    playButton.textContent = "Play";
    output.innerHTML = rangeslider.value;
    i = rangeslider.value - 1800;
    update(data[i], i);
  });
};

// ============================== Check Boxes ==================================

const checkBoxForm = document.getElementById("country-radio");

export const createCheckBoxes = (countries) => {
  let x = '';
  countries.forEach( (country, i) => {
    let container = document.createElement("div");
    container.setAttribute("class", "checkboxes");

    let label = document.createElement("span");
    label.setAttribute("class", "box-label");
    label.innerHTML += country;


    let box = document.createElement("span");
    box.setAttribute("class", "each-box");

    x = document.createElement("input");
    x.setAttribute("type", "checkbox");
    x.setAttribute("name", `countries-check`);
    x.setAttribute("value", `${country}`);
    x.setAttribute("class", "input-checkbox");

    box.appendChild(x);

    container.appendChild(box);
    container.appendChild(label);
    checkBoxForm.appendChild(container);
  });
};

export const checkCountry = (data) => {
  let checked;

  let checkedBoxes = document.querySelectorAll('input[name=countries-check]:checked');
  selectedCountries = [];
  
  checkedBoxes.forEach((obj) => {
    selectedCountries.push(obj.value);
  });

  data = data.filter( d => {

    if (selectedCountries.length === 0) {
      checked = false;
      return true;
    } else {
      checked = true;
      return selectedCountries.includes(d.country);
    }
  });

  return [data, checked];
};

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
    // clearBoxes();
    selectedCountries = [];
    selector.value = "all";
    clearBoxes();
    update(data[i], i);
  })
}

export const checkListener = data => {
  allBoxes.forEach ( box => {
    box.addEventListener('change', () => {
      selector.value = "all";
      update(data[i], i);
    })
  })
}