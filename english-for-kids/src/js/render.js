import Category from './Category';
import cards from './data-array';
import Card from './Card';
import state from './state';

const cleanMain = () => {
  const main = document.querySelector('.main-window');
  main.innerHTML = '';
};

export const renderCategoryMenu = () => {
  cleanMain();
  cards[0].forEach((element) => {
    const mainCategory = document.querySelector('.main-window');
    const indexOfElement = cards[0].indexOf(element) + 1;
    const imgUrl = `./assets/${cards[indexOfElement][3].image}`;
    const category = new Category(element, imgUrl, cards[0].indexOf(element));
    mainCategory.insertAdjacentHTML('beforeend', category.renderCard());
  });
};

export const renderSideMenu = () => {
  const menu = document.querySelector('.sidepanel');
  cards[0].forEach((element) => {
    const category = new Category(element, '', cards[0].indexOf(element));
    menu.insertAdjacentHTML('beforeend', category.renderMenu());
  });
};

export const renderLearnCards = (target) => {
  cleanMain();
  const main = document.querySelector('.main-window');
  const categoryIndex = cards[0].indexOf(target) + 1;
  cards[categoryIndex].forEach((element) => {
    const item = new Card(element, state.game);
    main.insertAdjacentHTML('beforeend', item.renderCard());
  });
};

export const renderLearnCardsFromState = (stateActiveCategory) => {
  const categoryIndex = cards[0][+stateActiveCategory];
  renderLearnCards(categoryIndex);
}