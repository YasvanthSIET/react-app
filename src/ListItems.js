import React from 'react'
import {FaTrashAlt} from "react-icons/fa";

const ListItems = ({item,handleClick,handleDelete}) => {
  return (
    <li className="item">
      <input onChange={()=>handleClick(item.id)} type="checkbox" checked={item.checked} />
      <label style={(item.checked) ? {textDecoration:"line-through"} : null}
        onDoubleClick={()=>handleClick(item.id)}>{item.value}</label>
      <FaTrashAlt onClick={()=>handleDelete(item.id)}
        role="button" tabIndex='0'                 />
    </li>
  )
}

export default ListItems