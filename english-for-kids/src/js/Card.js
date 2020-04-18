export default class Card {
  constructor(dataObj, gameMode) {
    this.word = dataObj.word;
    this.translation = dataObj.translation;
    this.imgUrl = dataObj.image;
    this.audioSrc = dataObj.audioSrc;
    this.gameMode = gameMode;
  }

  renderGameCard() {
    return `
    <div class="flip-card">
    <div class="flip-card-inner">
      <div id="${this.word}" class="flip-card-front">
        <div class="flip-card-overlay">
          <audio>
            <source src="./assets/${this.audioSrc}" type="audio/mpeg" class=audio>
        </audio>
        </div>
          <img src="./assets/${this.imgUrl}" alt="Imagine image" class='card-img data-card imgGame'">
      </div>
      </div>
    `;
  }

  renderLearnCard() {
    return `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div id="${this.word}" class="flip-card-front">
          <div class="flip-card-overlay">
            <audio>
              <source src="./assets/${this.audioSrc}" type="audio/mpeg" class=audio>
          </audio>
          </div>
            <img src="./assets/${this.imgUrl}" alt="Imagine image category" class='card-img data-card'">
          <div class="word-container">
            <h4 class='data-card'><b>${this.word}</b></h4>
          </div>
          <button class="btn btn-rotate"><i class="fa fa-refresh rotate-card"></i></button>
        </div>
        <div class="flip-card-back">
          <img src="./assets/${this.imgUrl}" alt="Imagine image category" class='card-img data-card'">
          <div class="word-container data-card">
            <h4 class='data-card'><b>${this.translation}</b></h4>
          </div>
        </div>
      </div>
    </div>  
  `;
  }

  renderCard() {
    return (this.gameMode) ? this.renderGameCard() : this.renderLearnCard();
  }
}
