import { configureStore } from "@reduxjs/toolkit";
import { summarizeAPI } from "./article";

export const store = configureStore({
  reducer: {
    [summarizeAPI.reducerPath]: summarizeAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(summarizeAPI.middleware),
});
