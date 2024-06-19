"use client";
import "./Hero.css";
import TypingAnimation from "../Typing Animation/TypingAnimation";
export default function Hero() {
  function scrollToTopPackagesSection() {
    document
      .getElementById("top-packages-section")
      .scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero-container">
      <video
        src="/assets/media/introvideo.mp4"
        autoPlay
        loop
        muted
        className="hero-video"
      />
      <div className="hero-content">
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>

        <button
          onClick={scrollToTopPackagesSection}
          className="hero-btn"
          // type="button"
        >
          Explore
        </button>
      </div>
      <div className="animation">
        <TypingAnimation />
      </div>
    </section>
  );
}
