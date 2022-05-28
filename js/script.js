`use strict`;
// consts
const leftCountry = document.querySelector(`.country-l__helper`);
const rightCountry = document.querySelector(`.country-r__helper`);
const gameScore = document.querySelector(`.game-score`);
const gameAnswer = document.querySelector(`.game-answer`);
const leftCnName = document.querySelector(`.l-name`);
const rightCnName = document.querySelectorAll(`.r-name`);
/////////////////////////////////////////////////////////////////
// declarations
let score;
let isPlayable;
/////////////////////////////////////////////////////////////////
// functions
const init = function () {
  gameAnswer.classList.add(`hide-answer`);
  score = 3;
  isPlayable = true;
};
init();
/////////////////////////////////////////////////////////////////
// gets random number
let l;
let r;
function getRandomNum() {
  l = Math.trunc(Math.random() * 193) + 1;
  r = Math.trunc(Math.random() * 193) + 1;
  if (l === r) t = Math.trunc(Math.random() * 193) + 1;
}
getRandomNum();
/////////////////////////////////////////////////////////////////
// calls the api and gets the data
let countries;
const countryAPI = function () {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => initialize(data))
    .catch((err) => console.log("Error:", err));

  function initialize(countriesData) {
    countries = countriesData.map((el) => [el.name.common, el.population, el.cca2]);
  }
};
countryAPI();
/////////////////////////////////////////////////////////////////
// gets/shows info
const getInfo = function () {
  setTimeout(() => {
    leftCountry.style.backgroundImage = `url('https://countryflagsapi.com/png/${countries[l][2]}')`;
    rightCountry.style.backgroundImage = `url('https://countryflagsapi.com/png/${countries[r][2]}')`;
    leftCnName.textContent = countries[l][0];
    rightCnName.forEach((el) => (el.textContent = countries[r][0]));
    console.log(`L name: ${countries[l][0]}, pop: ${countries[l][1]}`);
    console.log(`R name: ${countries[r][0]}, pop: ${countries[r][1]}`);
    document.body.style.pointerEvents = `all`;
  }, 1400);
};
getInfo();
//////////////////////////////////////////////////////////////////
// updates the ui
const updateUI = function (answer) {
  gameScore.textContent = `Score: ${score}`;
  gameAnswer.textContent = answer ? `Correct!` : `Wrong!`;
  gameAnswer.classList.remove(`hide-answer`);
  document.body.style.pointerEvents = `none`;
};
//////////////////////////////////////////////////////////////////
// left country/flag button
const leftClick = function () {
  if (isPlayable) {
    if (countries[l][1] > countries[r][1]) {
      score++;
      updateUI(true);
    } else {
      --score;
      updateUI();
      if (score === 1) isPlayable = false;
    }
    getRandomNum();
    getInfo();
  } else {
    gameScore.textContent = `GAME OVER!!`;
  }
};
//////////////////////////////////////////////////////////////////
// left country/flag button
const rightClick = function () {
  if (isPlayable) {
    if (countries[l][1] < countries[r][1]) {
      score++;
      updateUI(true);
    } else {
      --score;
      updateUI();
      if (score === 1) isPlayable = false;
    }
    getRandomNum();
    getInfo();
  } else {
    gameScore.textContent = `GAME OVER!!`;
  }
};
//////////////////////////////////////////////////////////////////
// event listeners
leftCountry.addEventListener(`click`, leftClick);
rightCountry.addEventListener(`click`, rightClick);
