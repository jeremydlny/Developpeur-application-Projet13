// _Features/Slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    isLoading: false,
    isError: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.isError = action.payload;
        },
        clearUserData: (state) => {
            state.userData = null;
        },
    },
});

export const { setUserData, setLoading, setError, clearUserData } = userSlice.actions;
export default userSlice.reducer;
