import React, { useEffect } from "react";
import { Table } from "reactstrap";
import { loadDevices } from "../reducers/devicesSlice";
import { useDispatch, useSelector } from "react-redux";

export const DeviceTable = () => {
  // Use new redux hooks features, https://react-redux.js.org/next/api/hooks.

  // useDispatch gets the dispatch function used to dispatch redux actions.
  const dispatch = useDispatch();

  // useEffect loads devices if necessary.
  useEffect(() => {
    dispatch(loadDevices());
  }, [dispatch]);

  // useSelector gets the devices from redux state.
  const data = useSelector(state => state.devices);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Device ID</th>
          <th>Firmware Version</th>
          <th>Date Device Available</th>
          <th>Manufacturer</th>
          <th>Application Code</th>
          <th>Asset Identifier</th>
          <th>Battery Level</th>
          <th>Internal Temperature</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.device_id}</td>
            <td>{item.firmware_version}</td>
            <td>{item.date_device_available}</td>
            <td>{item.manufacturer}</td>
            <td>{item.application_code}</td>
            <td>{item.asset_identifier}</td>
            <td>{item.battery_level}</td>
            <td>{item.internal_temperature}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
