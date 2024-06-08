import Footer from "../../../globals/Footer/Footer";
import "./Assam.css";
import PlacesCardSection from "../../PlacesCardSection/PlacesCardSection";
import placesData from "../../../../public/assets/data/packages.json"; // Assuming places.json is located in the src folder

function Assam() {
  // Filter placesData for locations in Assam
  const assamPlaces = placesData.filter((place) => place.location === "Assam");

  return (
    <>
      <div className="assam-container">
        <section>
          <h1>Hello from Assam</h1>
          <div className="intro-assam">
            <p>
              Land of One-Horned Rhinos and Serene Beauty. Lush green hills
              shrouded in mist, the mighty Brahmaputra slicing through the
              heartland, and the echoing calls of wildlife in Kaziranga National
              Park - Assam is a tapestry woven with nature's grandeur. Here,
              ancient temples whisper tales of bygone eras, while vibrant
              festivals like Bihu showcase the warmth and color of Assamese
              culture. Explore the majestic Kamakhya Temple, a revered
              pilgrimage site, or lose yourself in the labyrinthine alleys of
              the historic town of Majuli, the world's largest river island.
              Assam's rich heritage is evident in its handloom textiles, with
              vibrant silks and intricate designs waiting to be discovered.
            </p>
          </div>
        </section>
        {/* make section here */}
        <section className="places-grid">
          {/* Map over filtered Assam placesData and render PlacesCard */}
          
        <PlacesCardSection {...assamPlaces} />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Assam;
