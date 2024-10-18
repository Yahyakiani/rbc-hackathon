// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import { FaChartLine, FaBuilding, FaHandsHelping } from 'react-icons/fa';
import HousingGaps from '../assets/images/HousingGaps.jpg';
import Infrastructure from '../assets/images/Infrastructure.png';
import Funding from '../assets/images/Funding.png';

const Home = () => {
    const insights = [
        {
            icon: <FaChartLine size={30} color="#C8102E" />,
            title: 'Housing Gaps',
            description: 'Identifying areas with significant housing shortages across various demographics.',
            image: HousingGaps,
        },
        {
            icon: <FaBuilding size={30} color="#C8102E" />,
            title: 'Infrastructure Development',
            description: 'Analyzing infrastructure changes to support sustainable housing solutions.',
            image: Infrastructure,
        },
        {
            icon: <FaHandsHelping size={30} color="#C8102E" />,
            title: 'Funding Opportunities',
            description: 'Capitalizing on funding opportunities to support housing projects and initiatives.',
            image: Funding,
        },
    ];

    return (
        <div className="home-container">
            <h1>Welcome to United Way Maritimes Dashboard</h1>
            <div className="cards-container">
                {insights.map((insight, index) => (
                    <div className="card" key={index}>
                        <div className="card-icon">
                            {insight.icon}
                        </div>
                        <h3>{insight.title}</h3>
                        <p>{insight.description}</p>
                        <img src={insight.image} alt="Placeholder" className="card-image" />
                        <div className="card-buttons">
                            <button className="btn">Export</button>
                            <button className="btn">Generate Report</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
