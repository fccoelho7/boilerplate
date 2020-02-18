import axios from 'axios'

const token = localStorage.getItem('token')

const http = axios.create({
  baseURL: 'http://localhost:3333/api/v1',
  Authorization: `Bearer ${token}`
})

export default http
