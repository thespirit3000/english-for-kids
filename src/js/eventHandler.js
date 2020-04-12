import gameModeSet from './utils';

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

export { eventHandler as default };
