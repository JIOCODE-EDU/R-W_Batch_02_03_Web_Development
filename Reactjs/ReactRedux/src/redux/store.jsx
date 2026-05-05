import { countReducer } from "./reducer";
import { createStore } from "redux";

export const store = createStore(countReducer)