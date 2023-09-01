import React from 'react'
import ListItems from './ListItems';

const List = ({items,handleClick,handleDelete}) => {
  return (
    <ul>
        {items.map((item,index) => (
          <ListItems 
            item={item}
            key={item.id}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
  )
}

export default List