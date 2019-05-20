// Uses redux-starter-kit to setup redux, created by the maintainer of redux and react-redux.
// https://redux-starter-kit.js.org/api/createslice
// It has built in redux-thunk for making async calls in redux, and
// immer which allows state modification without returning a new one.
import { createSlice } from "redux-starter-kit";
import { loadDevices } from "../api";

export const deviceOptionsSlice = createSlice({
  slice: "deviceOptions",
  initialState: {
    page: 0,
    orderBy: "",
    filterBy: "",
    isLoading: false,
    isError: false,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setOrderBy: (state, action) => {
      state.orderBy = state.orderBy === action.payload ? "" : action.payload;
    },
    setFilterBy: (state, action) => {
      state.filterBy = action.payload;
      state.page = 0;
    },
    setIsLoading: (state, action) => {
      state.isLoading = !!action.payload;
      state.page = 0;
      if (action.payload) {
        state.isError = false;
      }
    },
    setIsError: (state, action) => {
      state.isError = !!action.payload;
    },
  }
});

export const devicesSlice = createSlice({
  slice: "devices",
  initialState: [],
  reducers: {
    setDevices: (_, action) => action.payload
  },
  extraReducers: {
    [deviceOptionsSlice.actions.setIsLoading]: (state, action) => {
      if (action.payload) return [];
    }
  }
});

// Uses redux thunk to dispatch an async request via fetch API.
// The result is stored in redux state.
export const fetchDevices = () => {
  return dispatch => {
    dispatch(deviceOptionsSlice.actions.setIsLoading(true));
    return loadDevices()
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(items => {
        dispatch(devicesSlice.actions.setDevices(items));
        dispatch(deviceOptionsSlice.actions.setIsLoading(false));
      }).catch(e => dispatch(deviceOptionsSlice.actions.setIsError(true)));
  };
};
