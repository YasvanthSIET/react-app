import React from 'react'
import { useState } from 'react'

const Container = () => {
  const[name,setName] = useState("Grow")
  const handleClick = () =>{
    const value = ["Earn","Grow","Give"];
    const int = Math.floor(Math.random()*3);
    setName(value[int])
  }
  const valFunc = () =>{
    return 50;
  }
  const[value,setValue] = useState(()=>valFunc());
  
  const handleIncrement = () =>{
    setValue(()=>value+1)
  }
  const handleDecrement = () =>{
    setValue(value-1)
  }
  const[name1,setName1] = useState({
    name:"Yasvanth",
    age:21
  })
  const handleChange = () =>{
    setName1({name:"yash",age:23})
    console.log(name1.name,name1.age);
  }
  return (
    <main>
        <p>Let's {name} money</p>
        <button onClick={()=>handleClick()}>Click me</button>
       <br /> <button onClick={()=>handleIncrement()}>+</button>
        <p>{value}</p>
        <button onClick={()=>handleDecrement()}> - </button>
       
       <br /> <button onClick={()=>handleChange()}>Click here</button>
    </main >
  )
}

export default Container