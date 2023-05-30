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
  listRestaurantsForID: async (restaurant) => {
    const response = await api.get(`/restaurants/${restaurant}`)
    return response.data
  }
}
