import { createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import auth from './ducks/auth'

export default createStore(
  combineReducers({ auth }),
  composeWithDevTools(applyMiddleware(thunk))
)
