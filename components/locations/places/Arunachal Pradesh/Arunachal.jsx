import Footer from "../../../../components//globals/Footer/Footer";
import "./Arunachal.css";
import PlacesCardSection from "../../PlacesCardSection/PlacesCardSection";
import placesData from "../../../../public/assets/data/packages.json";

export default function Arunachal() {
    // Filter placesData for locations in Arunachal
    const ArunachalPlaces = placesData.filter(
        (place) => place.location === "Arunachal Pradesh"
    );

    return (
        <>
            <div className="Arunachal-container">
                <section>
                    <h1>Hello from Arunachal</h1>
                    <div className="intro-Arunachal">
                        <p>
                            The beautiful state of Arunachal, located in
                            northeastern India, is known for its breathtaking
                            landscapes and rich cultural heritage. With its
                            rolling hills, cascading waterfalls, and lush
                            greenery, Arunachal offers a paradise for nature
                            lovers and adventure enthusiasts. The state is home
                            to diverse indigenous communities, each with its
                            unique traditions, music, and cuisine. Whether
                            you're exploring the living root bridges in
                            Cherrapunji, trekking through the picturesque
                            valleys of Mawlynnong, or experiencing the vibrant
                            festivals of Shillong, Arunachal promises an
                            unforgettable journey into the heart of nature and
                            culture.
                        </p>
                    </div>
                </section>

                <PlacesCardSection places={ArunachalPlaces} />
            </div>
            <Footer />
        </>
    );
}
