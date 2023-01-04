import React from 'react';
import styles from './App.module.scss';
import Cursor from './components/Cursor/Cursor';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import { Route, Routes, useLocation } from 'react-router-dom';
import Skills from './pages/Skills/Skills';
import StaraTomka from './pages/StaraTomka/StaraTomka';
import Work from './pages/Work/Work';
import { AnimatePresence } from 'framer-motion';
import Thanks from './pages/Thanks/Thanks';

function App() {
  const location = useLocation();

  return (
    <div className={styles.app}>
      <Cursor />
      <Navigation />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/staratomka" element={<StaraTomka />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
