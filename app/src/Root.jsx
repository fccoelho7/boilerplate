import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Login from './containers/auth/Login'
import { getProfile, logout } from './store/ducks/auth'

function Root() {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchUser() {
      if (!auth.user) {
        await dispatch(getProfile())
      }
    }

    fetchUser()
  }, [auth.user])

  return (
    <>
      {auth?.user ? (
        <>
          <h2>
            {auth?.user?.firstName} {auth?.user?.lastName}
          </h2>
          <button type="button" onClick={() => dispatch(logout())}>
            Logout
          </button>
        </>
      ) : (
        <Login />
      )}
    </>
  )
}

export default Root
