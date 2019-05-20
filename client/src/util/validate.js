export const validateUserName = (userName, didSubmit) => {
  if (didSubmit && !userName) {
    return [false, "User name must not be empty."];
  }
  if (!userName.match(/^[0-9a-zA-Z]*$/)) {
    return [false, "User name contains invalid characters."];
  }
  return [true];
};

export const validatePassword = (password, didSubmit) => {
  if (didSubmit && !password) {
    return [false, "Password must not be empty."];
  }
  return [true];
};
