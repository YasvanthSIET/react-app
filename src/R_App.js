import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomeR from './R_Home'
import NewPostR from './R_NewPost'
import AboutR from './R_About'
import PostPageR from './R_PostPage'
import EditPageR from './R_EditPage'
import MissingR from './R_Missing'
import HeaderR from './R_Header'
import NavR from './R_Nav'
import FooterR from './R_Footer'
import './R_App.css'
import { DataProvider } from './Context/dataContext'

const AppR = () => {
  return (
    <div className='app'>
    <DataProvider>
      <HeaderR title='Social media' />
      <NavR />
      <div id='content'>
      {/* {{isLoading} && <p className='loading'>
        Loading...</p>}
      {(!{isLoading}) &&  */}
      <Routes>
        <Route path='/' element={<HomeR />} />
        <Route path='/post'>
          <Route index element={<NewPostR />}/>
          <Route path=':id' element={<PostPageR />}/>
        </Route> 
        <Route path='/edit/:id' element={<EditPageR />}/>
        <Route path='/about' element={<AboutR/>}/>
        <Route path='*' element={<MissingR />}/>
      </Routes> 
      </div>
      <FooterR />
      </DataProvider>  
    </div>
  )
}

export default AppR  