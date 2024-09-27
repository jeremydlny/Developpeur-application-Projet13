import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstName: '',
    lastName: '',
}

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
    },

}

)