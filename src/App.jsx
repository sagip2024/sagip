import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavLinks from './components/NavLinks';
import Macronutrients from './components/Content';
import Contents from './pages/Contents';

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <NavLinks 
        pageId="/"
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contents" element={<Contents />} />
      </Routes>
    </div>
  );
}

export default App;
