import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage/loginPage.ui';
import RegisterPage from './pages/ResgisterPage/RegisterPage.ui';



export default function TarefasApp() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/registro" element={<RegisterPage />} />
    <Route path="/dashboard" element={<div>Dashboard</div>} />
    </Routes>
    </BrowserRouter>
   
  );
}


