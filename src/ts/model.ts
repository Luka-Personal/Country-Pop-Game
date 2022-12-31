export type countryData = { name: string; population: number; flag: string; answer: string };
export type modelObj = {
  countryL: countryData;
  countryR: countryData;
};
export const countries = async function (): Promise<modelObj> {
  const res = await fetch(`https://restcountries.com/v2/all?fields=name,population,flag
`);
  const data = await res.json();
  const shuffled: [countryData, countryData] = data.sort(() => 0.5 - Math.random()).slice(0, 2);
  const [countryLeft, countryRight] = shuffled;
  return makeDataObj(countryLeft, countryRight);
};
const makeDataObj = function (L: countryData, R: countryData) {
  let model: Partial<modelObj> = {};
  model.countryL = L;
  model.countryR = R;
  if (L.population < R.population) {
    model.countryL.answer = `Incorrect!`;
    model.countryR.answer = `Correct!`;
  }
  if (L.population > R.population) {
    model.countryL.answer = `Correct!`;
    model.countryR.answer = `Incorrect!`;
  }
  return model as modelObj;
};
