import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
        <div style={{fontWeight:700,fontSize:"20px"}}>{length} list {length===1 ? "item":"items"}</div>
    </footer>
  )
}

export default Footer