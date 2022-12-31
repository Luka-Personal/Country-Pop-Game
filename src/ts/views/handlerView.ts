class HandlerView {
  onload(controller: any) {
    window.addEventListener(`load`, controller);
  }
  gameLogic(controller: any, resultBoxCb: any) {
    const btn = document.querySelectorAll(`.country-main__holder`);
    let score = 3;
    btn.forEach((el) => {
      el.addEventListener(`click`, function (e) {
        const target = e.target as HTMLDivElement;
        if (!target) return;
        const answer = target.dataset.answer;
        if (answer === `Correct!`) {
          score++;
        }
        if (answer === `Incorrect!`) {
          score--;
        }
        controller();
        resultBoxCb.render({ score, answer });
      });
    });
  }
}
export default new HandlerView();
