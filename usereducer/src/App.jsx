import React, {useReducer}  from 'react'
const i={count:0}
const reducer=(state,action)=>{
  switch(action.type){
    case 'inc':
      return {count:state.count+1}
    case 'dcr':
      return {count:state.count-1}
    case 'reset':
      return i
    default:
      return state
  }
}
const App = () => {
  const [state,dispach]=useReducer(reducer,i)
  return (
    <div>
      <h3>count:{state.count}</h3>
      <button onClick={()=>dispach({type:'inc'})}>➕</button> 
      <button onClick={()=>dispach({type:'dcr'})}>➖</button>
      <button onClick={()=>dispach({type:'reset'})}>🔄</button>
 
    </div>
  )
}

export default App
