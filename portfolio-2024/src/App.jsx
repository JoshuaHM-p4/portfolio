// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import PersistentLayout from "./components/PersistentLayout";
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Interest from './pages/Interest';
import Experience from './pages/Experience';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersistentLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="interests" element={<Interest />} />
          <Route path="experiences" element={<Experience />} />
          <Route path="projects" element={<Project />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;