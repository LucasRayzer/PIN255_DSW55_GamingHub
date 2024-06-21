import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage/loginPage.ui';
import RegisterPage from './pages/ResgisterPage/RegisterPage.ui';
import HomePage from './pages/HomePage/HomePage.ui';
import LibraryPage from './pages/LibraryPage/LibraryPage.ui';

import GameDetailsPage from './pages/GameDetailsPage/GameDetailsPage.ui';
import NotePage from './pages/NotePage/NotePage.ui';
import SettingsPage from './pages/SettingsPage/SettingsPage.ui';
import axios from 'axios';
import SteamPage from './pages/StamPage.styles.jsx/SteamPage.ui';


export default function TarefasApp() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/registro" element={<RegisterPage />} />
    <Route path="/homepage" element={<HomePage/>} />
    <Route path="/library" element={<LibraryPage/>}/>
    <Route path="/game/:id" element={<GameDetailsPage />}/>
    <Route path="/rate/:id" element={<NotePage/>}/>
    <Route path="/settings" element={<SettingsPage/>}/>
    <Route path='/SteamComand' element={<SteamPage/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}