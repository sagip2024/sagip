import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavLinks from './components/NavLinks';
import About from './pages/About';
import BG from './assets/about/BG.png'
function App() {
  return (
    <div className="bg-cover bg-center bg-no-repeat w-screen h-screen overflow-x-hidden scroll-smooth"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <NavLinks />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
