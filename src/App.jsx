import React,{ useEffect } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './components/RegisterForm'
import Login from './components/LoginForm'
import './App.css'
import NotFound  from './pages/NotFound'
import Home from './pages/Home'
import PasswordResetRequest from './components/PasswordResetRequest'
import PasswordResetConfirm from './components/PasswordResetConfirm'
import FaqPage from './pages/FaqPage'




const RegisterAndLogout = () => {
  useEffect(() => {
    localStorage.clear(); // Clear tokens on component mount
  }, []);

  return <Register />;
};

function App()  { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}
         />
         <Route path="/create/faq" element={<FaqPage/>}
         />
        <Route path="/passwordreset" element={<PasswordResetRequest />}
         />
         <Route path="/password-reset-confirm/:uid/:token/" element={<PasswordResetConfirm />}
         />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
