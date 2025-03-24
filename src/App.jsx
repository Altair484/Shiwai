import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Sketches from './pages/Sketches';
import Contact from './pages/Contact';
import './index.css'; // Fichier pour l'import de Tailwind

function App() {
  return (
    <Router>
      <div className="bg-cream min-h-screen font-inter text-dark" data-scroll-container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/aquarelles" element={<Gallery />} />
          <Route path="/croquis" element={<Sketches />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;