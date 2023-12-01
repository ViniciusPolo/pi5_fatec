import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Home from "../pages/home";

export const RequireAuth = ({ children }) => {
  const keyAuth = useContext(AuthContext);
  console.log(keyAuth.auth);

  if (!keyAuth.auth) {
    return <Home />;
  }

  return children;
};
