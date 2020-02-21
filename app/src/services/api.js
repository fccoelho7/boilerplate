import axios from 'axios'

import { getToken } from './auth'

export default axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
})
