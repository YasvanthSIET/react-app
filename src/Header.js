import React from 'react'

const Header = ({title1,title2}) => {
    const h1Style = {
        color:"pink"
    }
  return (
    <header>
        <h1 style={h1Style}>{title1} {title2}</h1>
    </header>
    
  )
}
Header.defaultProps = {
  title1:"To do",
  title2:"list"
}
export default Header