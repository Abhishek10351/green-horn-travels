import Navbar from "../../components/globals/Navbar/Navbar";
import Footer from "../../components/globals/Footer/Footer";
import IntroSection from "../../components/carrental/introsection/IntroSection";
import VehicleCardsSection from "../../components/carrental/vehiclecard/VehicleCardsSection";
import FloatingPanel from "../../components/carrental/floatingpanel/FloatingPanel";
import "./Carrentals.css";
export default function Carrentals() {
    return (
        <>
            <Navbar />
            <div className="carrental-container">
                {/* <h1>Car Rentals</h1> */}
                <IntroSection />
                <VehicleCardsSection />
                <FloatingPanel />
            </div>
            <Footer />
        </>
    );
}
