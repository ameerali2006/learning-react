import React, {useContext} from 'react'
import {Context} from './App'
const Component3 = () => {
    const {message,setMessage}=useContext(Context)
  return (
    <div>
      <input type="text" onChange={(e)=>setMessage(e.target.value)} />
    </div>
  )
}

export default Component3
