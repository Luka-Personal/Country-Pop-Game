import { modelObj } from "../../model";
import { countryData } from "../../model";
export default abstract class MainGameView {
  protected abstract parentElement: HTMLDivElement;
  protected data: any;
  render(data: countryData | { score: number; answer: string }) {
    this.data = data;
    this.generateMarkup();
  }
  protected abstract generateMarkup(): void;
  protected clear() {
    this.parentElement.innerHTML = ``;
  }
}
