import {createSlice} from "@reduxjs/toolkit";
import {addContact, deleteContact, editContact, fetchContacts} from "./operations";
import {logoutThunk} from "../auth/operations";
import toast from "react-hot-toast";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentContact: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setCurrentContact: (state, action) => {
      state.currentContact = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        const existingContact = state.items.find((item) => item.number === action.payload.number);
        if (!existingContact) {
          state.items.push(action.payload);
          toast.success("Contact was successfully added!");
        } else {
          toast.error("This contact already exists!");
        }
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })

      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactReducer = slice.reducer;
export const {setCurrentContact} = slice.actions;
