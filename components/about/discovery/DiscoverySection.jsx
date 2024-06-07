import data from "../../../public/assets/data/about-packages.json";
import LocationDiscoveryCard from "./Discovery";

export default function DiscoverySection() {
    return (
        <section>
            {data.map((item, index) => (
                <LocationDiscoveryCard key={index} {...item} />
            ))}
        </section>
    );
}
