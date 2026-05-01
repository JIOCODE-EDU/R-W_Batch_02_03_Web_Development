import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from "./redux/ItemReducer";


export const store = configureStore({
  items:ItemReducer
})