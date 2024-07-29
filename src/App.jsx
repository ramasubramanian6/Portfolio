import { useState } from 'react';
import React from 'react';
import './App.css';
import Header from './pages/header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/contact';
import Footer from './pages/Footer';

function App() {


  return (
    <div>
      
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
