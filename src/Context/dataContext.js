import { format } from 'date-fns'
import api from '../api/post.js'
import useWindowSize from '../useWindowSize'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { createContext } from "react";
const DataContext = createContext({})

const DataProvider = ({children}) => {
   
  const[isLoading,setIsLoading] = useState(true)
  const[posts,setPosts] = useState([])
  const[search,setSearch] = useState('')
  const[searchResult,setSearchResult] = useState([])
  const[postTitle,setPostTitle] = useState('')
  const[postBody,setPostBody] = useState('')
  const[editTitle,setEditTitle] = useState('')
  const[editBody,setEditBody] = useState('')
  const[userId,setUserId] = useState('')
  const navigate = useNavigate();
  const {width} = useWindowSize()

  useEffect(()=>{
    const fetchPosts = async ()=>{
      try{
        const response = await api.get('/posts');
        setPosts(response.data)
      }
      catch(error){
        if(error.response){
          console.log(error.response.data);
        }
        else{
          console.log(error.message);
        }
      }
      finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      fetchPosts();
    }, 2000);
  },[])


  useEffect(()=>{
    const filteredPosts = posts.filter((post)=> ((post.title).toLowerCase()).includes(search.toLowerCase()) 
    || ((post.body).toLowerCase()).includes(search.toLowerCase()));
    setSearchResult(filteredPosts.reverse())
  },[search,posts])

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const id = posts.length ? posts[(posts.length)-1].id+1 : 1;
    const dateTime = format(new Date(),'MMM dd, yyyy pp')
    const newPost = {id,title:postTitle,dateTime,body:postBody}
    try{
      const response = await api.post('/posts',newPost)
      const allPosts = [...posts,response.data]
      setPosts(allPosts)
      setPostTitle('')
      setPostBody('')
      navigate('/')
    }
    catch(error){
      if(error.response){
        console.log(error.response.data);
      }
      else{
        console.log(error.message);
      }
    }
  }
  const handleEdit = async (e) =>{
    e.preventDefault();
    const id = Number(userId);
    const dateTime = format(new Date(),'MMM dd, yyyy pp')
    const editPost = {id,title:editTitle,dateTime,body:editBody}
    try{
      const response = await   api.put(`/posts/${id}`,editPost)
      const allPosts = posts.map((post)=>
        post.id===id ? response.data : post)
      setPosts(allPosts)
      navigate('/')
    }
    catch(error){
      if(error.response){
        console.log(error.response.data);
      }
      else{
        console.log(error.message);
      }
    }

  }

  const handleDelete = async (id) =>{
    try{
      await api.delete(`/posts/${id}`)
      const deletePost = posts.filter((post)=> post.id!==id)
      setPosts(deletePost)
      navigate('/')
    }
    catch(error){
      if(error.response){
        console.log(error.response.data);
      }
      else{
        console.log(error.message);
      }
    }
  }

    return (
        <DataContext.Provider value={{
            width,search,setSearch,searchResult,isLoading,setIsLoading,
            handleSubmit,postTitle,setPostTitle,postBody,setPostBody,
            posts,setUserId,editTitle,editBody,setEditTitle,setEditBody,handleEdit,
            handleDelete
        }}>
            {children}
        </DataContext.Provider>
    )
        
}
export {DataProvider}
export default DataContext
