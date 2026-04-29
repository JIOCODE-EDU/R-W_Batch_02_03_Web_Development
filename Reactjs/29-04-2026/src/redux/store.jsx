import CounterReducer from "./Reducer";
import { createStore } from "redux";

const store = createStore(CounterReducer)

export default store  