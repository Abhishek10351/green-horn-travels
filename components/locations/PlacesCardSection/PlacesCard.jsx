import "./PlacesCard.css";
import Image from "next/Image";
export default function PlacesCard({ ...place }) {
  return (
    <article className="card">
      <Image
        className="card__background"
        src={place.img}
        alt={`Photo of ${place.placeName}`}
        width={400}
        height={300}
      />
      <div className="card__content flow">
        <div className="card__content__container flow">
          <h2 className="card__title">{place.placeName}</h2>
          <p className="card__description">{place.info}</p>
        </div>
        <button className="card__button">Book Now</button>
      </div>
    </article>
  );
}
