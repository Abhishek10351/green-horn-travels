import React from 'react';
import './TopPackageCard.css';

function TopPackageCard({ image, title, description }) {
  return (
    <div className="package-card">
      {image && <img src={image} alt={title} className="package-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default TopPackageCard;
