// src/pages/About/About.jsx
import "./About.css";
import Footer from "../../globals/Footer/Footer";
import Address from "../Address/Address";
import Image from "next/image";
import Welcome from "../welcome/Welcome";
import DiscoverySection from "../Discovery/DiscoverySection";
export default function AboutComponent() {
    return (
        <>
            <main className="container">
                <Welcome />

                <DiscoverySection />
                <section className="text-two" id="text-two">
                    <p>
                        Our team of experienced travel experts is dedicated to
                        crafting personalized travel experiences tailored to
                        your interests, preferences, and budget. From arranging
                        accommodations and transportation to organizing guided
                        tours and activities, we take care of every detail so
                        you can focus on enjoying your journey to the fullest.
                    </p>
                    <Image
                        src="/public/assets/illustrations/travelboy.png"
                        alt="travelboy"
                        width={500}
                        height={500}
                    />
                </section>
                <section className="text-three" id="text-three">
                    <p>
                        Join us on an unforgettable adventure through Northeast
                        India and discover the beauty, diversity, and warmth of
                        this enchanting region with Green Horn Travels by your
                        side. Let us be your trusted companion as you explore
                        the wonders of Assam, Meghalaya, Arunachal Pradesh, and
                        beyond. Start planning your dream trip with us today!
                    </p>
                    <p id="slogan">
                        Experience the difference with Green Horn Travels -
                        Where every journey is a story waiting to be told!
                    </p>
                </section>
                <Address />
            </main>
            <Footer />
        </>
    );
}
