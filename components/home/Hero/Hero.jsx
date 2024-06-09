import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero-container">
            <video
                src="./public/assets/media/introvideo.mp4"
                autoPlay
                loop
                muted
                className="hero-video"
            />
            <div className="hero-content">
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <button className="hero-btn" type="button">
                    Explore
                </button>
            </div>
        </section>
    );
}
