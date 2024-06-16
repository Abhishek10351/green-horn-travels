import "./PlacesCard.css";
import Image from "next/image";
export default function PlacesCard({ ...place }) {
    return (
        <article className="card">
            <Image
                className="card-background"
                src={`/assets/locations/${place.img}`}
                alt={`Photo of ${place.placeName}`}
                width={400}
                height={300}
            />
            <div className="card-content">
                <div className="card-content-container flow">
                    <h2 className="card-title">{place.placeName}</h2>
                    <p className="card-description">{place.info}</p>
                </div>
                <button className="card-button">Book Now</button>
            </div>
        </article>
    );
}
