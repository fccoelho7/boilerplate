import api from '../../services/api'

// Actions
const FETCH_POSTS = 'auth/FETCH_POSTS'
const DELETE_POST = 'auth/DELETE_POST'

const initialState = {
  list: [],
  fetching: true,
  errors: []
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  const { payload } = action

  switch (action.type) {
    case FETCH_POSTS:
      return { list: payload.posts, fetching: false }

    case DELETE_POST:
      return { list: state.list.filter(post => post.id !== payload.id) }

    default:
      return state
  }
}

// Action Creators
export const fetchPosts = () => async dispatch => {
  const { data } = await api.get('/posts')
  dispatch({ type: FETCH_POSTS, payload: { posts: data } })
}

export const deletePost = id => async dispatch => {
  await api.delete(`/posts/${id}`)
  dispatch({ type: DELETE_POST, payload: { id } })
}
