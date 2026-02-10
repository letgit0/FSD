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
  const [logData, setlogData] = useState();

  return (
    <>
      {/* <h3>welcome to React Routing</h3> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}></Route>
          <Route path='/login' element={<Login loginData={logData}/>}></Route>
          <Route path='/register' element={<Registration regData={setlogData}/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes> 
      </BrowserRouter>
      {/* <h2>{JSON.stringify(logData)}</h2> */}
    </>
  )
}

export default App
