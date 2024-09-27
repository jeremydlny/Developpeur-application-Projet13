import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "@/_Redux/Slices/userSlice";

export const store = configureStore({
    reducer: {
        User: userSlice.reducer,
    }
})