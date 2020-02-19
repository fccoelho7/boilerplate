import api from '../../services/api'

// Actions
const GET_PROFILE = 'auth/GET_PROFILE'
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
const LOGIN_FAILED = 'auth/LOGIN_FAILED'
const LOGOUT = 'auth/LOGOUT'

const initialState = {
  user: null,
  errors: []
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { user, token } = action.payload
      localStorage.setItem('token', token)
      return { user, errors: [] }
    case LOGIN_FAILED:
      const errors = action.payload
      return { errors }
    case GET_PROFILE:
      return { user: action.payload }
    case LOGOUT:
      localStorage.removeItem('token')
      return { user: null }
    default:
      return state
  }
}

// Action Creators
export const login = payload => async dispatch => {
  try {
    const { data } = await api.post('/login', payload)
    dispatch({ type: LOGIN_SUCCESS, payload: data })
  } catch (error) {
    const { data } = error.response
    dispatch({ type: LOGIN_FAILED, payload: data })
  }
}

export const logout = () => ({ type: LOGOUT })

export const getProfile = () => async dispatch => {
  const { data } = await api.get('/me')
  return dispatch({ type: GET_PROFILE, payload: data })
}
