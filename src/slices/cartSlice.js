import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    removeAll: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
