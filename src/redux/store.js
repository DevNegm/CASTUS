import { configureStore } from "@reduxjs/toolkit";
import aboutSlice from "./slices/aboutSlice";
import contactSlice from "./slices/contactSlice";
export const store = configureStore({
    reducer: {
        about: aboutSlice,
        contact: contactSlice,
    },
})
