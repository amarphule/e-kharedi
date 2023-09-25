import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast(
          `${state.cartItems[itemIndex].title.slice(
            0,
            16
          )} quantity updated in cart`
        );
      } else {
        const tempItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempItem);
        toast(`${tempItem.title.slice(0, 16)} is added to cart`, {
          autoClose: 1500,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    quantityDecrease: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (state.cartItems[index].cartQuantity > 1) {
        state.cartItems[index].cartQuantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        );
      }
    },
    removeAll: (state, action) => {
      state.cartItems = [];
    },
    totalCartPriceAndQuantity: (state, action) => {
      const { price, quantity } = state.cartItems.reduce(
        (acc, item) => {
          const total = item.cartQuantity * item.price;
          acc.price += total;
          acc.quantity += item.cartQuantity;

          return acc;
        },
        { quantity: 0, price: 0 }
      );

      state.cartTotalAmount = price.toFixed(2);
      state.cartTotalQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAll,
  quantityDecrease,
  totalCartPriceAndQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
