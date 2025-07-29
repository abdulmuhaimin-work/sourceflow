import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sponsors />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App; 