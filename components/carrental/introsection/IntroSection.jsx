"use client";
import Image from "next/image";
import "./IntroSection.css";

export default function IntroSection() {
  function scrollToVehicleCards() {
    document
      .getElementById("vehicle-cards")
      .scrollIntoView({ behavior: "smooth" });
  }

  return (
      <section className="intro-carrentals">
          <p>
              Is this your first time venturing out on a tour? Don&apos;t worry,
              Green Horn Travels is here to make your journey smooth! We offer a
              wide range of car rentals to suit your every travel need, from
              compact cars for exploring bustling cities to spacious SUVs for
              conquering rugged terrains. Explore at your own pace and create
              unforgettable memories with Green Horn Travels!
          </p>
          <Image
              className="intro-carrentals-image"
              src="/assets/illustrations/carrental.jpg"
              alt="Car Rental"
              width={300}
              height={300}
          />
          <a href="#vehicle-cards">
              <button onClick={scrollToVehicleCards}>Click here</button>
          </a>
      </section>
  );
}
