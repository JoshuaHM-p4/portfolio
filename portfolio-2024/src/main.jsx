import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavbarProvider } from './context/NavbarContext'; // wherever you place it
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </StrictMode>,
)
