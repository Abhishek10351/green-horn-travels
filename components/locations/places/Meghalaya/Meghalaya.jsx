import Footer from "../../../../components//globals/Footer/Footer";
import "./Meghalaya.css";
import PlacesCardSection from "../../PlacesCardSection/PlacesCardSection";
import placesData from "../../../../public/assets/data/packages.json";

export default function Meghalaya() {
    // Filter placesData for locations in Meghalaya
    const MeghalayaPlaces = placesData.filter(
        (place) => place.location === "Meghalaya"
    );

    return (
        <>
            <div className="Meghalaya-container">
                <h1>Hello from Meghalaya</h1>
                <div className="intro-Meghalaya">
                    <p>
                        The beautiful state of Meghalaya, located in
                        northeastern India, is known for its breathtaking
                        landscapes and rich cultural heritage. With its rolling
                        hills, cascading waterfalls, and lush greenery,
                        Meghalaya offers a paradise for nature lovers and
                        adventure enthusiasts. The state is home to diverse
                        indigenous communities, each with its unique traditions,
                        music, and cuisine. Whether you're exploring the living
                        root bridges in Cherrapunji, trekking through the
                        picturesque valleys of Mawlynnong, or experiencing the
                        vibrant festivals of Shillong, Meghalaya promises an
                        unforgettable journey into the heart of nature and
                        culture.
                    </p>
                </div>

                <PlacesCardSection places={MeghalayaPlaces} />
            </div>
            <Footer />
        </>
    );
}
