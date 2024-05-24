import PackageCard from "../components/PackageCard";
import data from "../assets/packages.json";
export function Home() {
    return (
        <>
            <PackageCard {...data[0]} />
        </>
    );
}
