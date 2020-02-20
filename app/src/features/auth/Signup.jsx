import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import { signup } from './reducer'
import { isAuthenticated } from '../../services/auth'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string().required('Required')
})

const Signup = () => {
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
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => dispatch(signup(values))}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" />
              {errors.firstName && touched.firstName && (
                <p>{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" />
              {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" />
              {errors.email && touched.email && <p>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" />
              {errors.password && touched.password && <p>{errors.password}</p>}
            </div>
            <div className="errors">
              {auth?.errors &&
                auth?.errors.map((error, idx) => (
                  <p key={idx}>{error.message}</p>
                ))}
            </div>
            <button type="submit">Signup</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Signup
