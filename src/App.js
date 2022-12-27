import React from 'react';
import styles from './App.module.scss';
import Cursor from './components/Cursor/Cursor';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      {/* <Cursor /> */}
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
