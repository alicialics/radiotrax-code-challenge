import { auth } from "./auth";
export const loadDevices = () => {
  return fetch("/api/devices", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth.get()}`
    }
  });
};
