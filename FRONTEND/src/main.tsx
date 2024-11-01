import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavRouted from './Contents/navrouted'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavRouted/>
  </StrictMode>,
)