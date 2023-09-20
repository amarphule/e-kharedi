import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pause } from "../components/Utils/pause";

const initialState = {
  products: [],
  isLoading: null,
  error: null,
  searchQuery: "",
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
  reducers: {
    searchProduct: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { searchProduct } = productsSlice.actions;
export default productsSlice.reducer;
