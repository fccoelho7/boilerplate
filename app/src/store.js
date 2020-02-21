import { createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import auth from './features/auth/reducer'
import posts from './features/posts/reducer'

export default createStore(
  combineReducers({ auth, posts }),
  composeWithDevTools(applyMiddleware(thunk))
)
