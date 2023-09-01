import './App.css';
import React,{useEffect} from 'react';
import Header from './Header';
import Container1 from './Container1';
import Footer from './Footer';

import { useState } from "react";
import AddItems from './AddItems';
import Search from './Search';
import API_Method from './API_Method';

function App() {
  const API_URL = "http://localhost:3500/items"
  const[items,setItems] = useState([])
  const[fetchError,setFetchError] = useState(null);
  const[isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    const server = async() =>{
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Data not received')
        const newItems = await response.json();
        setItems(newItems)
        setFetchError(null)
      }
      catch(err){
        setFetchError(err.message)
      }
      finally{
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await server())()
    }, 2000);
  },[])

  const handleClick = async (id)=>{
    const newItems = items.map((item) =>
      item.id===id ? {...item, checked:!item.checked} : item)
      setItems(newItems)
      const patch = newItems.filter((item) =>{
        return item.id===id
      })
      console.log(patch);
      // window.localStorage.setItem("todo_list",JSON.stringify(newItems))

      const URL_ID = `${API_URL}/${id}`
      const patchMethod = {
        method : 'PATCH',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(patch[0])
      }
      const result = await API_Method(URL_ID,patchMethod)
      if(result) setFetchError(result)

  }

  const handleDelete = async (id)=>{
    const newItems = items.filter((item)=>
      item.id!==id)
    setItems(newItems)  
    // window.localStorage.setItem("todo_list",JSON.stringify(newItems))
    const URL_ID = `${API_URL}/${id}`
      const deleteMethod = {
        method : 'DELETE'
      }
      const result = await API_Method(URL_ID,deleteMethod)
      if(result) setFetchError(result)
  }
  
  const[newItem,setNewItem] = useState('');
  
  const addItems = async (value) =>{
    const id = items.length ? items[items.length-1].id+1 : 1;
    let addNewItem = { id,checked:false,value};
    const newItems = [...items,addNewItem];
    setItems(newItems)
    // window.localStorage.setItem("todo_list",JSON.stringify(newItems))
    const postMethod = {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(addNewItem)
    }
    const result = await API_Method(API_URL,postMethod)
    if(result) setFetchError(result)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItems(newItem);
    setNewItem('')
  }
  const[search,setSearch] = useState('')
  return (
    <div className='page'>
        <Header title1="Yasvanth" title2="vijay"/>
        <AddItems 
          newItem = {newItem}
          setNewItem = {setNewItem}
          handleSubmit = {handleSubmit}
        />
        <Search 
          search = {search}
          setSearch = {setSearch}
        />
        <main>
        {isLoading && <p>Loading...</p>}
        {fetchError && <p> {`ERROR:${fetchError}`}</p>}
        {(!fetchError && !isLoading) && 
        <Container1 
          items={items.filter((item)=>((item.value).toLowerCase()).includes(search.toLowerCase()))} 
          handleClick={handleClick}
          handleDelete={handleDelete}
        />}
        </main>
        <Footer length={items.length} />
    </div>
  )
}

export default App;
