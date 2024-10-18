import { apiSlice } from "./slices/apiSlice";
import cartSliceReducer from "./slices/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice.js"

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV ? true : null,
});

export default store;
