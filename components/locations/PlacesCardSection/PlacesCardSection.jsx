import PlacesCard from "./PlacesCard";

export default function PlacesCardSection({ places }) {
    return (
        <section className="places-grid">
        {places.map((place) => (
            <PlacesCard key={place.id} place={place} />
        ))}
        </section>
    );
}