import React from 'react';
import ShowNavBackground from '/src/utils/showNavBackground';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import Projects from '../src/pages/Projects';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Resume from '../src/pages/Resume';


function App() {

  return (
    <div className="App">
      <Header />
      <Navbar />
      <ShowNavBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



