import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectsArchive from './components/ProjectsArchive'; 
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import BlogsArchive from './components/BlogsArchive';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; 
import Timeline from './components/Timeline';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Projects />
            <Timeline />
            <Skills />
            <Blogs />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/projects-archive" element={<ProjectsArchive />} />
        <Route path="/blogs-archive" element={<BlogsArchive />} />
      </Routes>
    </Router>
  );
};

export default App;
