// authSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { accountService } from "@/_service/accountService";

const initialState = {
    isError: null,
    isNetworkError: false,
    isSuccess: false,
    isLoading: false,
    token: accountService.getToken(),
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            console.log("Déconnexion en cours...");
            state.isError = null;
            state.isNetworkError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.token = null;
            accountService.logout();
        },
        setToken: (state, action) => {
            state.token = action.payload;
            state.isSuccess = true;
        },
        setError: (state, action) => {
            state.isError = action.payload;
            state.isSuccess = false;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

// Création du loginSelector
export const loginSelector = (state) => state.auth.token;

export const { logout, setToken, setError, setLoading } = authSlice.actions;
export default authSlice.reducer;
