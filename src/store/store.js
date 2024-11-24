import { configureStore } from "@reduxjs/toolkit";
import makeknownReducer from "./slice/makeKnownSlice.js";

const store = configureStore({
  reducer: {
    makeknown: makeknownReducer,
  },
});

export default store;
