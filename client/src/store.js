import { configureStore } from "redux-starter-kit";
import { devicesSlice } from "./reducers/devicesSlice";

export const store = configureStore({
  reducer: {
    devices: devicesSlice.reducer
  }
});
