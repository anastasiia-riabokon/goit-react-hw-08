import {createAsyncThunk} from "@reduxjs/toolkit";
import {goitApi} from "../../config/goitApi";
import toast from "react-hot-toast";

export const registerThunk = createAsyncThunk("auth/register", async (credential, thunkAPI) => {
  try {
    const {data} = await goitApi.post("/users/signup", credential);
    toast.success("Registration successful!");

    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.code === 11000) {
      return toast.error("An account with this email already exists.");
    }
    return rejectWithValue(error.message);
  }
});
