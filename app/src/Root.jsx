import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getProfile, logout } from './features/auth/reducer'
import { fetchPosts } from './features/posts/reducer'

function Root() {
  const auth = useSelector(state => state.auth)
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchInitialData() {
      try {
        if (!auth?.user) await dispatch(getProfile())
        await dispatch(fetchPosts())
      } catch {
        navigate('/login')
      }
    }

    fetchInitialData()
  }, [])

  const onLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <>
      <h2>
        {auth?.user?.firstName} {auth?.user?.lastName}
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </h2>
      <hr />
      <div className="posts">
        <h2>Posts</h2>
        {posts?.fetching
          ? 'Fetching posts...'
          : posts?.list.map(post => (
              <div className="post" key={post.id}>
                <h3>{post?.title}</h3>
                <i>{post?.created_at}</i>
                <p>{post?.content}</p>
              </div>
            ))}
      </div>
    </>
  )
}

export default Root
