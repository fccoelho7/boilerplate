import React from 'react'
import { Provider } from 'react-redux'

import store from './store/index'
import Auth from './containers/auth/Auth'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Auth />
      </div>
    </Provider>
  )
}

export default App
