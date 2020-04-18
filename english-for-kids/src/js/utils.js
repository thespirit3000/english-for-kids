import state from './state';
import cards from './data-array';

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

const shuffleDom = (parentSelector) => {
  const list = document.querySelector(parentSelector);
  for (let i = list.children.length; i >= 0; i--) {
    list.appendChild(list.children[(Math.random() * i) || 0]);
  }
};

const mainArray = () => document.querySelector('.main').children;

export const startGame = () => {
  const array = mainArray();
  showButton('.repeat_btn');
};

export const stopGame = () => {
  hideButton('.repeat_btn');
  if (state.game) {
    showButton('.game_btn');
  }
};


export const removeWhiteSpaces = (string) => string.split(/\s/).join('');
