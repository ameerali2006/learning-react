
import React from 'react'
import ContextFile from './ContextFile'
import Home from './Home'
import ColorContext from './ColorContext'
import ColorComponent from './ColorComponent'
import CreateContext from './CreateContext'
import Counter from './counter'
const App = () => {

  return (
    // <ContextFile>
      
    //   <Home/>
    // </ContextFile>
    // <ColorContext>
    //     {console.log('app.jsx')}
    //   <ColorComponent/>
      
    // </ColorContext>
    <CreateContext>
      <Counter/>
    </CreateContext>


  )
}

export default App 

