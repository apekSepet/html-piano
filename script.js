const pianoKeys = document.querySelectorAll(".piano-keys .key");
VolumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allkeys = [],
audio = new Audio("tunes/a.wav");

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; // passing audio src
  audio.play(); //play audio

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
}

pianoKeys.forEach(key => {
  allkeys.push(key.dataset.key);
  //calling playtune function passing data-key value
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const showHideKeys = () => {
  pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const handleVolume = (e) => {
  audio.volume = e.target.value;
}

const pressKey = (e) => {
    if(allkeys.includes(e.key)) playTune(e.key);
}


keysCheckbox.addEventListener("click", showHideKeys);
VolumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressKey);