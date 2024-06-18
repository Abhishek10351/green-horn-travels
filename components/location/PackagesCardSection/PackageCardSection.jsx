import "./PackagesCardSection.css";
import PackagesCard from "./PackagesCard";
const packages = [
    {
        title: "Assam",
        image: "brahmaputra.jpg",
        info: "Explore the beautiful landscapes and tea gardens of Assam.",
        overlay: "rgba(249, 178, 52, 0.7)",
    },
    {
        title: "Meghalaya",
        image: "meghalaya1.jpg",
        info: "Discover the majestic waterfalls and caves in Meghalaya.",
        overlay: "rgba(62, 205, 94, 0.7)",
    },
    {
        title: "Arunachal Pradesh",
        image: "arunachal.jpg",
        info: "Experience the serene beauty and cultural heritage of Arunachal Pradesh.",
        overlay: "rgba(228, 64, 2, 0.7)",
    },
];

export default function PackagesSection() {
    return (
        <section className="package-container">
            <div className="ag-packages_box">
                {packages.map((course, index) => (
                    <PackagesCard key={index} {...course} />
                ))}
            </div>
        </section>
    );
}
