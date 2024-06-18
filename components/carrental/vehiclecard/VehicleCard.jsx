"use static";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import "./VehicleCard.css";

export default function VehicleCard({ ...props }) {
  // const { ref, inView } = useInView();

  function handleBookNow(vehicleName) {
    alert(`Book Now: ${vehicleName}`);
  }
  // <section ref={ref} className={`vehicle-card ${inView ? 'fade-in' : ''}`}>

  return (
    <section className={`vehicle-card`}>
      <Image
        src={`/assets/cars/${props.img}`}
        alt={props.name}
        width={300}
        height={200}
        className="vehicle-image"
      />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <a href="https://wa.me/7002822793" target="_blank">
        <button className="vehicle-button">Book Now</button>
      </a>
    </section>
  );
  // <button onClick={() => handleBookNow(props.name)}>Book Now</button>;
}
