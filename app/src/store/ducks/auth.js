import http from '../../utils/http'

// Actions
const LOGIN = 'my-app/auth/LOGIN'
const LOGOUT = 'my-app/auth/LOGOUT'

const initialState = {
  isLogged: false,
  token: null
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      const { user, token: auth } = action.payload
      const { token } = auth

      localStorage.setItem('token', token)

      return { isLogged: true, user }
    case LOGOUT:
      localStorage.removeItem('token')

      return { isLogged: false, user: null }
    default:
      return state
  }
}

// Action Creators
export const login = payload => async dispatch => {
  try {
    const { data } = await http.post('/login', payload)
    return dispatch({ type: LOGIN, payload: data })
  } catch (error) {
    return dispatch({ type: LOGIN, error })
  }
}

export const logout = { type: LOGOUT }
