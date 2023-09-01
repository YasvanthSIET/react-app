import React from "react";
import List from './List.js'

const Container1 = ({items,handleClick,handleDelete}) => {
  
  return (
    <div>
      {(items.length) ? (
        <List 
          items={items} 
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{color:"black"}}>Your list is empty</p>
      )}
    </div>
  )
}

export default Container1