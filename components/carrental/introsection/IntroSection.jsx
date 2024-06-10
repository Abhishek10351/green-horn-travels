import carrental from "../../public/assets/illustrations/carrental.jpg"; 
import Image from 'next/image';
import './IntroSection.css';

export default function IntroSection() {
  function scrollToVehicleCards() {
    document.getElementById("vehicle-cards").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="intro-carrentals">
      <p>
        Is this your first time venturing out on a tour? Don't worry, Green
        Horn Travels is here to make your journey smooth! We offer a wide
        range of car rentals to suit your every travel need, from compact
        cars for exploring bustling cities to spacious SUVs for conquering
        rugged terrains. Explore at your own pace and create unforgettable
        memories with Green Horn Travels!
      </p>
      <Image src={carrental} alt="Car Rental" />
      <a href="#vehicle-cards"><button onClick={scrollToVehicleCards}>Click here</button></a>
      <marquee behavior="scroll" direction="left" scrollamount="8">
        Bookings open!! Call us at  <i className="fas fa-phone"></i><span> 98745745258</span> or email us at  <i className="fas fa-envelope"></i><span>{" greenhorntravels@gmail.com"}</span>. Flat 10% instant discount on your first trip. 
      </marquee>
    </section>
  );
}

