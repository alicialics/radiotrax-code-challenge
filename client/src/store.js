import { configureStore } from "redux-starter-kit";
import { devicesSlice } from "./devicesReducer";

export const store = configureStore({
  reducer: {
    devices: devicesSlice.reducer
  }
});
