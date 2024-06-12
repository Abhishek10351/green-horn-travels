import PlacePage from "../../../../sites/location/places/PlacePage";
export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    };
}

export async function generateStaticParams() {
    return {
        paths: [],
        fallback: true,
    };
}
export default function LocationPage({ params }) {
    const supportedLocations = ["meghalaya", "assam", "arunachal pradesh"];

    let place = decodeURIComponent(params.place).toLowerCase();

    if (supportedLocations.includes(place)) {
        place = place.replace(/\b\w/g, (l) => l.toUpperCase());

        return <PlacePage location={place} />;
    } else {
        return <h1>404 - Not Found</h1>;
    }
}
