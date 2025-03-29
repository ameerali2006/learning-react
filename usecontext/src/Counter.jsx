import React,{useContext} from 'react'
import { Contextcount } from './CreateContext'
const Counter = () => {
    const {count,setcount}=useContext(Contextcount)
  return (
    <div>
      {count}
      <button onClick={()=>setcount(count+1)}></button>
    </div>
  )
}

export default Counter
