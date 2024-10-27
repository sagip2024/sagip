import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavLinks from './components/NavLinks';
import Macronutrients from './components/Content';

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <NavLinks 
        pageId="/"
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/macro" element={<Macronutrients />} />
      </Routes>
    </div>
  );
}

export default App;
