import { configureStore } from "@reduxjs/toolkit";
import aboutSlice from "./slices/aboutSlice";
export const store = configureStore({
    reducer: {
        about: aboutSlice,
    },
})
