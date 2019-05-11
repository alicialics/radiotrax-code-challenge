import { createSlice } from "redux-starter-kit";

const loadDevices = () => {
  return [
    {
      id: 1,
      device_id: 2000002001,
      firmware_version: "v0.0.0.52",
      date_device_available: "2017-05-03T14:27:30Z",
      manufacturer: "cognosos",
      application_code: "AAA",
      asset_identifier: "test-2000002001",
      battery_level: 0.0,
      internal_temperature: 35.0,
      status: 10
    },
    {
      id: 2,
      device_id: 2000002002,
      firmware_version: "v0.0.0.52",
      date_device_available: "2017-05-13T14:27:30Z",
      manufacturer: "cognosos",
      application_code: "AAA",
      asset_identifier: "test-2000002002",
      battery_level: 80.0,
      internal_temperature: 45.0,
      status: 10
    }
  ];
};

export const devicesSlice = createSlice({
  slice: "devices",
  initialState: [],
  reducers: {
    loadDevices
  }
});


