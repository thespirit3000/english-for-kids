import gameModeSet from './utils';
import { renderLearnCards } from './render';

const handleClick = (event) => {
  // console.log(event.target.parentElement.innerText);
  if (event.target.classList.contains('open_menu')) {
    const menuElement = document.querySelector('.sidepanel');
    menuElement.setAttribute('style', 'width: 300px');
  }
  if (event.target.classList.contains('close_menu')) {
    const menuElement = document.querySelector('.sidepanel');
    menuElement.setAttribute('style', 'width: 0px');
  }
  if (event.target.classList.contains('data-category')) {
    console.log('sdklfj');
    renderLearnCards(event.target.parentElement.innerText);
  }
};

const handleInput = (event) => {
  if (event.target.classList.contains('switcher')) {
    gameModeSet(event.target);
  }
};

const eventHandler = () => {
  document.addEventListener('input', handleInput);
  document.addEventListener('click', handleClick);
};

export { eventHandler as default };
