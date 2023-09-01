import React, { useContext } from 'react'
import PostR from './R_Post'
import DataContext from './Context/dataContext'

const FeedR = () => {
  const {searchResult} = useContext(DataContext)
  return (
    <>
        {searchResult.map((post) =>
            <PostR key={post.id} post={post}/>
        )}
    </>
  )
}

export default FeedR