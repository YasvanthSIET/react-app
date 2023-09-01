import React from 'react'

const HeaderPro2 = ({handleClick}) => {
  const users = 'https://jsonplaceholder.typicode.com/users';
  const posts = 'https://jsonplaceholder.typicode.com/posts';
  const comments = 'https://jsonplaceholder.typicode.com/comments';
  return (
    <ul id='header'>
      <li onClick={()=>handleClick(users)}>Users</li>
      <li onClick={()=>handleClick(posts)}>Posts</li>
      <li onClick={()=>handleClick(comments)}>Comments</li>
    </ul>
  )
}

export default HeaderPro2