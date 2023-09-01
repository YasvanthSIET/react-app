import React,{useState} from 'react'
import './CSS_Pro2.css'
import HeaderPro2 from './HeaderPro2'
import ContainerPro2 from './ContainerPro2'

const Pro2 = () => {
  const[finding,setFinding] = useState([])
  const[click,setClick] = useState(false)
  const[isLoading,setIsLoading] = useState(true)
  const[error,setError] = useState(null);
  const handleClick = async (URL) =>{
    setClick(true)
    setIsLoading(true)
    try{
      const response = await fetch(URL);
      if(!response.ok) throw Error("Reload the app")
      var value = await response.json()
      setFinding(value)
    }
    catch(error){
      setError(error.message)
    }
    finally{
      setIsLoading(false)
    }
  }

  const styles = {
    textAlign:'center',
    color:'red',
    marginTop:'100px',
    fontWeight:'500'
  }

  return (
    <div>
      <header>
        <HeaderPro2
          handleClick={handleClick}
        />
      </header>
      <main>
        {!click && <p style={styles}>Click anyone above</p>}
        {isLoading && click && <p style={styles}>Loading...</p>}
        {error && click && <p style={styles}>{`${error} / Reload the app`}</p>}
        {!isLoading && !error && <ContainerPro2
          finding={finding}
        /> }
      </main>
    </div>
  )
}

export default Pro2