import PlacePage from "../../../../sites/location/places/PlacePage";
export default function LocationPage({ params }) {
    const supportedLocations = ["meghalaya", "assam", "arunachal pradesh"];

    let place = decodeURIComponent(params.place);

    if (supportedLocations.includes(place)) {
        place = place.replace(/\b\w/g, (l) => l.toUpperCase());

        return <PlacePage location={place} />;
    } else {
        return <h1>404 - Not Found</h1>;
    }
}
