import "./PlaceIntro.css";

export default function PlaceIntro({ ...placesData }) {
    return (
        <section className="place-info">
            <h1>{placesData.heading}</h1>
            <div className="intro-place">
                <p>{placesData.content}</p>
            </div>
        </section>
    );
}
