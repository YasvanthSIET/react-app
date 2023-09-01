import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <form className='searchItem' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search"></label>
        <input 
            type="text"
            id="search"
            required
            placeholder='Search item'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}/>
    </form>
  )
}

export default Search