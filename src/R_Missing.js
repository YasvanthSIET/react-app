import React from 'react'
import { Link } from 'react-router-dom'

const MissingR = () => {
  return (
    <main className='missing'>
      <h3>Page not found</h3>
      <Link id='missingLink' to='/'><p>Visit our Homepage</p></Link>
    </main>
  )
}

export default MissingR