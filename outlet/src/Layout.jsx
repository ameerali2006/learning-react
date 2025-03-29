import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <nav>
            <Link to={'/'}>Home</Link>hskhsa<Link to={'/about'}>about</Link>
        </nav>
        <hr />
        <Outlet/>
      
    </div>
  )
}

export default Layout
