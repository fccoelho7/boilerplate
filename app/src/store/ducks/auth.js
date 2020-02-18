import api from '../../services/api'

// Actions
const GET_PROFILE = 'my-app/auth/GET_PROFILE'
const LOGIN = 'my-app/auth/LOGIN'
const LOGOUT = 'my-app/auth/LOGOUT'

const initialState = {
  user: null
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_PROFILE:
      return { user: action.payload }
    case LOGIN:
      const { user, token } = action.payload
      localStorage.setItem('token', token)
      return { user }
    case LOGOUT:
      localStorage.removeItem('token')
      return { user: null }
    default:
      return state
  }
}

// Action Creators
export const login = payload => async dispatch => {
  const { data } = await api.post('/login', payload)
  return dispatch({ type: LOGIN, payload: data })
}

export const logout = () => ({ type: LOGOUT })

export const getProfile = () => async dispatch => {
  const { data } = await api.get('/me')
  return dispatch({ type: GET_PROFILE, payload: data })
}
