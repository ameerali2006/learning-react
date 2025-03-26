import React from 'react'

const Home = React.memo((handleClick) => {
    return (
      <div>
        {console.log('child component')}
      </div>
    )
  })

export default Home
