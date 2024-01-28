//eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projetos from './pages/Projetos/Projetos';
import Certificados from './pages/Certificados/Certificados';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/certificados" element={<Certificados />} />
        </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;


