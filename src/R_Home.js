import React, { useContext } from 'react'
import FeedR from './R_Feed'
import DataContext from './Context/dataContext'

const HomeR = () => {
  const {searchResult, isLoading} = useContext(DataContext)
  return (
    <main>
      {isLoading && <p className='info'>
        Loading...</p>}
      {!isLoading && searchResult.length > 0 && <FeedR /> }
      {!isLoading && searchResult.length < 0 && <p className='info'>No posts to display</p> }
  
    </main>
  ) 
}

export default HomeR