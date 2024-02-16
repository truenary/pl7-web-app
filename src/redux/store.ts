import { configureStore } from "@reduxjs/toolkit";
import driverReducer from "./slice/driverSlice";
export const store = configureStore({
  reducer: { driverReducer },
});
