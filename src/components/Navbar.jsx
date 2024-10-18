// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll add some basic styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>RBC Hackathon Dashboard</h2>
            <ul className="nav-links">
                <li><Link to="/">United Planning</Link></li>
                <li><Link to="/townhall">TownHall</Link></li>
                <li><Link to="/connect">Connect</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
