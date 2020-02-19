import React from 'react'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'

import Root from './Root'
import Login from './features/auth/Login'
import { isAuthenticated } from './services/auth'

export default () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Root /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" exact element={<p>Not found!</p>} />
    </Routes>
  </BrowserRouter>
)
