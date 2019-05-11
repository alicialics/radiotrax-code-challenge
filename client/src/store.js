import { configureStore } from "redux-starter-kit";
import { devicesSlice } from "./devicesSlice";

export const store = configureStore({
  reducer: {
    devices: devicesSlice.reducer
  }
});
