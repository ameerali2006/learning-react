import React, {createContext,useState} from 'react'
export const Contextcount=createContext()
const CreateContext = ({children}) => {
    const [count,setcount]=useState(0)
  return (
   <Contextcount.Provider value={{count,setcount}}>
    {children}
   </Contextcount.Provider>
  )
}

export default CreateContext
