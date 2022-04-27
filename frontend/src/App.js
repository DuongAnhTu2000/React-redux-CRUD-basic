import React from 'react';
import { Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Component/UI/Login';
import Register from './Component/UI/Register';
import ResetPassword from './Component/UI/ResetPassword';
import Admin from './Admin/Admin';
function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>                      
    </div>
  )
}


export default App