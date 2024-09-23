// store.js
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "@/_Features/Slices/authSlice";
import { userSlice } from "@/_Features/Slices/userSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
    },
});