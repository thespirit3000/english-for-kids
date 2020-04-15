export const gameModeSet = (gameSwitcher) => {
  if (gameSwitcher.checked === true) {
    console.log('game');
  } else {
    console.log('learn');
  }
};

export const elementBySelector = (element, selector) => element.querySelector(selector);

export const setActive = (element, activeSelectorClass) => {
  element.classList.add(activeSelectorClass);
};

export const removeActive = (element, activeSelectorClass) => {
  element.classList.remove(activeSelectorClass);
};

export const playAudio = (element) => {
  const toPlay = element.querySelector('audio');
  toPlay.play();
};

export const removeWhiteSpaces = (string) => string.split(/\s/).join('');
