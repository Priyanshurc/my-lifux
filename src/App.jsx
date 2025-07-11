// App.jsx
import React, { useState } from 'react';
import Navigation from './components/molecules/Navigation';
import LandingPage from './components/templates/LandingPage';
import './styles/App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="App">
      {/* Navigation */}
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay open" onClick={closeMenu}></div>}

      {/* Page Content */}
      <LandingPage />
    </div>
  );
}

export default App;
