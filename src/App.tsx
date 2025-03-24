
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import ArtworkDetail from './pages/ArtworkDetail';
import Sketches from './pages/Sketches';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { Toaster } from './components/ui/toaster';
import './index.css';

function App() {
  return (
    <Router>
      <div className="bg-cream min-h-screen font-inter text-dark">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/aquarelles" element={<Gallery />} />
          <Route path="/aquarelles/:id" element={<ArtworkDetail />} />
          <Route path="/croquis" element={<Sketches />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
