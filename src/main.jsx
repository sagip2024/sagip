import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
   <div className="bg-[#F3D9E5] min-h-screen">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
)
