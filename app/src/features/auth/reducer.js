import api from '../../services/api'

// Actions
const GET_PROFILE = 'auth/GET_PROFILE'
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
const LOGIN_FAILED = 'auth/LOGIN_FAILED'
const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS'
const SIGNUP_FAILED = 'auth/SIGNUP_FAILED'
const LOGOUT = 'auth/LOGOUT'

const initialState = {
  user: null,
  errors: []
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  const { payload } = action

  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return { user: payload.user, errors: [] }

    case LOGIN_FAILED:
      return { errors: payload.errors }

    case SIGNUP_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return { user: payload.user, errors: [] }

    case SIGNUP_FAILED:
      return { errors: [payload.errors] }

    case GET_PROFILE:
      return { ...state, user: payload.user }

    case LOGOUT:
      localStorage.removeItem('token')
      return { ...state, user: null }

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
    dispatch({ type: LOGIN_FAILED, payload: { errors: data } })
  }
}

export const signup = payload => async dispatch => {
  try {
    const { data } = await api.post('/signup', payload)
    dispatch({ type: SIGNUP_SUCCESS, payload: data })
  } catch (error) {
    const { data } = error.response
    dispatch({ type: SIGNUP_FAILED, payload: { errors: data } })
  }
}

export const logout = () => ({ type: LOGOUT })

export const getProfile = () => async dispatch => {
  const { data } = await api.get('/me')
  dispatch({ type: GET_PROFILE, payload: data })
}
