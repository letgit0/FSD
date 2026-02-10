import React from 'react'
import {Link } from 'react-router-dom'

function MainLayout() {
  return (
    <div>MainLayout
      <nav>
        <Link style={{fontSize:'30px', color:'red', marginLeft:'20px'}} to='/login'>Login</Link>
        <Link style={{fontSize:'30px', color:'red', marginLeft:'20px'}} to='/register'>Registration</Link>
      </nav>
    </div>
  )
}

export default MainLayout