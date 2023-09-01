import React from 'react'
import { Link } from 'react-router-dom'

const PostR = ({post}) => {
  return (
  
    <article className='post'>
      <Link id='postLink' to={`post/${post.id}`}>
      <h2  className='postTitle'>{post.title}</h2>
      <p className='postDate'>{post.dateTime}</p>
      </Link>
      <p className='postBody'>{
        (post.body).length <= 25 ? post.body :
        `${(post.body).slice(0,25)}...`
      }</p>
      
    </article>
    
  )
}

export default PostR