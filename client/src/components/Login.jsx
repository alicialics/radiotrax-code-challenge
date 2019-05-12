import React, { useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { UserContext } from "../UserContext";
export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext);
  return (
    <Form>
      <FormGroup>
        <Label for="user">User</Label>
        <Input
          type="user"
          name="user"
          id="user"
          value={user}
          onChange={event => setUser(event.currentTarget.value)}
          placeholder="[A-Za-z0-9]+"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={event => setPassword(event.currentTarget.value)}
          placeholder=""
        />
      </FormGroup>
      <Button color="primary" onClick={() => context.login(user, password)}>
        Small Button
      </Button>
    </Form>
  );
};
