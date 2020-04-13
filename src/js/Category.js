
export default class Category {
  constructor(categoryName, imgUrl, categoryNum) {
    this.categoryName = categoryName;
    this.imgUrl = imgUrl;
    this.categoryNum = categoryNum;
  }

  renderMenu() {
    return `
    <div id="${this.categoryNum}" class="sidemenu-item menu-item item${this.categoryNum}">${this.categoryName}</div>
    `;
  }

  renderCard() {
    return `
        <div id="${this.categoryNum}" class="card data-category">
        <img src="${this.imgUrl}" alt="Imagine image category" class='card-img data-category'">
        <div class="container data-category">
          <h4 class='data-category'><b>${this.categoryName}</b></h4>
        </div>
      </div>
        `;
  }
}
