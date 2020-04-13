export default class Category {
  constructor(dataObj) {
    this.word = dataObj.word;
    this.translation = dataObj.translation;
    this.imgUrl = dataObj.image;
    this.audioSrc = dataObj.audioSrc;
  }

  renderCard() {
    return `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
        <img src="./assets/${this.imgUrl}" alt="Imagine image category" class='card-img data-card'">
        <div class="word-container">
          <h4 class='data-card'><b>${this.word}</b></h4>
        </div>
      </div>
      <div class="flip-card-back">
      <img src="./assets/${this.imgUrl}" alt="Imagine image category" class='card-img data-card'">
      <div class="word-container">
        <h4 class='data-card'><b>${this.translation}</b></h4>
      </div>
    </div>
  </div>
  `;
  }
}
