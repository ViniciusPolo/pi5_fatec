import axios from 'axios';

const API_BASE = 'https://um-trem-de-cume-api.onrender.com';


const api = axios.create({
  baseURL: API_BASE
})


export default {
  listUsers: async (newUser) => {
    const response = await api.get(`/users/${newUser}`)
    return response.data
  },
  loginUsers: async (dataUsers) => {
    const response = await api.post("/login", dataUsers)
    return response
  },
  createUsers: async (dataUsers) => {
    const response = await api.post("/users", dataUsers)
    return response
  },
  listRestaurants: async () => {
    const response = await api.get("/restaurants")
    return response.data
  },
  listRestaurantsForOwner: async (owner) => {
    const response = await api.get(`/restaurants/owner/${owner}`)
    return response.data
  },
  createRestaurant: async (dataRestaurant) => {
    const response = await api.post("/restaurants", dataRestaurant)
    return response.data
  },
  addMenu: async (dataMenu) => {
    const response = await api.post("/menus", dataMenu)
    return response.data
  },
  listRestaurantsForID: async (restaurant) => {
    const response = await api.get(`/restaurants/${restaurant}`)
    return response.data
  },
  listMenuForRestaurantsForID: async (restaurant) => {
    const response = await api.get(`/restaurant-menu/${restaurant}`)
    return response.data
  },
  addProductToBasket: async (itemAdded) => {
    const response = await api.post("/requests", itemAdded)
    return response.data
  },
  listBasket: async (user_id, is_open) => {
    const response = await api.get(`/requests/${user_id}/${is_open}`)
    return response.data
  },
  foodById: async (food_id) => {
    const response = await api.get(`/menus/${food_id}`)
    return response.data
  },
  deleteItem: async (id_request) => {
    const response = await api.delete(`/requests/delete-item/${id_request}`)
    return response.data
  },
  deleteBasket: async (user_id) => {
    const response = await api.delete(`/requests/delete-basket/${user_id}`)
    return response.data
  },
}
