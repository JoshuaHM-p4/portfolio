// src/App.jsx
import React from 'react'
import './App.css'
import Home from './pages/Home'
import Background from './components/Background/Background'

const App = () => {
  return (
    <div className='relative w-screen h-screen'>
      <Background />
      <Home />
    </div>
  );
}

export default App;