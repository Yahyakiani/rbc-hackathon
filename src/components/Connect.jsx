// src/components/Connect.js
import React from 'react';
import '../styles/Connect.css';
import { FaHandshake, FaMoneyCheckAlt } from 'react-icons/fa';
import garden from '../assets/images/garden.jpg';
import advocacy from '../assets/images/advocacy.png';
import AffordableHousing from '../assets/images/Affordable-Housing.jpg';

const Connect = () => {
    const initiatives = [
        {
            title: 'Community Garden Project',
            description: 'Collaborate to build sustainable community gardens in urban areas.',
            image: garden,
        },
        {
            title: 'Affordable Housing Fund',
            description: 'Mobilize funding to support the construction of affordable housing units.',
            image: AffordableHousing,
        },
        {
            title: 'Policy Advocacy',
            description: 'Work together to advocate for favorable housing policies.',
            image: advocacy,
        },
    ];

    return (
        <div className="connect-container">
            <h1>Connect - Collaborate and Mobilize</h1>
            <div className="initiatives-container">
                {initiatives.map((initiative, index) => (
                    <div className="initiative-card" key={index}>
                        <img src={initiative.image} alt="Initiative" className="initiative-image" />
                        <div className="initiative-details">
                            <h3>{initiative.title}</h3>
                            <p>{initiative.description}</p>
                        </div>
                        <div className="initiative-actions">
                            <button className="btn"><FaHandshake /> Collaborate</button>
                            <button className="btn"><FaMoneyCheckAlt /> Mobilize Funding</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Connect;
