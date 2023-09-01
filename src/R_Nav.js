import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import DataContext from './Context/dataContext'

const NavR = () => {
  const {search,setSearch} = useContext(DataContext)
  return (
    <nav className='nav'>
      <form className='navForm' onSubmit={e=>e.preventDefault()}>
        <label htmlFor="search">Search posts : </label>
        <input type="text" id="search" autoFocus
          placeholder='Search post' value={search}
          onChange={(e)=>setSearch(e.target.value)} />
      </form>
      <ul className='navList'>
        <li><Link id='link' to='/'>Home</Link></li>
        <li><Link id='link' to='/post'>Post</Link></li>
        <li><Link id='link' to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

export default NavR