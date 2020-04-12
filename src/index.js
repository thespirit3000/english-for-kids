import PrintUi from './js/PrintUi';

const gameModeSet = (gameSwitcher) => {
  if (gameSwitcher.checked === true) {
    console.log('game');
  } else {
    console.log('learn');
  }
};

const handleClick = (event) => 1;

const handleInput = (event) => {
  if (event.target.classList.contains('switcher')) {
    gameModeSet(event.target);
  }
};

const eventHandler = () => {
  document.addEventListener('input', handleInput);
  document.addEventListener('click', handleClick);
};

const initialize = () => {
  const ui = new PrintUi();
  document.body.insertAdjacentHTML('afterbegin', ui.header);
  eventHandler();
};

const unloadWindow = () => {
};

window.onload = initialize;
window.onbeforeunload = unloadWindow;
