import "./PackageCard.css";
import Link from "next/link";
import Image from "next/image";
export default function PackageCard({ ...props }) {
    return (
        <>
            <div className="card module">
                <div className="img">
                    {" "}
                    <Image
                        src={"/assets/locations/" + props.img}
                        id="placeimg"
                        alt={props.placeName}
                        width={400}
                        height={300}
                    />
                </div>
                <div className="cont">
                    <div className="name">
                        <i className="fa-solid fa-map-marker-alt"></i>{" "}
                        {props.placeName}
                    </div>
                    <div className="abt">{props.info}</div>
                    <div className="go-btn">
                        <Link
                            href={`https://wa.me/7002822793`}
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
