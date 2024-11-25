import { configureStore } from "@reduxjs/toolkit";
import makeknownReducer from "./slice/makeKnownSlice.js";
import authReducer from "./slice/authSlice.js";

const store = configureStore({
  reducer: {
    makeknown: makeknownReducer,
    auth: authReducer,
  },
});

export default store;
