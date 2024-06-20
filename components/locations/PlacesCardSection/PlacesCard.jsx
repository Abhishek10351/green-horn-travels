import "./PlacesCard.css";
import Image from "next/image";
export default function PlacesCard({ ...place }) {
    const url_text = encodeURIComponent(
        `I am interested in booking a trip to ${place.placeName}. Can you please provide me with more information?`
    );
    const url = `https://wa.me/7002822793?text=${url_text}`;
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
                <div className="card-content-container">
                    <h2 className="card-title">{place.placeName}</h2>
                    <p className="card-description">{place.info}</p>
                </div>
                <a href={url} target="_blank">
                    <button className="card-button">Book Now</button>
                </a>
            </div>
        </article>
    );
}
