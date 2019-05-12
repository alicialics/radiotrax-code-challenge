import { validateUserName, validatePassword } from "./validate";

describe("test user name validation", () => {
  test("validate valid user name", () => {
    expect(validateUserName("cognosos", true)[0]).toEqual(true);
    expect(validateUserName("cognosos", false)[0]).toEqual(true);
    expect(validateUserName("C0gnosos", true)[0]).toEqual(true);
    expect(validateUserName("C0gnosos", false)[0]).toEqual(true);
  });
  test("validate invalid user name", () => {
    expect(validateUserName("C%gnosos", true)[0]).toEqual(false);
    expect(validateUserName("C&gnosos", false)[0]).toEqual(false);
  });
  test("validate empty user name", () => {
    expect(validateUserName("", false)[0]).toEqual(true);
    expect(validateUserName("", true)[0]).toEqual(false);
  });
});

describe("test password validatation", () => {
    test("validate valid password", () => {
      expect(validatePassword("cognosos", true)[0]).toEqual(true);
      expect(validatePassword("cognosos", false)[0]).toEqual(true);
      expect(validatePassword("C0gnosos", true)[0]).toEqual(true);
      expect(validatePassword("C0gnosos", false)[0]).toEqual(true);
      expect(validatePassword("C%gnosos", true)[0]).toEqual(true);
      expect(validatePassword("C&gnosos", false)[0]).toEqual(true);
    });
    test("validate empty password", () => {
      expect(validatePassword("", false)[0]).toEqual(true);
      expect(validatePassword("", true)[0]).toEqual(false);
    });
  });
