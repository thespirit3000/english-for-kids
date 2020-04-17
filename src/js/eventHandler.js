import { renderLearnCards, renderCategoryMenu } from './render';
import state from './state';
import {
  gameModeSet, elementBySelector, setActive, removeActive, playAudio,
} from './utils';

const handleClick = (event) => {
  if (event.target.classList.contains('open_menu')) {
    const menuElement = document.querySelector('.sidepanel');
    menuElement.setAttribute('style', 'width: 300px');
    const active = elementBySelector(document, '.active');
    const sideMenu = elementBySelector(document, `.item${state.activeCategory}`);
    removeActive(active, 'active');
    setActive(sideMenu, 'active');
  }
  if (event.target.classList.contains('close_menu')) {
    const menuElement = document.querySelector('.sidepanel');
    menuElement.setAttribute('style', 'width: 0px');
  }

  if (event.target.classList.contains('data-category')) {
    renderLearnCards(event.target.parentElement.innerText);
    state.activeCategory = event.target.parentElement.id;
    const active = elementBySelector(document, '.active');
    const sideMenu = elementBySelector(document, `.item${state.activeCategory}`);
    removeActive(active, 'active');
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
  if (event.target.classList.contains('flip-card-overlay')) {
    const clickedCard = event.target.parentElement;
    playAudio(clickedCard);
  }
  if (event.target.classList.contains('rotate-card')) {
    const rotatingCard = event.path[4];
    rotatingCard.classList.add('rotate');
  }
};

const handleMouseOver = (event) => {
  console.log(event.target);
  if (event.target.classList.contains('data-card')) {
    const rotateRemove = document.querySelector('.rotate');
    rotateRemove.classList.remove('rotate');
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
  document.addEventListener('mouseout', handleMouseOver);
};

export { eventHandler as default };
