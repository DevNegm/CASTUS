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
export const getCookiePolicy = createAsyncThunk(
  "about/cookiepolicy",
  async (h, { getState }) => {
    const config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // ["Authorization"]: `JWT ${getState().auth.token}`,
      },
    };
    try {
      const response = await axios.get(`${BASE_URL}/cookie-policy/`, config);
      return response.data;
    } catch (error) {
      console.log("error in redux", error);
    }
  }
);
export const getPrivacyPolicy = createAsyncThunk(
  "about/privacypolicy",
  async (h, { getState }) => {
    const config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // ["Authorization"]: `JWT ${getState().auth.token}`,
      },
    };
    try {
      const response = await axios.get(`${BASE_URL}/privacy-policy/`, config);
      return response.data;
    } catch (error) {
      console.log("error in redux", error);
    }
  }
);
export const getFaqs = createAsyncThunk(
  "about/faqs",
  async (h, { getState }) => {
    const config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // ["Authorization"]: `JWT ${getState().auth.token}`,
      },
    };
    try {
      const response = await axios.get(`${BASE_URL}/frequently-asked-question/`, config);
      return response.data;
    } catch (error) {
      console.log("error in redux", error);
    }
  }
);
export const getTermsOfService = createAsyncThunk(
  "about/termsofservice",
  async (h, { getState }) => {
    const config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // ["Authorization"]: `JWT ${getState().auth.token}`,
      },
    };
    try {
      const response = await axios.get(`${BASE_URL}/terms-of-service/`, config);
      return response.data;
    } catch (error) {
      console.log("error in redux", error);
    }
  }
);
export const getMainInfo = createAsyncThunk(
  "about/maininfo",
  async (h, { getState }) => {
    const config = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // ["Authorization"]: `JWT ${getState().auth.token}`,
      },
    };
    try {
      const response = await axios.get(`${BASE_URL}/main-info/`, config);
      return response.data;
    } catch (error) {
      console.log("error in redux", error);
    }
  }
);



const initialState = {
  about: [],
  team:[],
  cookiePolicy:[],
  privacyPolicy:[],
  mainInfo:[],
  faqs:[],
  terms:[],
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
    // Cookie Policy
    builder.addCase(getCookiePolicy.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getCookiePolicy.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.cookiePolicy = action.payload;
    });
    builder.addCase(getCookiePolicy.rejected, (state, action) => {
      state.loading = false;
      state.error = {
        status: true,
        data: action.payload,
      };
    });
    // Privacy Policy
    builder.addCase(getPrivacyPolicy.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getPrivacyPolicy.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.privacyPolicy = action.payload;
    });
    builder.addCase(getPrivacyPolicy.rejected, (state, action) => {
      state.loading = false;
      state.error = {
        status: true,
        data: action.payload,
      };
    });
    // FAQS
    builder.addCase(getFaqs.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getFaqs.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.faqs = action.payload;
    });
    builder.addCase(getFaqs.rejected, (state, action) => {
      state.loading = false;
      state.error = {
        status: true,
        data: action.payload,
      };
    });
    // Terms Of Service
    builder.addCase(getTermsOfService.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getTermsOfService.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.terms = action.payload;
    });
    builder.addCase(getTermsOfService.rejected, (state, action) => {
      state.loading = false;
      state.error = {
        status: true,
        data: action.payload,
      };
    });
    // Main Info
    builder.addCase(getMainInfo.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getMainInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.mainInfo = action.payload;
    });
    builder.addCase(getMainInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = {
        status: true,
        data: action.payload,
      };
    });
  },
});

export default aboutSlice.reducer;
