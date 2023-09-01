import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const PostLayoutR = () => {
  return (
    <>
        <li><Link to='/postpage/1'>Post 1</Link></li>
        <li><Link to='/postpage/2'>Post 2</Link></li>
        <li><Link to='/postpage/3'>Post 3</Link></li>
        <li><Link to='/postpage/newpost'>New Post</Link></li>
        <br />
        <Outlet />
    </>
  )
}

export default PostLayoutR