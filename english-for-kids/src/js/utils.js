import state from './state';

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

export const closeMenu = () => {
  const menuElement = document.querySelector('.sidepanel');
  menuElement.setAttribute('style', 'width: 0px');
};

export const showButton = (selector) => {
  const buttonToShow = document.querySelector(selector);
  buttonToShow.classList.remove('hidden_opacity');
};

export const hideButton = (selector) => {
  const buttonToHide = document.querySelector(selector);
  buttonToHide.classList.add('hidden_opacity');
};

const activeArray = () => document.querySelectorAll('.active_card');

export const startGame = () => {
  state.toggleStarted();
  showButton('.repeat_btn');
  state.gameArray = activeArray();
  const { length } = state.gameArray;
  const index = Math.floor(Math.random() * length);
  state.currentIndex = index;
  state.currentWord = state.gameArray[index];
  console.log(state.gameArray);
  playAudio(state.currentWord);
};

export const nextCard = () => {
  state.gameArray = activeArray();
  const { length } = state.gameArray;
  const index = Math.floor(Math.random() * length);
  state.currentIndex = index;
  state.currentWord = state.gameArray[index];
  console.log(state.gameArray);
  playAudio(state.currentWord);
};

export const stopGame = () => {
  state.toggleStarted();
  hideButton('.repeat_btn');
  state.gameArray = [];
  state.currentWord = '';
  if (state.game) {
    showButton('.game_btn');
  }
};


export const removeWhiteSpaces = (string) => string.split(/\s/).join('');
