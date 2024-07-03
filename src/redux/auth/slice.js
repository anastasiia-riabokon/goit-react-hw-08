import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, logoutThunk, registerThunk} from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = "";
        state.isLoggedIn = false;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = slice.reducer;
