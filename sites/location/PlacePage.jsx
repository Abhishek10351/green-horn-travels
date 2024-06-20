import "./PlacePage.css";
import Navbar from "../../components/globals/Navbar/Navbar";
import Footer from "../../components/globals/Footer/Footer";
import PlacesCardSection from "../../components/locations/PlacesCardSection/PlacesCardSection";
import PlaceIntro from "../../components/locations/places/placeIntro/placeIntro";
import locationData from "../../public/assets/data/place-components.json";
import cardsData from "../../public/assets/data/packages.json";
export default function PlacePage({ location }) {
  const placeData = locationData.filter(
    (place) => place.location === location
  )[0];
  const Cards = cardsData.filter((card) => card.location.startsWith(location));
  const img = `/assets/background/${placeData.img}`;
  const bg_style = {
    backgroundImage: `url(${img})`,
  };

  return (
    <>
      <Navbar />
      <main className="place-container" style={bg_style}>
        <PlaceIntro {...placeData} />
        <PlacesCardSection places={Cards} />
      </main>
      <Footer />
    </>
  );
}
