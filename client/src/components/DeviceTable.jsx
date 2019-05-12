import React, { useEffect, useMemo } from "react";
import {
  Alert,
  Form,
  Input,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import { SortButton } from "./SortButton";
import { fetchDevices, deviceOptionsSlice } from "../reducers/devicesSlice";
import { useDispatch, useSelector } from "react-redux";

const NUM_PER_PAGE = 10;

export const DeviceTable = () => {
  // Use new redux hooks features, https://react-redux.js.org/next/api/hooks.

  // useDispatch gets the dispatch function used to dispatch redux actions.
  const dispatch = useDispatch();

  // useEffect loads devices if necessary.
  useEffect(() => {
    dispatch(fetchDevices());
  }, [dispatch]);

  // useSelector gets the devices from redux state.
  const data = useSelector(state => state.devices);
  const options = useSelector(state => state.deviceOptions);
  const { isLoading, page, orderBy, filterBy } = options;

  const filteredData = useMemo(() => {
    console.log(orderBy);
    const filteredData = data.filter(
      item =>
        !filterBy ||
        item.firmware_version.includes(filterBy) ||
        String(item.device_id).includes(filterBy)
    );

    filteredData.sort((item1, item2) => {
      const result = orderBy
        ? item1[orderBy] < item2[orderBy]
        : item1.id < item2.id;
      return result ? -1 : 1;
    });

    return filteredData.slice(page * NUM_PER_PAGE, (page + 1) * NUM_PER_PAGE);
  }, [data, filterBy, orderBy, page]);

  const lastPage = Math.floor((data.length - 1) / NUM_PER_PAGE);
  const isFirstPage = page === 0;
  const isLastPage = page === lastPage;

  const gotoPage = newPage => {
    if (newPage >= 0 && newPage <= lastPage) {
      dispatch(deviceOptionsSlice.actions.setPage(newPage));
    }
  };

  const setFilterBy = value => {
    dispatch(deviceOptionsSlice.actions.setFilterBy(value));
  };

  const setOrderBy = value => {
    dispatch(deviceOptionsSlice.actions.setOrderBy(value));
  };

  if (isLoading) {
    return null;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <Form inline style={{ paddingBottom: "1rem" }}>
        <Input
          name="search"
          id="Search"
          placeholder="Filter device or firmware"
          className="w-50 mr-2"
          value={filterBy}
          onChange={event => setFilterBy(event.currentTarget.value)}
        />
      </Form>
      {filteredData.length === 0 ? (
        <Alert>No Device/Firmware Found.</Alert>
      ) : (
        <div>
          <Table striped borderless responsive size="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Device ID</th>
                <th>Firmware Version</th>
                <th>
                  Date Device Available
                  <SortButton
                    isActive={orderBy === "date_device_available"}
                    onClick={() => setOrderBy("date_device_available")}
                  />
                </th>
                <th>Manufacturer</th>
                <th>Application Code</th>
                <th>Asset Identifier</th>
                <th>
                  Battery Level
                  <SortButton
                    isActive={orderBy === "battery_level"}
                    onClick={() => setOrderBy("battery_level")}
                  />
                </th>
                <th>
                  Internal Temperature
                  <SortButton
                    isActive={orderBy === "internal_temperature"}
                    onClick={() => setOrderBy("internal_temperature")}
                  />
                </th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(item => (
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
          <Pagination>
            <PaginationItem disabled={isFirstPage}>
              <PaginationLink first onClick={() => gotoPage(0)} />
            </PaginationItem>
            <PaginationItem disabled={isFirstPage}>
              <PaginationLink previous onClick={() => gotoPage(page - 1)} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>{page + 1}</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={isLastPage}>
              <PaginationLink next onClick={() => gotoPage(page + 1)} />
            </PaginationItem>
            <PaginationItem disabled={isLastPage}>
              <PaginationLink last onClick={() => gotoPage(lastPage)} />
            </PaginationItem>
          </Pagination>
        </div>
      )}
    </div>
  );
};
