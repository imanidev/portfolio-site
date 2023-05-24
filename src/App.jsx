import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import Projects from '../src/pages/Projects';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import ShowNavBackground from '/src/utils/showNavBackground';

function App() {

  return (
    <div className="App">
      <Header />
      <Navbar />
      <ShowNavBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


