// import { step } from './visual';
import { update } from './update.js';

let i = 0;

// ============================= Play ===================================

let interval;

export const play = (data) => {

  const playButton = document.getElementById("play-button");

  playButton.addEventListener("click", (e) => {

    if (playButton.textContent === "Play") {
      playButton.textContent = "Pause";
      interval = setInterval(() => step(data), 120);

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

// ============================= Reset ===================================

const resetButton = document.getElementById("reset-button");

export const reset = (data) => {

  resetButton.addEventListener("click", (e) => {
    i = 0;
    update(data[0], 0);
    clearInterval(interval);
  });

};


// ============================= Select ===================================

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