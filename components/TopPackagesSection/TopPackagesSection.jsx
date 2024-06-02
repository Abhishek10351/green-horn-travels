import React from 'react';
import PackageCard from './Packagecard';
import './TopPackagesSection.css';
import assamImage from '../../assets/locations/Assam/sivasagar.jpg';

const topPackages = [
  {
    title: "Sivasagar",
    description: "Enjoy the enriching beauty of the historical town of Sivasagar.",
    image:"https://dzongholidays.com/wp-content/uploads/2022/06/Destination-Sivasagar-Assam-3-870x555.jpg"
    //Green Horn Travels\travel-website\src\assets\locations\Assam\sivasagar.jpg
  },
  {
    title: "Kaziranga",
    description: "Explore the majestic beauty and serenity of the national park.",
    image: "https://images.unsplash.com/photo-1675296098616-53e3d4a1dd57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8S2F6aXJhbmdhfGVufDB8fDB8fHww" // Replace with actual image path
  },
  {
    title: "Meghalaya",
    description: "Adventure awaits in Meghalaya's landscapes.",
    image: "https://images.unsplash.com/photo-1552978534-9d01e1f91517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWVnaGFsYXlhfGVufDB8fDB8fHww" // Replace with actual image path
  }
  
];

function TopPackagesSection() {
  return (
    <div className="top-packages-section">
      <h2>Top Travel Packages</h2>
      <div className="packages-container">
        {topPackages.map((pkg, index) => (
          <PackageCard
            key={index}
            image={pkg.image}
            title={pkg.title}
            description={pkg.description}
          />
        ))}
      </div>
    </div>
  );
}

export default TopPackagesSection;
