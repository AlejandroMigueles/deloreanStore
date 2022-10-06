import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'

const token = window.localStorage.getItem('token')
const config = {
  headers: { Authorization: `JWT ${token}` }
}

const registerUserService = (data) => axios.post(`${BASE_URL}/signup`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const getSingleUser = (id) => axios.get(`${BASE_URL}/user/${id}`, config)
const getItems = (data) => axios.get(`${BASE_URL}/item`, data)
const getSingleItem = (id) => axios.get(`${BASE_URL}/item/${id}`)

export {
  registerUserService,
  loginUserService,
  getSingleUser,
  getItems,
  getSingleItem
}
