import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import './VehicleCard.css';

export default function VehicleCard(props) {
  const { ref, inView } = useInView();

  function handleBookNow(vehicleName) {
    alert(`Book Now: ${vehicleName}`);
  }

  return (
    <section ref={ref} className={`vehicle-card ${inView ? 'fade-in' : ''}`}>
      <Image src={img} alt={name} width={300} height={200} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <button onClick={() => handleBookNow(props.name)}>Book Now</button>
    </section>
  );
}


