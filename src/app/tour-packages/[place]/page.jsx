import PlacePage from "../../../../sites/location/PlacePage";

export async function getStaticPaths({ params }) {
    const supportedLocations = ["meghalaya", "assam", "arunachal-pradesh"];

    return {
        paths: supportedLocations.map((location) => ({
            params: {
                place: location,
            },
        })),
        fallback: true,
    };
}

export async function generateStaticParams({ params }) {
    return {
        paths: [],
        fallback: true,
    };
}
export default function LocationPage({ params }) {
    const supportedLocations = ["meghalaya", "assam", "arunachal pradesh"];

    let place = decodeURIComponent(params.place)
        .toLowerCase()
        .replace(/-/g, " ");

    if (supportedLocations.includes(place)) {
        place = place.replace(/\b\w/g, (l) => l.toUpperCase());

        return <PlacePage location={place} />;
    } else {
        return <h1>404 - Not Found</h1>;
    }
}
