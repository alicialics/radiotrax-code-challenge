import React from "react";
import { Table } from "reactstrap";


export const DeviceTable = () => {
  const data = [
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
