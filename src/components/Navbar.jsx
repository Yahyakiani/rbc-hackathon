// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaHome, FaProjectDiagram, FaUsers, FaBook } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <FaProjectDiagram size={30} />
                <span>RBC Hackathon Dashboard</span>
            </div>
            <ul className="nav-links">
                <li><Link to="/"><FaHome /> Home</Link></li>
                <li><Link to="/unitedplanning"><FaProjectDiagram /> United Planning</Link></li>
                <li><Link to="/townhall"><FaUsers /> TownHall</Link></li>
                <li><Link to="/connect"><FaUsers /> Connect</Link></li>
                <li><Link to="/resources"><FaBook /> Resources</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
