import { RootStore} from "./root.store";
import {createContext, useContext} from "react";

// Create store instance
export const store = new RootStore();

// Create a store context and hook so store can be easily accessed
// throughout the app.
export const StoreContext = createContext<RootStore>(store);
export const useStore = () => useContext(StoreContext);
