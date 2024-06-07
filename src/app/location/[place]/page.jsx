export default async function LocationPage({ params }) {
    const supportedLocations = [
        "meghalaya",
        "assam",
        "arunachal pradesh",
        "arunachal",
    ];
    const place = params.place.toLowerCase();
    if (!supportedLocations.includes(place)) {
        return <h1>404 - Not Found</h1>;
    } else {
        return (
            <>
                <h1>{place}</h1>
            </>
        );
    }
}
