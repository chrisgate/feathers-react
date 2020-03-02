import {RootStore} from "./root.store";
import {action, observable} from "mobx";

export class AuthStore {
  // Properties
  rootStore!: RootStore;
  @observable _id = 15;

  // Instantiate
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action bumpValue() {
    this._id += Math.floor(20 * Math.random());
  }
}
