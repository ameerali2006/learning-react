
import React from 'react'
import ContextFile from './ContextFile'
import Home from './Home'
import ColorContext from './ColorContext'
import ColorComponent from './ColorComponent'
const App = () => {

  return (
    // <ContextFile>
      
    //   <Home/>
    // </ContextFile>
    <ColorContext>
        {console.log('app.jsx')}
      <ColorComponent/>
      
    </ColorContext>
  )
}

export default App 

