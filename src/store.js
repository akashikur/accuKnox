import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./redux/categoriesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;
