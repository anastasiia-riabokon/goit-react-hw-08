import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  name: "",
  number: "",
};

const sliceFilter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
      state.number = action.payload;
    },
  },
});

export const filterReducer = sliceFilter.reducer;
export const {changeFilter} = sliceFilter.actions;
