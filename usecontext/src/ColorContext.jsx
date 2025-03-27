import React, {createContext,useContext, useState} from 'react'
export const newContext=createContext()
const ColorContext = ({children}) => {
    const [color,setcolor]=useState('black')
    console.log('newcontext')

  return (
    <newContext.Provider value={{color,setcolor}}>
      {children}
    </newContext.Provider>
  )
}

export default ColorContext
