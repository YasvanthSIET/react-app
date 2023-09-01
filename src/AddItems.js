import React, { useRef } from 'react'
import {FaPlus} from "react-icons/fa";

const AddItems = ({newItem,setNewItem,handleSubmit}) => {

  const ref = useRef();
  return (
    <form className='addItem' onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="addItem"></label>
        <input type="text" id="addItem" autoFocus ref={ref}
        required placeholder='Add more items' value={newItem} onChange={(e)=>setNewItem(e.target.value)}  /> 
        &nbsp;&nbsp;
        <button type="submit" onClick={()=>ref.current.focus()}> <FaPlus /> </button>
    </form>
  )
}

export default AddItems