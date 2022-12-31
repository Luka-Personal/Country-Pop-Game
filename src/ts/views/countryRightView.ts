import MainGameView from "./mainView/mainView";
class AuxView extends MainGameView {
  parentElement = document.querySelector(`.country-r__main`) as HTMLDivElement;

  protected generateMarkup() {
    const markup = `
      <img class="country-r__helper" data-answer="${this.data.answer}" alt="country flag" src="${this.data.flag}" />
      <p class="l-name country-name">${this.data.name}</p>
    `;

    this.clear();
    this.parentElement.insertAdjacentHTML(`afterbegin`, markup);
  }
}

export default new AuxView();
