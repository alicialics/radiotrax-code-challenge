import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "./components/Login";
import { DeviceTable } from "./components/DeviceTable";
import { Alert, Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";
import { UserContext } from "./UserContext";
import { deviceOptionsSlice } from "./reducers/devicesSlice";

import { auth } from "./auth";

function App() {
  const [user, setUser] = useState("");
  const isError = useSelector(state => state.deviceOptions.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.logout();
  });

  const login = (user, password) => {
    auth.login(user, password);
    setUser(user);
    dispatch(deviceOptionsSlice.actions.setIsError(false));
  };

  const logout = () => {
    auth.logout();
    setUser("");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      <Navbar dark expand="sm" style={{ backgroundColor: "#3498DB" }}>
        <NavbarBrand href="/">Devices</NavbarBrand>
        <Nav className="ml-auto" navbar>
          {user && (
            <NavItem>
              <NavLink href="#" onClick={logout}>Log Out</NavLink>
            </NavItem>
          )}
        </Nav>
      </Navbar>
      {isError && <Alert color="danger">Authorization Failed</Alert>}
      {user && !isError ? <DeviceTable /> : <Login />}
    </UserContext.Provider>
  );
}

export default App;
