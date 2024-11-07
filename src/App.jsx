import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EdukasiPage from './pages/EdukasiPage';
import PekerjaanPage from './pages/PekerjaanPage';
import DiskusiPage from './pages/DiskusiPage';

function App() {
  
  return (
    <>
      <Router> 
        <Navbar /> 
        <Routes> 
          <Route path="/" element={<EdukasiPage />} /> 
          <Route path="/pekerjaan" element={<PekerjaanPage />} /> 
          <Route path="/diskusi" element={<DiskusiPage />} /> 
        </Routes> 
      </Router>
    </>
  )
}

export default App
