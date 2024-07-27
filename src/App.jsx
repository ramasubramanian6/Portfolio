import { useState } from 'react';
import React from 'react';
import './App.css';
import Header from './pages/header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {


  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
    </>
  )
}

export default App;
