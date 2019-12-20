import { step } from './visual';

let interval;

export const play = () => {
  const playButton = document.getElementById("play-button");

  console.log(playButton.textContent);

  playButton.addEventListener("click", (e) => {
    if (playButton.textContent === "Play") {
      playButton.textContent = "Pause";
      interval = setInterval(step, 100);
    } else if (playButton.textContent === "Pause") {
      playButton.textContent = "Play";
      clearInterval(interval);
    }
  });
};

