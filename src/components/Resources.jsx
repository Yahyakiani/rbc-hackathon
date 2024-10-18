// src/components/Resources.js
import React from 'react';
import '../styles/Resources.css';
import { FaFileAlt, FaInfoCircle } from 'react-icons/fa';

const Resources = () => {
    const resourceLinks = [
        {
            title: 'Who We Are (United Way)',
            icon: <FaInfoCircle />,
            link: '#',
        },
        {
            title: 'What We Do (United Way)',
            icon: <FaInfoCircle />,
            link: '#',
        },
        {
            title: 'Charity in Canada',
            icon: <FaInfoCircle />,
            link: '#',
        },
        {
            title: 'Needs of Canada',
            icon: <FaInfoCircle />,
            link: '#',
        },
        {
            title: 'How to Register as a Charity in Canada',
            icon: <FaFileAlt />,
            link: '#',
        },
        {
            title: 'United Way Annual Reports',
            icon: <FaFileAlt />,
            link: '#',
        },
    ];

    return (
        <div className="resources-container">
            <h1>Resources</h1>
            <div className="resources-list">
                {resourceLinks.map((resource, index) => (
                    <a href={resource.link} key={index} className="resource-item">
                        <div className="resource-icon">
                            {resource.icon}
                        </div>
                        <span>{resource.title}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Resources;
