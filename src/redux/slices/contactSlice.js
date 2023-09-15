import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://castus.pythonanywhere.com";
export const postContact = createAsyncThunk(
  "contact/contactData",
  async (data, { getState }) => {
    console.log(data);
    const config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // ["Authorization"]: `JWT ${getState().auth.token}`,
      },
    };
    try {
      const response = await axios.post(`${BASE_URL}/contact-us/`,data, config);
      return response.data;
    } catch (error) {
      console.log("error in redux", error);
    }
  }
);



const initialState = {
  contact: [],
  loading: false,
  error: false,
}
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get about
    builder.addCase(postContact.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(postContact.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.contact = action.payload;
    });
    builder.addCase(postContact.rejected, (state, action) => {
      state.loading = false;
      state.error = {
        status: true,
        data: action.payload,
      };
    });
  
  },
});

export default contactSlice.reducer;
