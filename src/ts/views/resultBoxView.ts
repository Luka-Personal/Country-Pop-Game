import MainGameView from "./mainView/mainView";
class ResultBoxView extends MainGameView {
  protected parentElement = document.querySelector(`.res-box`) as HTMLDivElement;

  generateMarkup(): void {
    console.log(this.data);
    let markup = ``;
    if (this.data.score > 0) {
      markup = `
      <div class="result">
        <p class="game-score">Score: ${this.data.score}</p>
      </div>
      <div class="result">
        <p class="game-answer">${this.data.answer}</p>
      </div>
    `;
    }
    if (this.data.score === 0) {
      markup = `
      <div class="result">
        <p class="game-restart">RESTART!</p>
      </div>
      <div class="result">
        <p class="game-answer">GAME OVER!</p>
      </div>
    `;
    }
    this.clear();
    this.parentElement.insertAdjacentHTML(`afterbegin`, markup);
    if (this.data.score === 0) this.restart();
  }
  private restart() {
    document.body.style.pointerEvents = `none`;
    const resetBTN = document.querySelector(`.game-restart`) as HTMLButtonElement;
    resetBTN.style.pointerEvents = `all`;
    resetBTN.style.cursor = `pointer`;
    resetBTN.addEventListener(`click`, () => location.reload());
  }
}

export default new ResultBoxView();
