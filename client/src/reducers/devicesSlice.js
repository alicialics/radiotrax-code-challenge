// Uses redux-starter-kit to setup redux, created by the maintainer of redux and react-redux.
// https://redux-starter-kit.js.org/api/createslice
// It has built in redux-thunk for making async calls in redux, and
// immer which allows state modification without returning a new one.
import { createSlice } from "redux-starter-kit";

// Uses redux thunk to dispatch an async request via fetch API.  
// The result is stored in redux state.
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

const setDevices = (state, action) => {
  return action.payload;
};

export const devicesSlice = createSlice({
  slice: "devices",
  initialState: [],
  reducers: {
    setDevices
  }
});
