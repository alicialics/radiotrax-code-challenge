import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import { Login } from "./Login";

afterEach(cleanup);

describe("test login", () => {
  test("verify user name validation", () => {
    const { getByTestId } = render(<Login />);
    const usernameNode = getByTestId("username");

    fireEvent.change(usernameNode, { target: { value: "C@gnosos" } });
    expect(getByTestId("username-feedback").textContent).toBe(
      "User name contains invalid characters."
    );
    fireEvent.change(usernameNode, { target: { value: "cognosos" } });
    expect(getByTestId("username-feedback").textContent).toBe("");
  });
  test("verify user name is not empty", () => {
    const { getByTestId } = render(<Login />);
    const submitButtonNode = getByTestId("login");
    expect(getByTestId("username-feedback").textContent).toBe("");
    fireEvent.click(submitButtonNode);
    expect(getByTestId("username-feedback").textContent).toBe(
      "User name must not be empty."
    );
  });
});
