// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UnitedPlanning from './components/UnitedPlanning';
import TownHall from './components/TownHall';
import Connect from './components/Connect';
import Resources from './components/Resources';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unitedplanning" element={<UnitedPlanning />} />
          <Route path="/townhall" element={<TownHall />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
