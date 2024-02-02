import React, { useState } from 'react';

// style
import styles from './App.module.scss';
//components
import Cursor from './components/Cursor/Cursor';
import Navigation from './components/Navigation/Navigation';
//pages
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Thanks from './pages/Thanks/Thanks';

import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [showCursor, toggleShowCursor] = useState(true);
  const location = useLocation();

  const handleCursor = () => {
    toggleShowCursor(!showCursor);
    if (showCursor) {
      document
        .querySelector(':root')
        .style.setProperty('--cursor-status', 'initial');
    } else {
      document
        .querySelector(':root')
        .style.setProperty('--cursor-status', 'none');
    }
  };

  return (
    <div className={styles.app}>
      {showCursor ? <Cursor /> : null}
      <Navigation handleCursor={handleCursor} />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
