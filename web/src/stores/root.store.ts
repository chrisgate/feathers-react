import {AuthStore} from "./auth.store";

export class RootStore {
  // Sub-stores
  authStore!: AuthStore;

  // Instantiation
  constructor() {
    this.instantiateStore();
  }
  instantiateStore() {
    this.authStore = new AuthStore(this);
  }
}
