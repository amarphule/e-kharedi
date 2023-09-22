import { configureStore } from "@reduxjs/toolkit";
import Products from "../slices/productsSlice";
import Cart from "../slices/cartSlice";
import User from "../slices/UserSlice";
const store = configureStore({
  reducer: {
    products: Products,
    cart: Cart,
    user: User,
  },
});

export default store;
