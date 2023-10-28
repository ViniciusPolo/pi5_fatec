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
        if (error) {
          return error;
        }
      });
    return response;
  },
  logOut: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
  findUserById: async (id) => {
    const user = await api.get("/users/" + id);

    return user;
  },
  findEmailById: async (email) => {
    let emailResponse = "";
    const response = await api.post("/emailusers", { email });

    if (response.data.verifyEmail) {
      emailResponse = response.data.verifyEmail.email;
    } else {
      emailResponse = "";
    }
    return emailResponse;
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
  updateUser: async (data, id) => {
    const response = await api
      .put("/users/" + id, data)
      .catch(function (error) {
        return error.response.status;
      });
    console.log(response);
    return response.status;
  },
  validToken: async (token) => {
    const response = await api.post("/validate", { token });

    const auth = response.data.auth;
    return auth;
  },
});

export const restaurantApi = () => ({
  findRestAll: async () => {
    const rest = await api.get("/restaurants");
    return rest;
  },
  findRestbyLimit: async () => {
    const rest = await api.get("/restDest");
    return rest;
  },
});
