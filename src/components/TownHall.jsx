// src/components/TownHall.js
import React, { useState } from 'react';
import '../styles/TownHall.css';
import { FaVoteYea, FaClipboardList } from 'react-icons/fa';
import Funding from '../assets/images/Funding.png';
import Infrastructure from '../assets/images/Infrastructure.png';
import Affordable from '../assets/images/Affordable-Housing.jpg';

const TownHall = () => {
    const [votes, setVotes] = useState({
        infrastructure: 0,
        housing: 0,
        funding: 0,
    });

    const handleVote = (type) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [type]: prevVotes[type] + 1,
        }));
    };

    const topics = [
        {
            id: 'infrastructure',
            title: 'Infrastructure Development',
            description: 'Invest in sustainable infrastructure to support housing projects.',
            image: Infrastructure,
        },
        {
            id: 'housing',
            title: 'Affordable Housing',
            description: 'Increase the availability of affordable housing units.',
            image: Affordable,
        },
        {
            id: 'funding',
            title: 'Funding Opportunities',
            description: 'Enhance funding mechanisms for housing initiatives.',
            image: Funding,
        },
    ];

    return (
        <div className="townhall-container">
            <h1>TownHall - Express Your Issues</h1>
            <div className="topics-container">
                {topics.map((topic) => (
                    <div className="topic-card" key={topic.id}>
                        <img src={topic.image} alt="Topic" className="topic-image" />
                        <div className="topic-details">
                            <h3>{topic.title}</h3>
                            <p>{topic.description}</p>
                        </div>
                        <div className="topic-actions">
                            <button className="btn" onClick={() => handleVote(topic.id)}>
                                <FaVoteYea /> Vote
                            </button>
                            <span className="vote-count">Votes: {votes[topic.id]}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="reports-section">
                <h2>Voting Reports</h2>
                <button className="btn"><FaClipboardList /> Generate Report</button>
                {/* Placeholder for report data */}
                <div className="report-data">
                    <p>Infrastructure Development: {votes.infrastructure} votes</p>
                    <p>Affordable Housing: {votes.housing} votes</p>
                    <p>Funding Opportunities: {votes.funding} votes</p>
                </div>
            </div>
        </div>
    );
};

export default TownHall;
