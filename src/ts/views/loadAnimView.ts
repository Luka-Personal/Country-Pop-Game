import MainGameView from "./mainView/mainView";
class AnimationView {
  protected parentElement = document.querySelectorAll(`.country-main__holder`);
  generateSpinner(): void {
    const markup = `
      <div class="loading-spinner"><ion-icon name="reload-outline"></ion-icon></div>
    `;

    this.parentElement.forEach((el) => {
      el.innerHTML = ``;
      el.insertAdjacentHTML(`afterbegin`, markup);
    });
  }
}

export default new AnimationView();
