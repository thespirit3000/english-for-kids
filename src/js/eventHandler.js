import gameModeSet from './utils';

const handleClick = (event) => {
  if (event.target.classList.contains('open_menu')) {
    const menuElement = document.querySelector('.sidepanel');
    menuElement.setAttribute('style', 'width: 300px');
  }
  if (event.target.classList.contains('close_menu')) {
    const menuElement = document.querySelector('.sidepanel');
    menuElement.setAttribute('style', 'width: 0px');
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
