import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
const initialState = {
  isLoading: false,
  userInfo: null,
  userToken,
  error: null,
  success: null,
};

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const resp = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const result = await resp.json();
      localStorage.setItem("token", result.token);
      const user = { username, password };
      return { user, result };
    } catch (error) {
      return rejectWithValue("Username or Password is incorrect");
    }
  }
);

const UserSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.userInfo = null;
      state.userToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload?.user;
      state.success = "Login success";
      state.userToken = action.payload?.result?.token;
      state.error = null;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = UserSlice.actions;
export default UserSlice.reducer;
