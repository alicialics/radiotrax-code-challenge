import React from "react";
import { render, cleanup } from "react-testing-library";
import { SortButton } from "./SortButton";

afterEach(cleanup);

describe("test sort button", () => {
  test("verify the content of sort button", () => {
    const { getByTestId } = render(<SortButton />);
    expect(getByTestId("sort-button").textContent).toContain("\u2195");
  });

  test("verify the content of sort button", () => {
    const { getByTestId } = render(<SortButton isActive />);
    expect(getByTestId("sort-button").textContent).toContain("\u2193");
  });
});
