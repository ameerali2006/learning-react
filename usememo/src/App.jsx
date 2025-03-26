import React, {useMemo,useState} from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  const total=useMemo(()=>{
    let sum=0
    for(let i=0;i<1000000000;i++){
      sum+=i
    }
    return sum
  },[])
  return (
    <div>
      <h1>total:{total}</h1>
      <h1>count:{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>+</button>
    </div>
  )
}

export default App
