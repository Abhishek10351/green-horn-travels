import "./AboutUs.css";
import Image from "next/image"; 


const AboutUs = () => {
    return (
        <section className="about-us">
            <header className="about-header">
                <h1>About Us</h1>
            </header>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Welcome to Green Horn Travels, your premier travel
                        agency in Guwahati, Assam. Explore Assam&apos;s heritage
                        with visits to Kamakhya Temple and Umananda Temple, and
                        embark on safaris in Kaziranga and Manas National Parks.
                        Discover Meghalaya&apos;s wonders in Shillong,
                        Cherrapunji, and Dawki, and experience the beauty of
                        Asia&apos;s cleanest village, Mawlynnong. Journey to
                        Arunachal Pradesh&apos;s Tawang, Sela Pass, and Bomdila
                        for breathtaking landscapes. In addition to our curated
                        tours, Green Horn Travels also offers a reliable car
                        rental service for your convenience. Whether you&apos;re
                        exploring the bustling streets of Guwahati or venturing
                        into the serene landscapes of Northeast India, our fleet
                        of well-maintained vehicles is at your disposal. Our
                        personalized service ensures seamless adventures. Book
                        with{" "}
                        <span>
                            <b>Green Horn Travels</b>
                        </span>
                        <b>today!</b>
                    </p>
                </div>
                <div className="about-illustration">
                    <Image
                        src="/public/assets/illustrations/travel-concept.png"
                        alt="Illustration"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
