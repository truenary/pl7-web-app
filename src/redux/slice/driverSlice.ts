import { AllDriver } from "@/types/data";
import { createSlice } from "@reduxjs/toolkit";
const initialState: AllDriver = [];
export const driverSlice = createSlice({
  name: "drivers",
  initialState,
  reducers: {
    addDriver: (state, action) => {
      state.push(action.payload);
    },
    verifyDriver: (state, action) => {
      const driver = state.find(action.payload);
      if (driver) {
        driver.accountVerifyStatus = true;
      }
    },
  },
});
export const { addDriver, verifyDriver } = driverSlice.actions;
export default driverSlice.reducer;
