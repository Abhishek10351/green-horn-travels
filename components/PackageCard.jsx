// import "..style/PackageCard.css";
import "./PackageCard.css";
import Link from "next/link";

export default function PackageCard({ ...props }) {
    return (
        <>
            <div className="card module">
                <div className="img">
                    {" "}
                    <img src={props.img} id="placeimg" alt={props.placeName} />
                </div>
                <div className="cont">
                    <div className="name">
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        {props.placeName}
                    </div>
                    <div className="abt">{props.info}</div>
                    <div className="price">{props.price}Rs</div>
                    <div className="go-btn">
                        <Link
                            href={`/locations/${props.location}`}
                            className="gobtn"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
