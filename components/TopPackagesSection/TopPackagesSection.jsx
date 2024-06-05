import TopPackageCard from "./TopPackageCard";
import "./TopPackagesSection.css";

const topPackages = [
    {
        title: "Sivasagar",
        description:
            "Enjoy the enriching beauty of the historical town of Sivasagar.",
        image: "sivsagar.jpg",
    },
    {
        title: "Kaziranga",
        description:
            "Explore the majestic beauty and serenity of the national park.",
        image: "kaziranga.jpg",
    },
    {
        title: "Meghalaya",
        description: "Adventure awaits in Meghalaya's landscapes.",
        image: "meghalaya.jpg",
    },
];

function TopPackagesSection() {
    return (
        <section className="top-packages-section">
            <h2>Top Travel Packages</h2>
            <div className="packages-container">
                {topPackages.map((pkg, index) => (
                    <TopPackageCard key={index} {...pkg} />
                ))}
            </div>
        </section>
    );
}

export default TopPackagesSection;
