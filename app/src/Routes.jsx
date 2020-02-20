import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Root from './Root'
import Login from './features/auth/Login'
import Signup from './features/auth/Signup'

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" exact element={<p>Not found!</p>} />
    </Routes>
  </BrowserRouter>
)
