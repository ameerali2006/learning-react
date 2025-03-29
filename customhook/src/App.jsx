import React from 'react'
import Resisehook from './Resisehook'
const App = () => {
  const {width,height}=Resisehook()
  return (
    <div>
      <h1>{width}X{height}</h1>
      
    </div>
  )
}

export default App

