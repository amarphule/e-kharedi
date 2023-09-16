import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pause } from "../components/Utils/pause";

const initialState = {
  products: [],
  isLoding: null,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (catagory = null, { rejectWithValue }) => {
    let url = "https://fakestoreapi.com/products/";

    if (catagory) {
      url = url + `category/${catagory}`;
    }
    if (catagory === "All") {
      url = "https://fakestoreapi.com/products";
    }

    try {
      const res = await fetch(url);
      await pause(300); //for showing the loader -->development purpose
      const result = await res.json();
      return result;
    } catch (e) {
      return rejectWithValue("Oops error occured while fetching products");
    }
  }
);

const productsSlice = createSlice({
  name: "Products",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
