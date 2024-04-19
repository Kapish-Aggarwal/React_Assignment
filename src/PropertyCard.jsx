import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} />
      <h2>{property.name}</h2>
      <p>Price: {property.price}</p>
      <p>Description: {property.description}</p>
      <p>Location: {property.location}</p>
    </div>
  );
};

export default PropertyCard;
