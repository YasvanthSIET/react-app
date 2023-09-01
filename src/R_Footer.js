import React from 'react'

const FooterR = () => {
  const year = new Date().getFullYear()
  return (
    <div className='footer'>
      <h4>&copy;Copy {year}</h4>
    </div>
  )
}

export default FooterR