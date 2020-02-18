import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import { login, logout } from '../../store/ducks/auth'

const Auth = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => dispatch(login(values))
  })

  return auth.isLogged ? (
    <>
      <h3>Hello {auth.user.firstName} !</h3>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </>
  ) : (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default Auth
