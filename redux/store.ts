import { configureStore } from "@reduxjs/toolkit";
import hiddenScreensReducer from "./hiddenScreensSlice";

export const store = configureStore({
  reducer: {
    hiddenScreens: hiddenScreensReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
