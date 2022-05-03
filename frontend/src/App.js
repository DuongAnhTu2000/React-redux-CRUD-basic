import React from 'react';
import { Routes, Route,Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux'
import './App.css';
import Login from './Component/UI/Login';
import Register from './Component/UI/Register';
import ResetPassword from './Component/UI/ResetPassword';
import Admin from './Admin/Admin';
function App() {
  const user = useSelector(state => state.auth.isAuthenticated);

  
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin" element={user ? <Admin /> : <Navigate to='/'/>} />
        <Route path="/" element={user ? <Navigate to='/admin'/> : <Login />} />

      </Routes>                      
    </div>
  )
}


export default App