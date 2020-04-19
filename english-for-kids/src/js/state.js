const state = {
  activeCategory: 'main',
  game: false,
  gameStarted: false,
  gameArray: [],
  currentWord: '',
  currentIndex: '0',
  toggleStarted() {
    this.gameStarted = !(this.gameStarted);
  },
  toggleGameState() {
    this.game = !(this.game);
  },
};

export default state;
