import { createSlice } from "redux-starter-kit";

const setDevices = (state, action) => {
  return action.payload;
};

export const loadDevices = () => {
  return dispatch => {
    return fetch("/api/devices", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic Y29nbm9zb3M6Y29nbm9zb3M="
      }
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(devicesSlice.actions.setDevices(items)));
  };
};

export const devicesSlice = createSlice({
  slice: "devices",
  initialState: [],
  reducers: {
    setDevices
  }
});
