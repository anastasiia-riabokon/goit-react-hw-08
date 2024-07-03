import {createAsyncThunk} from "@reduxjs/toolkit";
import {goitApi} from "../../config/goitApi";

export const registerThunk = createAsyncThunk("auth/register", async (credential, thunkAPI) => {
  try {
    const {data} = await goitApi.post("/users/signup", credential);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
