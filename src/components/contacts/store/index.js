import { configureStore } from "@reduxjs/toolkit";
import submissionsReducer from "./submissionsSlice";

const store = configureStore({
  reducer: {
    submissions: submissionsReducer,
  },
});

export default store;
