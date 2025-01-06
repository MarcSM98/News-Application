import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import StorePovider from './context/StorePovider.jsx'

createRoot(document.getElementById('root')).render(
  
  <StorePovider>
    <>
    <App />
  
    <Toaster/>
    </>
  </StorePovider>,
)
