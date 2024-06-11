import VehicleCard from "./VehicleCard";
import "./VehicleCardSection.css";

export default function VehicleCardsSection() {
    const vehicles = [
        {
            img: "alto1.png",
            name: "Hatchback",
            description:
                "Ideal for city exploration with excellent fuel efficiency.",
        },
        {
            img: "dzireblue.png",
            name: "Sedan",
            description: "Better comfort & efficiency.",
        },
        {
            img: "force-traveller.jpg",
            name: "Bus",
            description: "Provides maximum capacity for long distance.",
        },
    ];

    return (
        <div className="vehicle-cards" id="vehicle-cards">
            {vehicles.map((vehicle, index) => (
                <VehicleCard key={index} {...vehicle} />
            ))}
        </div>
    );
}
