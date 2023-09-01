import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './Context/dataContext';

const PostPageR = () => {
  const {posts,handleDelete} = useContext(DataContext)
  const {id} = useParams();
  const post = posts.find((post)=>
    post.id===Number(id) )
  return (
    <main>
      {post ? 
      <article className='postPage'>
        <h2>{post.title}</h2>
        <p className='postDate'>{post.dateTime}</p>
        <p className='postBody'>{post.body}</p>
        <Link id='edit' to={`/edit/${id}`}><button>Edit</button></Link>
        <button id='delete' onClick={()=>handleDelete(post.id)}>Delete</button>
        <Link id='back' to='/'><button>Back</button></Link>
      </article> :
      <>
       <p>Page not found</p>
        <Link to='/'>Visit Homepage</Link>
      </>
      }
    </main>
    
  )
}

export default PostPageR