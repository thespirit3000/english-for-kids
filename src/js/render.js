import Category from './Category';
import cards from './cards';
import Card from './Card';

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
    const category = new Category(element, imgUrl);
    mainCategory.insertAdjacentHTML('beforeend', category.renderCard());
  });
};

export const renderLearnCards = (target) => {
  cleanMain();
  const main = document.querySelector('.main-window');
  const categoryIndex = cards[0].indexOf(target) + 1;
  cards[categoryIndex].forEach((element) => {
    const item = new Card(element);
    main.insertAdjacentHTML('beforeend', item.renderCard());
  });
};
