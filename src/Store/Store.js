import { configureStore } from "@reduxjs/toolkit";
import Products from "../slices/productsSlice";

const store = configureStore({
  reducer: {
    products: Products,
  },
});

export default store;
