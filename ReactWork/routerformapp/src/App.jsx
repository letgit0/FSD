import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './component/MainLayout'
import Login from './component/Login';
import Registration from './component/Registration';
import Dashboard from './component/Dashboard'

function App() {
  
  return (
    <>
      {/* <h3>welcome to React Routing</h3> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Registration/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
