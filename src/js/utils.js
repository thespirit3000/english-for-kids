const gameModeSet = (gameSwitcher) => {
  if (gameSwitcher.checked === true) {
    console.log('game');
  } else {
    console.log('learn');
  }
};

export { gameModeSet as default };
