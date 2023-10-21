import axios from "axios";

const api = axios.create({
  // baseURL: "https://um-trem-de-cume-api.onrender.com",
  baseURL: "http://localhost:3001",
});

export const UseApi = () => ({
  login: async (email, password) => {
    const response = await api
      .post("/login", { email, password })
      .catch(function (error) {
        if (error.response) {
          return error.response.status;
        }
      });
    return response;
  },
  logOut: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
  creatUser: async (first_name, email, password) => {
    const type_of_user = 1;
    const last_name = "";

    const response = await api
      .post("/cadusers", {
        first_name,
        last_name,
        email,
        password,
        type_of_user,
      })
      .catch(function (error) {
        if (error.response) {
          return error.response.status;
        }
      });
    return response.status;
  },
  validToken: async (token) => {
    const response = await api.post("/validate", { token });

    const auth = response.data.auth;
    return auth;
  },
});
