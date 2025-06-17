import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Album from './Album';
<Album />
import Quote from './Quote';
import ContactTeaser from './ContactTeaser';
import FAQ from './FAQ';


function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Home />
      
          <Experience />
          <Quote />
          <Album />
          <Contact />
          <ContactTeaser />
          <FAQ />
          
        </>
      } />
      <Route path="/project1" element={<Project1 />} />
      <Route path="/project2" element={<Project2 />} />
      <Route path="/project3" element={<Project3 />} />
    </Routes>
  );
}

export default App;
