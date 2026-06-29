// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainLayout from "./components/MainLayout";
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Notebooks from './pages/Notebooks';
import NotebookDetail from './pages/NotebookDetail';
import ExperienceDetail from './pages/ExperienceDetail';
import EducationDetail from './pages/EducationDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="notebooks" element={<Notebooks />} />
          <Route path="notebooks/:id" element={<NotebookDetail />} />
          <Route path="experience/:id" element={<ExperienceDetail />} />
          <Route path="education/:id" element={<EducationDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
