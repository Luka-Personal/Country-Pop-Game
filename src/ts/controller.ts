import { countries } from "./model";
import countryLeftView from "./views/countryLeftView";
import countryRightView from "./views/countryRightView";
import handlerView from "./views/handlerView";
import loadAnimView from "./views/loadAnimView";
import resultBoxView from "./views/resultBoxView";
const mainController = async function () {
  try {
    // 1. Load loading spinner
    loadAnimView.generateSpinner();
    // 2. Get country data
    const data = await countries();
    // 3. Render Left country Data
    countryLeftView.render(data.countryL);
    // 4. Render Right country Data
    countryRightView.render(data.countryR);
  } catch (error) {
    alert(`ERROR`);
  }
};
const handerController = async function () {
  handlerView.onload(mainController);
  handlerView.gameLogic(mainController, resultBoxView);
};
handerController();
