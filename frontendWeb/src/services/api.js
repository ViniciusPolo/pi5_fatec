import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
});

export const UseApi = () => ({
  restaurantsAll: async () => {
    const response = await api.get("/restaurants").catch(function (error) {
      if (error) {
        return error;
      }
    });
    return response;
  },
  MenusAll: async () => {
    const response = await api.get("/menus").catch(function (error) {
      if (error) {
        return error;
      }
    });
    return response;
  },
  MenusLimited: async () => {
    const response = await api.get("/menus-limit").catch(function (error) {
      if (error) {
        return error;
      }
    });
    return response;
  },
  Menu_Type_product: async () => {
    const response = await api.get("/menus-type").catch(function (error) {
      if (error) {
        return error;
      }
    });
    return response;
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
  creatUser: async (user_name, first_name, email, password) => {
    const type_of_user = 1;

    const response = await api
      .post("/cadusers", {
        first_name,
        user_name,
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
        return error.response;
      });
    console.log(response);
    return response;
  },
  login: async (email, password) => {
    const response = await api
      .post("/login", { email, password })
      .catch(function (error) {
        if (error) {
          // console.log(error);
          return error.response.status;
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
  findRestbyLimit: async () => {
    const rest = await api.get("/restDest");
    return rest;
  },
  validToken: async (token) => {
    const response = await api
      .post("/validate", { token })
      .catch(function (error) {
        if (error) {
          return error;
        }
      });

    const auth = response.data.auth;
    return auth;
  },
  orderbyuser: async (user_id) => {
    const Orders = await api
      .get("/orders-request/" + user_id)
      .catch(function (error) {
        if (error) {
          return error;
        }
      });
    return Orders;
  },
  updateAddress: async (data, id) => {
    const Address = await api
      .put("/users-address/" + id, { data })
      .catch(function (error) {
        if (error) {
          return error;
        }
      });
    return Address;
  },

  // orders-open
  findOrderIsOpenById: async (id) => {
    const order = await api.get("/orders-open/" + id);

    return order.data;
  },
  creatOrder: async (data) => {
    //   console.log(data.day_of_week);
    const response = await api.post("/orders", data).catch(function (error) {
      if (error.response) {
        return error.response;
      }
    });
    return response;
  },
  updateOrder: async (id_order, data) => {
    console.log(id_order);
    const response = await api
      .put("/orders/" + id_order, data)
      .catch(function (error) {
        if (error.response) {
          return error.response;
        }
      });
    return response;
  },
  findrequestOrder: async (order_id, food_id) => {
    const response = await api
      .post("/requestmenuorder", { order_id, food_id })
      .catch(function (error) {
        return error.response;
      });
    return response.data;
  },
  createRequest: async (data) => {
    const response = await api.post("/request", data).catch(function (error) {
      return error.response;
    });
    return response.data;
  },
  findRequestByOrderId: async (user_id) => {
    const orders = await api.post("/requestorder", { user_id });

    return orders;
  },
  deleteRequestById: async (id) => {
    const orders = await api.delete("/request/" + id);
    return orders;
  },
  updateRequestById: async (id, data) => {
    const orders = await api.put("/request/" + id, data);
    return orders;
  },
});
