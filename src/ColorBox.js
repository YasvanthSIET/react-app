import React from 'react'

const ColorBox = ({color,hexValue}) => {
    const style = {
        fontWeight : 500
    }
    const style1 = {
      backgroundColor : color
    }
  return (
    <div id='colorBox' style={style1}>
        <p id='colorName' style={style}>{color ? color : 'Empty value'}</p>
        <p id='hexaColor' style={style}>{hexValue}</p>
    </div>
  )
}

export default ColorBox