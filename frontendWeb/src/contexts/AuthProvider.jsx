import { useEffect, useState } from "react";
import { UseApi } from "../services/api";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [auth, setAuth] = useState(false);
  const api = UseApi();

  useEffect(() => {
    validatetoken();
  });

  const validatetoken = async () => {
    const storageData = localStorage.getItem("x-access-token");

    if (storageData) {
      const authorization = await api.validToken(storageData);
      setAuth(authorization);
    }
  };

  const signin = async (email, password) => {
    const data = await api.login(email, password);
    if (!data) {
      return false;
    }
    if (data.data.user_id && data.data.token) {
      setUser(data);
      localStorage.setItem("x-access-token", data.data.token);
      localStorage.setItem("UserId", data.data.user_id);
      localStorage.setItem("AuthUser", data.data.auth);
      localStorage.setItem("email", email);
      // localStorage.setItem("UserLog", data.user_id);
      console.log(data);
      return true;
    }
    return false;
  };

  const signout = async () => {
    const data = await api.logOut();
    setUser(null);
    localStorage.setItem("x-access-token", data.token);
    localStorage.setItem("UserLog", "");
    localStorage.setItem("email", "");
    localStorage.setItem("UserId", "");
    localStorage.setItem("AuthUser", data.auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        auth,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
