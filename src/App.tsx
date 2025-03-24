
import * as React from 'react';
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
import Login from './pages/Login';
import { Toaster } from './components/ui/toaster';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';
import AdminRoute from './components/AdminRoute';

function App() {
  return (
    <AuthProvider>
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
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            } />
          </Routes>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
