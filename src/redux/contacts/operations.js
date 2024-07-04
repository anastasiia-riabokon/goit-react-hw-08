import {createAsyncThunk} from "@reduxjs/toolkit";
import {goitApi} from "../../config/goitApi";
import toast from "react-hot-toast";

export const fetchContacts = createAsyncThunk("contacts/FetchAll", async (_, thunkAPI) => {
  try {
    const {data} = await goitApi.get("/contacts");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
  try {
    const {data} = await goitApi.post("/contacts", contact);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
  try {
    const {data} = await goitApi.delete(`/contacts/${id}`);
    toast.success("Contact was successfully deleted!");
    return data.id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({id, ...contact}, thunkAPI) => {
    try {
      const {data} = await goitApi.patch(`/contacts/${id}`, contact);
      toast.success("Contact was successfully edited!");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
