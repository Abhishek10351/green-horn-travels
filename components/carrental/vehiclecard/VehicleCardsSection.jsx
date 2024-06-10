import VehicleCard from "./VehicleCard";
import compactCar from "../../assets/cars/alto1.png";
import sedan from "../../public/assets/cars/dzireblue.png";
import bus from "../../public/assets/cars/force-traveller.jpg";
import './VehicleCardSection.css';


export default function VehicleCardsSection() {
  const vehicles = [
    {
      img: compactCar,
      name: "Hatchback",
      description: "Ideal for city exploration with excellent fuel efficiency.",
    },
    {
      img: sedan,
      name: "Sedan",
      description: "Better comfort & efficiency.",
    },
    {
      img: bus,
      name: "Bus",
      description: "Provides maximum capacity for long distance.",
    },
  ];

  return (
    <section className="vehicle-cards" id="vehicle-cards">
      {vehicles.map((vehicle, index) => (
        <VehicleCard
          key={index}
          img={vehicle.img}
          name={vehicle.name}
          description={vehicle.description}
        />
      ))}
    </section>
  );
}
