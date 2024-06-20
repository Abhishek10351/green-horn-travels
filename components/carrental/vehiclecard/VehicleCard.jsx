import Image from "next/image";
import "./VehicleCard.css";

export default function VehicleCard({ ...props }) {

  const url_text = encodeURIComponent(`Hello, I am interested in booking a ${props.name}. Can you please provide me with more information?`);
  const url = `https://wa.me/7002822793?text=${url_text}`;
    return (
        <div className={`vehicle-card`}>
            <Image
                src={`/assets/cars/${props.img}`}
                alt={props.name}
                width={300}
                height={200}
                className="vehicle-image"
            />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <a href={url} target="_blank">
                <button className="vehicle-button">Book Now</button>
            </a>
        </div>
    );
}
