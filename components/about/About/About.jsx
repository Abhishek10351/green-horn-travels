// src/pages/About/About.jsx
"use client"
import "./About.css";
import Footer from "../../globals/Footer/Footer";
import Address from "../Address/Address";
// import images
import meghalaya from "../../../public/assets/about-page-images/meghalaya.jpg";
import kaziranga from "../../../public/assets/about-page-images/kaziranga.jpg";
import tawang from "../../../public/assets/about-page-images/tawang.jpg";
// image observer
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import travelboy from "../../../public/assets/illustrations/travelboy.png";

const AboutSection = ({ className, text, imgSrc, imgAlt }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${isIntersecting ? "visible" : ""}`}
    >
      <p>{text}</p>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

const AboutComponent = () => {
  return (
    <>
      <div className="container">
        <h1 className="about-h1">About Us</h1>
        <p className="about-p">
          Welcome to Green Horn Travels! At Green Horn Travels, we believe that
          travel is not just about visiting new places; it's about creating
          unforgettable experiences and cherished memories. With a passion for
          exploration and a commitment to excellence, we strive to provide our
          customers with the most immersive and enjoyable travel experiences in
          Northeast India. Founded with the vision of showcasing the hidden gems
          and natural wonders of Assam and its neighboring states, Green Horn
          Travels is your gateway to adventure, culture, and discovery.
        </p>
        <AboutSection
          className="about-meghalaya"
          text="Whether you're seeking the tranquility of Meghalaya's lush landscapes"
          imgSrc={meghalaya}
          imgAlt="Meghalaya"
        />
        <AboutSection
          className="about-kaziranga"
          text="the thrill of wildlife encounters in Kaziranga National Park"
          imgSrc={kaziranga}
          imgAlt="Kaziranga"
        />
        <AboutSection
          className="about-tawang"
          text="or the spiritual solace of Tawang's ancient monasteries, we have the perfect itinerary for you"
          imgSrc={tawang}
          imgAlt="Tawang"
        />
        <div className="text-two" id="text-two">
          <p>
            Our team of experienced travel experts is dedicated to crafting
            personalized travel experiences tailored to your interests,
            preferences, and budget. From arranging accommodations and
            transportation to organizing guided tours and activities, we take
            care of every detail so you can focus on enjoying your journey to
            the fullest.
          </p>
          <img src={travelboy} alt="" />
        </div>
        <div className="text-three" id="text-three">
          <p>
            Join us on an unforgettable adventure through Northeast India and
            discover the beauty, diversity, and warmth of this enchanting region
            with Green Horn Travels by your side. Let us be your trusted
            companion as you explore the wonders of Assam, Meghalaya, Arunachal
            Pradesh, and beyond. Start planning your dream trip with us today!
          </p>
          <p id="slogan">
            Experience the difference with Green Horn Travels - Where every
            journey is a story waiting to be told!
          </p>
        </div>
        <Address />

        {/* Address */}
      </div>
      <Footer />
    </>
  );
};

export default AboutComponent;
