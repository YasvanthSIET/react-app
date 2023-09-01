import React from 'react'
import './App1.css'
import { useState } from 'react'
import ColorBox from './ColorBox'
import AddColor from './AddColor'

const App1 = () => {
    const handleClick = () =>{
        const colorBox = document.getElementById('colorBox');
        colorBox.classList.toggle('white')
    }
    const[color,setColor] = useState('');
    const[hexValue,setHexValue] = useState('');

  return (
    <div id='colorChanger'>
        <ColorBox 
            color = {color}
            hexValue = {hexValue}
        />
        <AddColor 
            color= {color}
            setColor = {setColor}
            hexValue = {hexValue}
            setHexValue = {setHexValue}
            handleClick = {handleClick}
        />
    </div>
  )
}

export default App1