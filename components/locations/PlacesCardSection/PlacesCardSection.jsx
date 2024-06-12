import "./placesCardSection.css";
import PlacesCard from "./PlacesCard";

export default function PlacesCardSection({ places }) {
    return (
        <section className="places-grid">
            {places.map((place) => {
                return <PlacesCard key={place.placeName} {...place} />;
            })}
        </section>
    );
}
