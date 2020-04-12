import Category from './Category';
import cards from './cards';


const renderCategoryMenu = () => {
  cards[0].forEach((element) => {
    console.log(element);
    const mainCategory = document.querySelector('.main-window');
    const indexOfElement = cards[0].indexOf(element) + 1;
    const imgUrl = `./assets/${cards[indexOfElement][3].image}`;
    console.log(imgUrl);
    const category = new Category(element, imgUrl);
    mainCategory.insertAdjacentHTML('beforeend', category.renderCard());
  });
};

export default renderCategoryMenu;
