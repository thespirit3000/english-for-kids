const state = {
  activeCategory: 'main',
  game: false,
  toggleGameState() {
    this.game = !(this.game);
  },
};

export default state;
