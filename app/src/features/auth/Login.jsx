import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import { login } from './reducer'
import { isAuthenticated } from '../../services/auth'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email required'),
  password: Yup.string().required('Password required')
})

const Login = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated()) navigate('/')
  })

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={LoginSchema}
        onSubmit={values => dispatch(login(values))}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="text" />
              {errors.email && touched.email && <p>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              {errors.password && touched.password && <p>{errors.password}</p>}
            </div>
            <div className="errors">
              {auth.errors &&
                auth.errors.map((error, idx) => (
                  <p key={idx}>{error.message}</p>
                ))}
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Login
