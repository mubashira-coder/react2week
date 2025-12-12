import React from 'react'
import Login from './Login'
import Home from './Home'
import Register from './Register'
import { Routes,Route ,Link} from 'react-router-dom'
function MainRouter() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Register/>}/> 
       <Route path="/login" element={<Login/>}/> 
       <Route path="/home" element={<Home/>}/> 
        </Routes> 
    </div>
  )
}

export default MainRouter
