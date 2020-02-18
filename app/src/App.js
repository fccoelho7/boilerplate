import React from 'react'
import { Provider } from 'react-redux'

import store from './store/index'
import Root from './Root'

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

export default App
