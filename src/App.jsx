import React, { useState } from 'react';
import styles from './App.module.scss';
import Cursor from './components/Cursor/Cursor';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About/About';
// import StaraTomka from './pages/StaraTomka/StaraTomka';
import Work from './pages/Work/Work';
import { AnimatePresence } from 'framer-motion';
import Thanks from './pages/Thanks/Thanks';
// import Education from './pages/Education/Education';

function App() {
  const [showCursor, toggleShowCursor] = useState(true);
  const location = useLocation();

  const handleCursor = () => {
    toggleShowCursor(!showCursor);
    if (showCursor) {
      document
        .querySelector(':root')
        .style.setProperty('--cursor-status', 'default');
    } else {
      document
        .querySelector(':root')
        .style.setProperty('--cursor-status', 'none');
    }
  };

  document.addEventListener('focusin', function() {
    console.log('focused: ', document.activeElement)
  }, true);

  return (
    <div className={styles.app}>
      {showCursor ? <Cursor /> : null}
      <Navigation handleCursor={handleCursor} />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/education" element={<Education />} /> */}
          <Route path="/work" element={<Work />} />
          <Route path="/thanks" element={<Thanks />} />
          {/* <Route path="/staratomka" element={<StaraTomka />} /> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
