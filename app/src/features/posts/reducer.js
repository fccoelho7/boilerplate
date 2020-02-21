import api from '../../services/api'

// Actions
const FETCHING_POSTS = 'auth/FETCHING_POSTS'
const FETCH_POSTS_SUCCESS = 'auth/FETCH_POSTS_SUCCESS'
const FETCH_POSTS_FAILED = 'auth/FETCH_POSTS_FAILED'

const initialState = {
  list: [],
  fetching: false,
  errors: []
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  const { payload } = action

  switch (action.type) {
    case FETCHING_POSTS:
      return { fetching: true }

    case FETCH_POSTS_SUCCESS:
      return { list: payload.posts, fetching: false }

    case FETCH_POSTS_FAILED:
      return { errors: payload.errors, fetching: false }

    default:
      return state
  }
}

// Action Creators
export const fetchPosts = payload => async dispatch => {
  try {
    dispatch({ type: FETCHING_POSTS })
    const { data } = await api.get('/posts', payload)
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: { posts: data } })
  } catch (error) {
    const { data } = error.response
    dispatch({ type: FETCH_POSTS_FAILED, payload: { errors: data } })
  }
}
