export default class Category {
  constructor(categoryName, imgUrl) {
    this.categoryName = categoryName;
    this.imgUrl = imgUrl;
  }

  renderCard() {
    return `
        <div id="${this.categoryName}" class="card data-category">
        <img src="${this.imgUrl}" alt="Imagine image category" class='card-img data-category'">
        <div class="container data-category">
          <h4 class='data-category'><b>${this.categoryName}</b></h4>
        </div>
      </div>
        `;
  }
}
