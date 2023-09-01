import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import DataContext from './Context/dataContext';

const EditPageR = () => {
  const {posts,setUserId,editTitle,editBody,setEditTitle,setEditBody,handleEdit} = useContext(DataContext)
    const {id} = useParams();
    const post = posts.find((post)=>
    post.id===Number(id) )
    setUserId(id)

    useEffect(()=>{
        setEditTitle(post.title)
        setEditBody(post.body)
    },[post,setEditTitle,setEditBody])

  return (
    <main className='editPost'>
      <h2>Edit Post</h2>
      <form className='editForm' onSubmit={(e)=>handleEdit(e)}>
        <label htmlFor="newEditTitle">Title : </label><br />
        <input type="text" id="newEditTitle" required value={editTitle}
        onChange={(e)=> setEditTitle(e.target.value)}
        /> <br /> <br />
        <label htmlFor="newEditBody">Post : </label><br />
        <textarea id="newEditBody" required value={editBody}
        onChange={(e)=>setEditBody(e.target.value)}></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default EditPageR