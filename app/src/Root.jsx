import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getProfile, logout } from './features/auth/reducer'

function Root() {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUser() {
      await dispatch(getProfile())
    }

    fetchUser()

    /* eslint-disable-next-line */
  }, [])

  const onLogout = async () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <>
      <h2>
        {auth?.user?.firstName} {auth?.user?.lastName}
      </h2>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </>
  )
}

export default Root
