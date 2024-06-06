import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="./public/assets/media/introvideo.mp4" autoPlay loop muted className="hero-video" />
      <div className="hero-content">
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <button className="hero-btn" type="button">
          Explore
        </button>
      </div>
    </div>
  );
}

export default Hero;
