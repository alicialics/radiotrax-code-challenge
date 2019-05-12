// Borrowed from https://jasonwatmore.com/post/2018/09/11/react-basic-http-authentication-tutorial-example

const login = (username, password) => {
  sessionStorage.setItem("user", window.btoa(`${username}:${password}`));
};

const logout = () => {
  sessionStorage.removeItem("user");
};

const get = () => {
  return sessionStorage.getItem("user");
};

export const auth = {
  login,
  logout,
  get,
};
