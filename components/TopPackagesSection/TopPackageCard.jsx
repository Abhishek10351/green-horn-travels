import "./TopPackageCard.css";

function TopPackageCard({ image, title, description }) {
    const image_path = `./public/assets/top-locations/${image}`;
    return (
        <div className="package-card">
            {image && (
                <img src={image_path} alt={title} className="package-image" />
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default TopPackageCard;
