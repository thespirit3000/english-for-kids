import {
  renderLearnCards,
  renderCategoryMenu,
  renderLearnCardsFromState,
} from './render';
import state from './state';
import {
  elementBySelector,
  setActive,
  removeActive,
  playAudio,
  closeMenu,
  showButton,
  startGame,
  hideButton,
  stopGame,
} from './utils';

const handleClick = (event) => {
  if (event.target.classList.contains('open_menu')) {
    const menuElement = document.querySelector('.sidepanel');
    menuElement.setAttribute('style', 'width: 300px');
    const active = elementBySelector(document, '.active');
    const sideMenu = elementBySelector(document, `.item${state.activeCategory}`);
    removeActive(active, 'active');
    setActive(sideMenu, 'active');
    stopGame();
  }
  if (event.target.classList.contains('close_menu')) {
    closeMenu();
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
    closeMenu();
  }
  if (event.target.classList.contains('sidemenu-item')) {
    closeMenu();
  }
  if (event.target.classList.contains('flip-card-overlay')) {
    const clickedCard = event.target.parentElement;
    if (!state.game) {
      playAudio(clickedCard);
    }
  }
  if (event.target.classList.contains('rotate-card')) {
    const rotatingCard = event.path[4];
    rotatingCard.classList.add('rotate');
  }
  if (event.target.classList.contains('game_btn')) {
    startGame();
    hideButton('.game_btn');
  }
};

const handleMouseOver = (event) => {
  if (event.target.classList.contains('data-card')) {
    const rotateRemove = document.querySelector('.rotate');
    rotateRemove.classList.remove('rotate');
  }
};

const handleInput = (event) => {
  if (event.target.classList.contains('switcher')) {
    state.toggleGameState();
    if (state.activeCategory !== 'main') {
      if (state.game) {
        showButton('.game_btn');
      } else {
        hideButton('.game_btn');
        stopGame();
      }
      renderLearnCardsFromState(state.activeCategory);
    }
  }
};

const eventHandler = () => {
  document.addEventListener('input', handleInput);
  document.addEventListener('click', handleClick);
  document.addEventListener('mouseout', handleMouseOver);
};

export {
  eventHandler as
  default,
};
