// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import stockCryptoReducer from "./stockCryptoSlice";

export const store = configureStore({
  reducer: {
    stockCrypto: stockCryptoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
