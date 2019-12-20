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
      interval = setInterval(() => step(data), 100);
    } else if (playButton.textContent === "Pause") {
      playButton.textContent = "Play";
      clearInterval(interval);
    }
  });

};

const step = (data) => {
  i = (i < 214) ? i + 1 : 0;
  update(data[i], i);
};

// ============================= Reset ===================================

export const reset = (data) => {

  const resetButton = document.getElementById("reset-button");

  resetButton.addEventListener("click", (e) => {
    i = 0;
    update(data[0], 0);
  });

};

