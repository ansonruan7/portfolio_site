import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
