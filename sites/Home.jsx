import PackageCard from "../components/PackageCard";
import data from "../assets/data/packages.json";
import about from "../assets/data/about-us.json";
export function Home() {
    return (
        <>
            <PackageCard {...data[0]} />
        </>
    );
}

