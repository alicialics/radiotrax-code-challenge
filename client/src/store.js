import { configureStore } from "redux-starter-kit";
import { devicesSlice, deviceOptionsSlice } from "./reducers/devicesSlice";

export const store = configureStore({
  reducer: {
    devices: devicesSlice.reducer,
    deviceOptions: deviceOptionsSlice.reducer
  }
});
