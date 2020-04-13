import { renderLearnCards, renderCategoryMenu } from './render';
import state from './state';
import {
  gameModeSet, elementBySelector, setActive, removeActive,
} from './utils';

const handleClick = (event) => {
  if (event.target.classList.contains('open_menu')) {
    const menuElement = document.querySelector('.sidepanel');
    menuElement.setAttribute('style', 'width: 300px');
  }
  if (event.target.classList.contains('close_menu')) {
    const menuElement = document.querySelector('.sidepanel');
    menuElement.setAttribute('style', 'width: 0px');
  }
  if (event.target.classList.contains('data-category')) {
    renderLearnCards(event.target.parentElement.innerText);
    state.activeCategory = event.target.parentElement.id;
    const sideMenu = elementBySelector(document, `.item${state.activeCategory}`);
    setActive(sideMenu, 'active');
  }
  if (event.target.classList.contains('category')) {
    renderCategoryMenu();
    state.activeCategory = event.target.id;
    const active = elementBySelector(document, '.active');
    removeActive(active, 'active');
    setActive(event.target, 'active');
  }

  if (event.target.classList.contains('menu-item')) {
    renderLearnCards(event.target.innerText);
    state.activeCategory = event.target.id;
    const active = elementBySelector(document, '.active');
    removeActive(active, 'active');
    setActive(event.target, 'active');
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
