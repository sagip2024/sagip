import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavLinks from './components/NavLinks';
import About from './pages/About';
import BG from './assets/about/BG.png';
import { FirebaseStorageProvider } from './context/firebaseStorage';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading with a timeout or replace with actual loading logic
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <FirebaseStorageProvider>
      <div
        className="bg-cover bg-center bg-no-repeat w-screen h-screen overflow-x-hidden scroll-smooth relative"
        style={{ backgroundImage: `url(${BG})` }}
      >
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50">
            <Loading />
          </div>
        )}
        <NavLinks />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </FirebaseStorageProvider>
  );
}

export default App;
