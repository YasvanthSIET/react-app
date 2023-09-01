import React from 'react'
import colorNames from 'colornames'

const AddColor = ({hexValue,setHexValue,setColor,color,handleClick}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="addColor"></label>
      <input type="text" id='addColor' placeholder='Type color name' autoFocus 
      onChange={(e)=>{
        setColor(e.target.value)
        setHexValue(colorNames(e.target.value))
      }}
     />
     <button id='button' type="button" onClick={handleClick}>
      Change text color
    </button>
    </form>
  )
}

export default AddColor