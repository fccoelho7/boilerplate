import React from 'react'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'

import Root from './Root'
import Login from './containers/auth/Login'

export default () => {
  const isAuthenticated = !!localStorage.getItem('token')

  return (
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
}
