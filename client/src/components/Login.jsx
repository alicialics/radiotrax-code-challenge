import React, { useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";
import { UserContext } from "../UserContext";
import styles from "./Login.module.css";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext);
  return (
    <Container>
      <Row className={styles.row}>
        <Col xs="9" md="7" lg="5">
          <Card body className={styles.loginCard}>
            <CardTitle>Log In To Cognosos</CardTitle>
            <Form className={styles.form}>
              <FormGroup>
                <Input
                  name="user"
                  id="user"
                  value={user}
                  onChange={event => setUser(event.currentTarget.value)}
                  placeholder="Username"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={event => setPassword(event.currentTarget.value)}
                  placeholder="Password"
                />
              </FormGroup>
              <Button
                color="primary"
                onClick={() => context.login(user, password)}
              >
                LOG IN
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
