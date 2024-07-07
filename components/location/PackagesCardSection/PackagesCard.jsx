import "./Packages.css";
export default function PackagesCard({ title, image, info, overlay }) {
    const image_path = "/assets/package-images/";
    const package_path = `/tour-packages/${title.toLowerCase()}`;
    return (
        <div className="ag-packages_item">
            <a href={package_path} className="ag-packages-item_link">
                <div
                    className="ag-packages-item_bg"
                    style={{
                        backgroundImage: `url(${image_path}${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div
                    className="ag-packages-item_overlay"
                    style={{
                        backgroundColor: overlay,
                    }}
                ></div>
                <div className="ag-packages-item_title">{title}</div>
                <button className="package-card-button">View More</button>
                <div className="ag-packages-item_info">{info}</div>
            </a>
        </div>
    );
}
