import React, {useState,useCallback} from 'react'
import Home from './Home'
const App = () => {
  const [c,sc] =useState(0)
 const handleClick=useCallback(()=>{
  console.log('handle click')
 },[])
  return (
    <div>
      <button onClick={()=>sc(c+1)}>count:{c}</button>
      <Home handleClick={handleClick}/>


      
    </div>
  )
}

export default App
