import React, { useContext } from 'react'
import DataContext from './Context/dataContext'

const NewPostR = () => {
  const {handleSubmit,postTitle,setPostTitle,postBody,setPostBody} = useContext(DataContext)
  return (
    <main className='newPost'>
      <h2>New Post</h2>
      <form className='postForm' onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="newPostTitle">Title : </label><br />
        <input type="text" id="newPostTitle" 
        required value={postTitle}
        onChange={(e)=> setPostTitle(e.target.value)}
        /> <br /> <br />
        <label htmlFor="newPostBody">Post : </label><br />
        <textarea id="newPostBody" required value={postBody}
        onChange={(e)=>setPostBody(e.target.value)}></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPostR