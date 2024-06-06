import "./TopPackageCard.css";
import Image from "next/image";
function TopPackageCard({ image, title, description }) {
    const image_path = `/public/assets/top-locations/${image}`;
    const image_style = {
        width: "100%",
        height: "200px",
    };

    return (
        <div className="package-card">
            {image && (
                <Image
                    src={image_path}
                    alt={title}
                    style={image_style}
                    width={400}
                    height={300}
                />
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default TopPackageCard;
