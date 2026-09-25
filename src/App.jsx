import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero/Hero';
import Overview from './components/sections/Overview/Overview';
import Timeline from './components/sections/Timeline/Timeline';
import POCs from './components/sections/POCs/POCs';
import Skills from './components/sections/Skills/Skills';
import Growth from './components/sections/Growth/Growth';
import FinalCTA from './components/sections/FinalCTA/FinalCTA';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Timeline />
        <POCs />
        <Skills />
        <Growth />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
