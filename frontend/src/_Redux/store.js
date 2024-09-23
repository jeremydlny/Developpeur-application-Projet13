// store.js
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "@/_Redux/Slices/authSlice";
import { userSlice } from "@/_Redux/Slices/userSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
    },
});