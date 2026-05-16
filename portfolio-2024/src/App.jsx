// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainLayout from "./components/MainLayout";
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Notebooks from './pages/Notebooks';
import NotebookDetail from './pages/NotebookDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="notebooks" element={<Notebooks />} />
          <Route path="notebooks/:id" element={<NotebookDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
