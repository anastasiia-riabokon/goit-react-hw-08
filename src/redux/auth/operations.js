import {createAsyncThunk} from "@reduxjs/toolkit";
import {clearAuthHeader, goitApi, setAuthHeader} from "../../config/goitApi";
import toast from "react-hot-toast";

export const registerThunk = createAsyncThunk("auth/register", async (credential, thunkAPI) => {
  try {
    const {data} = await goitApi.post("/users/signup", credential);
    toast.success("Registration successful!");
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.code === 11000) {
      toast.error("An account with this email already exists.");
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk("auth/login", async (credential, thunkAPI) => {
  try {
    const {data} = await goitApi.post("/users/login", credential);
    toast.success("Welcome!");
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    toast.error(
      "User does not exist or incorrect credentials or something went wrong. Please try again."
    );
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await goitApi.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const {auth} = thunkAPI.getState();

  if (!auth.token) {
    return thunkAPI.rejectWithValue("Not found token");
  }
  try {
    setAuthHeader(auth.token);
    const {data} = await goitApi.get("users/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
