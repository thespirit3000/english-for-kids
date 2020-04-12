export default class Category {
  constructor(categoryName, imgUrl) {
    this.categoryName = categoryName;
    this.imgUrl = imgUrl;
  }

  renderCard() {
    return `
        <div id="${this.categoryName}" class="card">
        <img src="${this.imgUrl}" alt="Here was might img" class='card-img'">
        <div class="container">
          <h4><b>${this.categoryName}</b></h4>
        </div>
      </div>
        `;
  }
}
