import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CursorGlow from './components/Cursorglow';
import TestProjects from './components/testProjects';
import Footer from './components/Footer';


function App() {
  return (
    <div className='items-center'>
      <CursorGlow/>
      <Navbar/>
      <Hero/>
      <TestProjects/>
      <Footer/>
    </div>
  );
}

export default App;
