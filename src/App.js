import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/newProjects';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
