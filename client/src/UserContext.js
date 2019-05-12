import { createContext } from "react";

// Uses react context to trigger re-renders when user event happens (such as sign-in).
// https://reactjs.org/docs/hooks-reference.html#usecontext
export const UserContext =  createContext({})