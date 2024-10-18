// src/components/UnitedPlanning.js
import React from 'react';
import '../styles/UnitedPlanning.css';
import { FaHome, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import placeholder from '../assets/images/HousingGaps.jpg';

const UnitedPlanning = () => {
    // Dummy data for properties
    const properties = [
        {
            name: 'Sunrise Apartments',
            demographics: 'Families with children',
            housingNeeds: 'Affordable housing units',
            estimatedCost: '$5,000,000',
            location: 'Halifax, NS',
        },
        {
            name: 'Maple Residences',
            demographics: 'Senior Citizens',
            housingNeeds: 'Accessible housing',
            estimatedCost: '$3,200,000',
            location: 'Fredericton, NB',
        },
        {
            name: 'Oceanview Condos',
            demographics: 'Young Professionals',
            housingNeeds: 'Modern amenities',
            estimatedCost: '$4,500,000',
            location: 'Saint John, NB',
        },
    ];

    return (
        <div className="united-planning-container">
            <h1>United Planning</h1>
            <div className="properties-container">
                {properties.map((property, index) => (
                    <div className="property-card" key={index}>
                        <img src={placeholder} alt="Property" className="property-image" />
                        <div className="property-details">
                            <h3>{property.name}</h3>
                            <p><FaMapMarkerAlt /> {property.location}</p>
                            <p><FaHome /> Demographics: {property.demographics}</p>
                            <p><FaDollarSign /> Estimated Cost: {property.estimatedCost}</p>
                            <p>Housing Needs: {property.housingNeeds}</p>
                        </div>
                        <div className="property-actions">
                            <button className="btn">Export</button>
                            <button className="btn">Generate Report</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UnitedPlanning;
