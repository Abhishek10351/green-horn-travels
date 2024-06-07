// src/pages/About/About.jsx
import "./About.css";
import Footer from "../../globals/Footer/Footer";
import Address from "../address/Address";
import Welcome from "../welcome/Welcome";
import DiscoverySection from "../discovery/DiscoverySection";
import Team from "../team/Team";
import Adventure from "../adventure/Adventure";
export default function AboutComponent() {
    return (
        <>
            <main className="container">
                <Welcome />
                <DiscoverySection />
                <Team />
                <Adventure />
                <Address />
            </main>
            <Footer />
        </>
    );
}
