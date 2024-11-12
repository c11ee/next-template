import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./app";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export type StoreStateType = ReturnType<typeof store.getState>

export default store;
