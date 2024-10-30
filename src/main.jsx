import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import ForgotPassPage from './forgotpasspage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ForgotPassPage />
  </StrictMode>,
)
