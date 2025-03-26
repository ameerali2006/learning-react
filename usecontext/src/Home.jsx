import React, {useContext} from 'react'
import { CounterContext } from './ContextFile';

const Home = () => {
  const {count,setCount}=useContext(CounterContext)
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>setCount(count+1)}> +</button>
    </div>
  )
}

export default Home
