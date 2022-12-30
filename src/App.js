import React from 'react';
import styles from './App.module.scss';
// import Cursor from './components/Cursor/Cursor';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import Skills from './pages/Skills/Skills';
import StaraTomka from './pages/StaraTomka/StaraTomka';

function App() {
  return (
    <div className={styles.app}>
      {/* <Cursor /> */}
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/staratomka" element={<StaraTomka />} />
      </Routes>
    </div>
  );
}

export default App;
