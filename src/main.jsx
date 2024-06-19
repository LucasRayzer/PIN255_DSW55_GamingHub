import React from 'react'
import ReactDOM from 'react-dom/client'
import TarefasApp from './TarefasApp.jsx'
import './App.css'
import { AuthProvider } from './AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <TarefasApp />
    </AuthProvider>
  </React.StrictMode>,
)
