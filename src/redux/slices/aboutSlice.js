import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://castus.pythonanywhere.com";
export const getAbout = createAsyncThunk(
  "about/aboutData",
  async (h, { getState }) => {
    const config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // ["Authorization"]: `JWT ${getState().auth.token}`,
      },
    };
    try {
      const response = await axios.get(`${BASE_URL}/about-us/`, config);
      return response.data;
    } catch (error) {
      console.log("error in redux", error);
    }
  }
);
export const getTeam = createAsyncThunk(
  "about/team",
  async (h, { getState }) => {
    const config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // ["Authorization"]: `JWT ${getState().auth.token}`,
      },
    };
    try {
      const response = await axios.get(`${BASE_URL}/team-members/`, config);
      return response.data;
    } catch (error) {
      console.log("error in redux", error);
    }
  }
);
const initialState = {
  about: [],
  team:[],
  loading: false,
  error: false,
}
export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get about
    builder.addCase(getAbout.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getAbout.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.about = action.payload;
    });
    builder.addCase(getAbout.rejected, (state, action) => {
      state.loading = false;
      state.error = {
        status: true,
        data: action.payload,
      };
    });
    // team members
    builder.addCase(getTeam.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getTeam.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.team = action.payload;
    });
    builder.addCase(getTeam.rejected, (state, action) => {
      state.loading = false;
      state.error = {
        status: true,
        data: action.payload,
      };
    });
  },
});

export default aboutSlice.reducer;
