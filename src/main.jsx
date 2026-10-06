import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
// import App from './App.jsx'
import Routing from './Routing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing />
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
)
