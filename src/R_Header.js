import React from 'react'
import { useContext } from 'react'
import {FaMobileAlt, FaTabletAlt, FaLaptop} from 'react-icons/fa'
import DataContext from './Context/dataContext'

const HeaderR = ({title}) => {
  const {width} = useContext(DataContext)
  return (
    <header className='header'>
      <h1>{title}</h1>
      {width<768 ? <FaMobileAlt /> :
        width<992 ? <FaTabletAlt /> : <FaLaptop /> 
      }
    </header>
  )
}
HeaderR.defaultProps = {title:"Social media"}
export default HeaderR