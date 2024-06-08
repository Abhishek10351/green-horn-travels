import Footer from "../../../components/Footer/Footer";
import './Meghalaya.css';
import PlacesCard from '../../../components/PlacesCard/PlacesCard';
import placesData from '../../../packages.json'; // Assuming places.json is located in the src folder

function Meghalaya() {
  // Filter placesData for locations in Meghalaya
  const MeghalayaPlaces = placesData.filter(place => place.location === "Meghalaya");

  return (
    <>
      <div className="Meghalaya-container">
        <h1>Hello from Meghalaya</h1>
        <div className="intro-Meghalaya">
          <p>
          The beautiful state of Meghalaya, located in northeastern India, is known for its breathtaking landscapes and rich cultural heritage. With its rolling hills, cascading waterfalls, and lush greenery, Meghalaya offers a paradise for nature lovers and adventure enthusiasts. The state is home to diverse indigenous communities, each with its unique traditions, music, and cuisine. Whether you're exploring the living root bridges in Cherrapunji, trekking through the picturesque valleys of Mawlynnong, or experiencing the vibrant festivals of Shillong, Meghalaya promises an unforgettable journey into the heart of nature and culture.
          </p>
        </div>
        <div className="places-grid">
        {/* Map over filtered Meghalaya placesData and render PlacesCard */}
        {MeghalayaPlaces.map(place => (
          <PlacesCard key={place.id} place={place} />
        ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Meghalaya;
