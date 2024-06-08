import PlacesCard from "./PlacesCard";

export default function PlacesCardSection({ ...places }) {
  return (
    <section className="places-grid">
      {places.map((place) => (
        return <PlacesCard key={place.id} {...place} />
      ))}
    </section>
  );
}