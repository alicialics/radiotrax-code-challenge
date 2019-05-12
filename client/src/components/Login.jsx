import React, { useState, useContext } from "react";
import {
  Label,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Button,
  FormFeedback
} from "reactstrap";
import { UserContext } from "../UserContext";
import styles from "./Login.module.css";
import { validateUserName, validatePassword } from "../util/validate";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);
  const context = useContext(UserContext);
  const [isUserNameValid, userNameFeedback] = validateUserName(user, didSubmit);
  const [isPasswordValid, passwordFeedback] = validatePassword(password, didSubmit);
  const logIn = (user, password) => {
    setDidSubmit(true);
    if (isUserNameValid && isPasswordValid && user && password) {
      context.login(user, password);
    }
  };

  return (
    <Container>
      <Row className={styles.row}>
        <Col xs="9" md="7" lg="5">
          <Card body className={styles.loginCard}>
            <CardTitle>Cognosos Log In</CardTitle>
            <Form className={styles.form}>
              <FormGroup>
                <Label>User Name</Label>
                <Input
                  invalid={!isUserNameValid}
                  name="username"
                  id="username"
                  data-testid="username"
                  value={user}
                  onChange={event => setUser(event.currentTarget.value)}
                  placeholder="Username"
                />
                <FormFeedback data-testid="username-feedback">{userNameFeedback}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  invalid={!isPasswordValid}
                  type="password"
                  name="password"
                  id="password"
                  data-testid="password"
                  value={password}
                  onChange={event => setPassword(event.currentTarget.value)}
                  placeholder="Password"
                />
                <FormFeedback>{passwordFeedback}</FormFeedback>
              </FormGroup>
              <Button data-testid="login" color="primary" onClick={() => logIn(user, password)}>
                LOG IN
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
