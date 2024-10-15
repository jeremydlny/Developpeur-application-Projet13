import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: '',
  lastName: '',
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

// Export des actions pour qu'elles puissent être utilisées dans d'autres fichiers
export const { setUserProfile } = userSlice.actions;

// Export du reducer par défaut
export default userSlice.reducer;