import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pause } from "../components/Utils/pause";

const initialState = {
  products: [],
  isLoading: null,
  error: null,
  searchQuery: "",
  categories: [],
  categoryLoading: null,
  categoryError: null,
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

export const fetchCategory = createAsyncThunk(
  "products/categories",
  async (param, { rejectWithValue }) => {
    let url = "https://fakestoreapi.com/products/categories/";
    try {
      const resp = await fetch(`${url}`);
      const result = await resp.json();

      return ["All", ...result];
    } catch (e) {
      return rejectWithValue("Oops error occurred while fetching categories");
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
    builder.addCase(fetchCategory.pending, (state) => {
      state.categoryLoading = true;
      state.categoryError = null;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.categoryLoading = false;
      state.categories = action.payload;
      state.categoryError = null;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.categoryLoading = false;
      state.categoryError = action.payload;
    });
  },
});

export const { searchProduct } = productsSlice.actions;
export default productsSlice.reducer;
