import { makeAutoObservable } from "mobx";
import { CurrentPanelEnum } from "../types/app";

class App {
  currentPanel = CurrentPanelEnum.guestPanel;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPanel(panel: CurrentPanelEnum) {
    this.currentPanel = panel;
  }
}

export default new App();
