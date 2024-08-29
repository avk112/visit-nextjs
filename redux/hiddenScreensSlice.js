import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: false,
  form: false,
  contactsAcceptance: false,
  mailAcceptance: false,
};

export const hiddenScreensSlice = createSlice({
  name: "hiddenScreens",
  initialState,
  reducers: {
    switchVisible: (state, key) => {
      state[key.payload] = !state[key.payload];
    },
  },
});

export const { switchVisible } = hiddenScreensSlice.actions;

export default hiddenScreensSlice.reducer;
