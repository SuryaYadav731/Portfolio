import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from "./components/Contact";
import Aos from 'aos';
import "aos/dist/aos.css"
function App() {
   useEffect (() =>{
       Aos.init();
   }, [])
  return (
    <>
      <Navbar/>
       <Home/>
       <Education/>
       <Skills/>
       <Project/>
       <Contact/>

    </>
  )
}

export default App
