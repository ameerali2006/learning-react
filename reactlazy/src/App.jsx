import React, {lazy,Suspense} from 'react'
const LazyComp=lazy(()=>import('./lazyComponent'))
const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>loding</h1>}>
      <LazyComp/>

      </Suspense>
      
    </div>
  )
}

export default App 
