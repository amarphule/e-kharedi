import { configureStore } from "@reduxjs/toolkit";
import Products from "../slices/productsSlice";
import Cart from "../slices/cartSlice";
const store = configureStore({
  reducer: {
    products: Products,
    cart: Cart,
  },
});

export default store;
