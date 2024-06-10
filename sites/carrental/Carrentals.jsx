import Footer from "../../components/globals/Footer/Footer";
import IntroSection from "../../components/carrental/introSection/IntroSection";
import VehicleCardsSection from "../../components/carrental/vehiclecard/VehicleCardsSection";
import FloatingPanel from "../../components/carrental/floatingpanel/FloatingPanel";

export default function Carrentals() {
  return (
    <>
      <div className="carrental-container">
        <h1>Car Rentals</h1>
        <IntroSection />
        <VehicleCardsSection />
        <FloatingPanel />
      </div>
      <Footer />
    </>
  );
}

