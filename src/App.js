import React from 'react'
import Navbar from './component/navbar/Navbar'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Update from './component/update/Update'
import { useUserContext } from './component/hooks/UserHooks'



const App = () => {

  const {user} = useUserContext()

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" 
        element={<Home/>} 
        />

      <Route path="/login" 
        element={<Login/>} 
        />

      <Route path="/signup" 
        element={<Signup/>} 
        />

      <Route path="/update/:id" 
        element={<Update/>} 
        />  
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App